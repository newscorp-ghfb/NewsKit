import React, {createRef} from 'react';
import {cleanup, fireEvent, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Select, SelectProps, ButtonSelectSize, SelectOption} from '..';
import {
  renderToFragmentInBody,
  renderWithTheme,
  renderWithThemeInBody,
  renderToFragmentWithTheme,
} from '../../test/test-utils';
import {AssistiveText} from '../../assistive-text';
import {Label} from '../../label';
import {createTheme} from '../..';
import {IconFilledSearch} from '../../icons';
import {countries} from './phone-countries';

const id = 'select-test-id';
const panelId = 'panel-test-id';
const panelLabel = 'panel-test-label';

const renderSelectButtonWithComponents = () => (
  <>
    <Label>A label</Label>
    <Select id={id}>
      <SelectOption key="1" value="option 1">
        option 1
      </SelectOption>
      <SelectOption key="2" value="option 2">
        option 2
      </SelectOption>
    </Select>
    <AssistiveText>AssistiveText</AssistiveText>
  </>
);

const defaultSelectOptions = [
  <SelectOption key="1" value="option 1">
    option 1
  </SelectOption>,
  <SelectOption key="2" value="option 2">
    option 2
  </SelectOption>,
];

describe('Select', () => {
  beforeEach(() => {
    cleanup();
    // Clean up the accesibility message which is added to the body by Downshift
    const msg = document.getElementById('a11y-status-message');
    if (msg) msg.remove();
  });

  test('renders Select, AssistiveText and Label', () => {
    const fragment = renderToFragmentInBody(renderSelectButtonWithComponents);
    expect(fragment).toMatchSnapshot();
  });

  ['small', 'medium', 'large'].forEach(size => {
    test(`renders ${size} Select`, () => {
      const props: SelectProps = {
        id,
        size: size as ButtonSelectSize,
        children: defaultSelectOptions,
      };
      const fragment = renderToFragmentInBody(Select, props);
      expect(fragment).toMatchSnapshot();
    });
  });

  test('should render custom placeholder', () => {
    const props: SelectProps = {
      id,
      children: defaultSelectOptions,
      placeholder: 'This is some text',
    };

    const fragment = renderToFragmentInBody(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test('focus can be triggered with ref', async () => {
    const inputRef = createRef<HTMLInputElement>();

    const props = {
      id,
      ref: inputRef,
      children: defaultSelectOptions,
    };

    renderWithTheme(Select, props);

    await waitFor(() => {
      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    });
    expect(inputRef.current).toHaveFocus();
  });

  test('calls onBlur ', async () => {
    const onBlur = jest.fn();
    const props: SelectProps = {
      id,
      placeholder: 'This is some text',
      onBlur,
      children: defaultSelectOptions,
    };

    const {getByTestId} = renderWithTheme(Select, props);

    await waitFor(() => {
      fireEvent.click(getByTestId('select-button'));
    });

    await waitFor(() => {
      fireEvent.blur(getByTestId('select-button'));
    });

    expect(onBlur).toHaveBeenCalled();
  });

  test('calls onFocus ', async () => {
    const onFocus = jest.fn();
    const props: SelectProps = {
      id,
      placeholder: 'This is some text',
      onFocus,
      children: defaultSelectOptions,
    };

    const {getByTestId} = renderWithTheme(Select, props);

    await waitFor(() => {
      fireEvent.focus(getByTestId('select-button'));
    });

    expect(onFocus).toHaveBeenCalled();
  });

  test('calls onChange', async () => {
    const onChange = jest.fn();
    const props: SelectProps = {
      id,
      placeholder: 'This is some text',
      onChange,
      children: [
        <SelectOption key="1" defaultSelected value="option 1">
          option 1
        </SelectOption>,
        <SelectOption key="2" value="option 2">
          option 2
        </SelectOption>,
      ],
    };

    const {getByTestId} = renderWithTheme(Select, props);

    await waitFor(() => {
      fireEvent.change(getByTestId('select-button'), {
        target: {value: 'test'},
      });
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('does not call onChange', async () => {
    const onChange = jest.fn();
    const props: SelectProps = {
      id,
      placeholder: 'This is some text',
      onChange,
      children: defaultSelectOptions,
    };

    renderWithTheme(Select, props);

    expect(onChange).toHaveBeenCalledTimes(0);
  });

  test('renders disabled select', () => {
    const props: SelectProps = {
      id,
      state: 'disabled',
      children: defaultSelectOptions,
    };
    const fragment = renderToFragmentInBody(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test(`chevron clicks don't open panel when select is disabled`, async () => {
    const props: SelectProps = {
      id,
      state: 'disabled',
      children: defaultSelectOptions,
    };

    const {getByTestId} = renderWithTheme(Select, props);

    await waitFor(() => {
      fireEvent.mouseDown(getByTestId('select-chevron-button'));
    });

    await waitFor(() => {
      fireEvent.mouseUp(getByTestId('select-chevron-button'));
    });

    const menuElement = getByTestId('select-panel') as any;
    expect(menuElement).not.toBeVisible();
  });

  test(`button clicks don't open panel when select is disabled`, async () => {
    const props: SelectProps = {
      id,
      state: 'disabled',
      children: defaultSelectOptions,
    };

    const {getByTestId} = renderWithTheme(Select, props);

    await waitFor(() => {
      fireEvent.click(getByTestId('select-button'));
    });

    const menuElement = getByTestId('select-panel') as any;
    expect(menuElement).not.toBeVisible();
  });

  test('renders loading select', () => {
    const props: SelectProps = {
      id,
      loading: true,
      children: defaultSelectOptions,
    };
    const fragment = renderToFragmentInBody(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders select with a pre selected option', () => {
    const props: SelectProps = {
      id,
      children: [
        <SelectOption key="1" defaultSelected value="option 1">
          option 1
        </SelectOption>,
        <SelectOption key="2" value="option 2">
          option 2
        </SelectOption>,
      ],
    };
    const fragment = renderToFragmentInBody(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders select with a selected option', () => {
    const props: SelectProps = {
      id,
      children: [
        <SelectOption key="1" selected value="option 1">
          option 1
        </SelectOption>,
        <SelectOption key="2" value="option 2">
          option 2
        </SelectOption>,
      ],
    };
    const fragment = renderToFragmentInBody(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders select with leading and trailing icon', () => {
    const props: SelectProps = {
      id,
      startEnhancer: <IconFilledSearch overrides={{size: 'iconSize020'}} />,
      endEnhancer: <IconFilledSearch overrides={{size: 'iconSize020'}} />,
      children: defaultSelectOptions,
    };
    const fragment = renderToFragmentInBody(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders select with non-string options', () => {
    const props: SelectProps = {
      id,
      children: [
        <SelectOption key="1" value="option 1">
          option 1
        </SelectOption>,
        <SelectOption key="2" defaultSelected value="option 2">
          <div>this is not a string</div>
        </SelectOption>,
      ],
    };
    const fragment = renderToFragmentInBody(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders select with open menu', async () => {
    const props: SelectProps = {
      id,
      children: defaultSelectOptions,
    };
    const {getByTestId} = renderWithTheme(Select, props);

    await waitFor(() => {
      fireEvent.click(getByTestId('select-button'));
    });
    const menuElement = getByTestId('select-panel') as any;
    expect(menuElement).toHaveFocus();
  });

  test('changes focus using keyboard', async () => {
    const onChange = jest.fn();
    const props: SelectProps = {
      id,
      onChange,
      children: [
        <SelectOption key="1" defaultSelected value="option 1">
          option 1
        </SelectOption>,
        <SelectOption key="2" value="option 2">
          option 2
        </SelectOption>,
        <SelectOption key="3" value="option 3">
          option 3
        </SelectOption>,
        <SelectOption key="4" value="option 4">
          option 4
        </SelectOption>,
      ],
    };
    const {getByTestId} = renderWithTheme(Select, props);

    await waitFor(() => {
      fireEvent.click(getByTestId('select-button'));
    });

    const menuElement = getByTestId('select-panel') as any;
    expect(menuElement).toHaveFocus();

    await waitFor(() => {
      fireEvent.keyDown(getByTestId('select-panel'), {
        code: 'ArrowDown',
        key: 'ArrowDown',
        keyCode: 40,
      });
    });

    await waitFor(() => {
      fireEvent.keyDown(getByTestId('select-panel'), {
        code: 'ArrowDown',
        key: 'ArrowDown',
        keyCode: 40,
      });
    });
    await waitFor(() => {
      fireEvent.keyDown(getByTestId('select-panel'), {
        key: 'Enter',
        code: 13,
      });
    });
    expect(onChange).toHaveBeenCalled();
  });

  test('blur on chevron button opens the menu again', async () => {
    const props: SelectProps = {
      id,
      placeholder: 'This is some text',
      children: defaultSelectOptions,
    };

    const {getByTestId} = renderWithTheme(Select, props);

    await waitFor(() => {
      fireEvent.click(getByTestId('select-button'));
    });
    await waitFor(() => {
      fireEvent.click(getByTestId('select-button'));
    });

    await waitFor(() => {
      fireEvent.mouseDown(getByTestId('select-chevron-button'));
    });
    await waitFor(() => {
      fireEvent.mouseUp(getByTestId('select-chevron-button'));
    });

    const menuElement = getByTestId('select-panel') as any;
    expect(menuElement).toHaveFocus();
  });

  test('renders Select with overrides', async () => {
    const myCustomTheme = createTheme({
      name: 'my-custom-input-theme',
      overrides: {
        stylePresets: {
          selectContainerCustom: {
            base: {
              borderColor: '#D20600',
            },
          },
        },
      },
    });

    const props: SelectProps = {
      id,
      overrides: {
        button: {
          stylePreset: 'selectContainerCustom',
          typographyPreset: 'utilityBody030',
        },
      },
      children: [
        <SelectOption
          defaultSelected
          overrides={{spaceInset: 'space050', spaceInline: 'space020'}}
          selectedIcon="TEST"
          value="option 1"
          key="1"
        >
          option 1
        </SelectOption>,
        <SelectOption key="2" value="option 2">
          option 2
        </SelectOption>,
      ],
    };

    const fragment = renderToFragmentInBody(
      Select,
      props,
      myCustomTheme,
    ) as any;

    await waitFor(() => {
      fireEvent.click(screen.getByTestId('select-button'));
    });

    expect(fragment).toMatchSnapshot();
  });

  test('virtualize long list', async () => {
    const selectOptions = countries.map(({name}) => (
      <SelectOption key={name} value={name}>
        {name}
      </SelectOption>
    ));

    const {getByTestId, getAllByRole, asFragment} = renderWithThemeInBody(
      Select,
      {
        children: selectOptions,
        virtualized: 10,
        size: 'medium',
      },
    );

    // open select
    await waitFor(() => {
      fireEvent.click(getByTestId('select-button'));
    });

    // the amount of rendered options should be less than original list
    expect(getAllByRole('option').length).not.toBe(countries.length);

    expect(asFragment()).toMatchSnapshot();
  });

  describe('in Modal', () => {
    afterEach(() => {
      cleanup();
    });

    const commonProps: SelectProps = {
      id,
      panelId,
      panelLabel,
      children: [
        <SelectOption key="1" value="option 1">
          option 1
        </SelectOption>,
        <SelectOption key="2" value="option 2">
          option 2
        </SelectOption>,
      ],
      useModal: true,
    };

    test('render Select', async () => {
      const {getByTestId, asFragment, unmount} = renderWithThemeInBody(
        Select,
        commonProps,
      );

      await waitFor(() => {
        fireEvent.click(getByTestId('select-button'));
      });
      const menuElement = getByTestId('select-panel') as any;
      expect(menuElement).toHaveFocus();

      const dialogElement = getByTestId('modal');
      expect(dialogElement).toBeInTheDocument();

      expect(asFragment()).toMatchSnapshot();
      unmount();
    });

    test('render Select with overrides props', async () => {
      const props: SelectProps = {
        id,
        panelId,
        panelLabel,
        ...commonProps,
        overrides: {
          button: {width: '100%'},
          modal: {
            props: {
              closePosition: 'none',
              header: 'make your selection',
            },
          },
        },
      };

      const {getByTestId, asFragment, unmount} = renderWithThemeInBody(
        Select,
        props,
      );

      await waitFor(() => {
        fireEvent.click(getByTestId('select-button'));
      });

      expect(asFragment()).toMatchSnapshot();
      unmount();
    });

    test('render Select with overrides style', async () => {
      const props: SelectProps = {
        id,
        panelId,
        panelLabel,
        ...commonProps,
        overrides: {
          modal: {
            panel: {
              maxHeight: '50vh',
              maxWidth: '300px',
            },
          },
        },
      };

      const {getByTestId, asFragment, unmount} = renderWithThemeInBody(
        Select,
        props,
      );

      await waitFor(() => {
        fireEvent.click(getByTestId('select-button'));
      });

      expect(asFragment()).toMatchSnapshot();
      unmount();
    });

    test('correct focus order', async () => {
      const {getByTestId, unmount} = renderWithTheme(Select, commonProps);

      // open select
      await waitFor(() => {
        fireEvent.click(getByTestId('select-button'));
      });

      // check if the select panel is focused
      expect(getByTestId('select-panel')).toHaveFocus();

      // next tab should focus on close button
      await waitFor(() => {
        userEvent.tab();
      });
      expect(getByTestId('button')).toHaveFocus();

      // next tab should focus on select panel again
      await waitFor(() => {
        userEvent.tab();
      });
      expect(getByTestId('select-panel')).toHaveFocus();

      unmount();
    });

    test('can close modal', async () => {
      const {getByTestId, queryByTestId, unmount} = renderWithTheme(
        Select,
        commonProps,
      );

      // open select
      await waitFor(() => {
        fireEvent.click(getByTestId('select-button'));
      });

      // close modal
      await waitFor(() => {
        fireEvent.click(getByTestId('button'));
      });
      expect(queryByTestId('modal')).not.toBeInTheDocument();
      unmount();
    });

    test('do not close modal when click outside the panel', async () => {
      const props: SelectProps = {
        id,
        ...commonProps,
        overrides: {
          modal: {
            props: {
              header: (
                <button type="button" data-testid="header">
                  header
                </button>
              ),
            },
          },
        },
      };

      const {getByTestId, queryByTestId, unmount} = renderWithTheme(
        Select,
        props,
      );

      // open select
      await waitFor(() => {
        fireEvent.click(getByTestId('select-button'));
      });
      // click outside select panel
      await waitFor(() => {
        fireEvent.click(getByTestId('header'));
      });

      // the modal should not close
      expect(queryByTestId('modal')).toBeInTheDocument();
      unmount();
    });
  });

  test('renders SelectOption with logical props', async () => {
    const props: SelectProps = {
      id,
      panelId,
      panelLabel,
      children: [
        <SelectOption
          defaultSelected
          overrides={{paddingInline: '20px', marginBlock: '10px'}}
          selectedIcon="TEST"
          value="option 1"
          key="1"
        >
          option 1
        </SelectOption>,
        <SelectOption key="2" value="option 2">
          option 2
        </SelectOption>,
      ],
    };

    const fragment = renderToFragmentWithTheme(Select, props) as any;

    await waitFor(() => {
      fireEvent.click(screen.getByTestId('select-button'));
    });

    expect(fragment).toMatchSnapshot();
  });

  test('renders Select with logical props', async () => {
    const props: SelectProps = {
      id,
      panelId,
      panelLabel,
      overrides: {
        button: {
          marginInline: '40px',
          paddingBlock: '20px',
        },
        panel: {
          paddingInline: '30px',
          marginBlock: '30px',
        },
      },
      children: [
        <SelectOption
          defaultSelected
          selectedIcon="TEST"
          value="option 1"
          key="1"
        >
          option 1
        </SelectOption>,
        <SelectOption key="2" value="option 2">
          option 2
        </SelectOption>,
      ],
    };

    const fragment = renderToFragmentWithTheme(Select, props) as any;

    await waitFor(() => {
      fireEvent.click(screen.getByTestId('select-button'));
    });

    expect(fragment).toMatchSnapshot();
  });
});
