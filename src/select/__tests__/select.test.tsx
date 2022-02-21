import React, {createRef, useEffect} from 'react';
import {fireEvent, screen} from '@testing-library/react';
import {act} from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import {Select, SelectProps, ButtonSelectSize, SelectOption} from '..';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {AssistiveText} from '../../assistive-text';
import {Label} from '../../label';
import {createTheme, IconFilledSearch} from '../..';
import {countries} from './phone-countries';

// @ts-ignore
const callIfExist = (props, method) => method in props && props[method]();

jest.mock('react-transition-group', () => {
  const FakeTransition = jest.fn(({children}) => children);
  const FakeCSSTransition = jest.fn(props => {
    const modifyChildren = (
      child: React.DetailedReactHTMLElement<{className: string}, HTMLElement>,
    ) => {
      const className = `nk-modal-enter-done`;

      return React.cloneElement(child, {
        className,
      });
    };

    const onEnter = React.useCallback(() => callIfExist(props, 'onEnter'), [
      props,
    ]);
    const onExited = React.useCallback(() => callIfExist(props, 'onExited'), [
      props,
    ]);

    useEffect(() => {
      if (props.in) {
        onEnter();
      } else {
        onExited();
      }
    }, [props.in, onEnter, onExited]);

    // check only for `in` prop and ignore `appear` since its always applied it does not play role
    if (props.in) {
      return (
        <FakeTransition>
          {React.Children.map(props.children, child => modifyChildren(child))}
        </FakeTransition>
      );
    }
    // modal is not in the DOM when is not open
    return null;
  });
  return {
    CSSTransition: FakeCSSTransition,
    Transition: FakeTransition,
  };
});
const renderSelectButtonWithComponents = () => (
  <>
    <Label>A label</Label>
    <Select>
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
  test('renders Select, AssistiveText and Label', () => {
    const fragment = renderToFragmentWithTheme(
      renderSelectButtonWithComponents,
    );
    expect(fragment).toMatchSnapshot();
  });

  ['small', 'medium', 'large'].forEach(size => {
    test(`renders ${size} Select`, () => {
      const props: SelectProps = {
        size: size as ButtonSelectSize,
        children: defaultSelectOptions,
      };
      const fragment = renderToFragmentWithTheme(Select, props);
      expect(fragment).toMatchSnapshot();
    });
  });

  test('should render custom placeholder', () => {
    const props: SelectProps = {
      children: defaultSelectOptions,
      placeholder: 'This is some text',
    };

    const fragment = renderToFragmentWithTheme(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test('focus can be triggered with ref', async () => {
    const inputRef = createRef<HTMLInputElement>();

    const props = {
      ref: inputRef,
      children: defaultSelectOptions,
    };

    renderWithTheme(Select, props);

    await act(async () => {
      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    });
    expect(inputRef.current).toHaveFocus();
  });

  test('calls onBlur ', async () => {
    const onBlur = jest.fn();
    const props: SelectProps = {
      placeholder: 'This is some text',
      onBlur,
      children: defaultSelectOptions,
    };

    const {getByTestId} = renderWithTheme(Select, props);

    await act(async () => {
      fireEvent.click(getByTestId('select-button'));
    });

    await act(async () => {
      fireEvent.blur(getByTestId('select-button'));
    });

    expect(onBlur).toHaveBeenCalled();
  });

  test('calls onFocus ', async () => {
    const onFocus = jest.fn();
    const props: SelectProps = {
      placeholder: 'This is some text',
      onFocus,
      children: defaultSelectOptions,
    };

    const {getByTestId} = renderWithTheme(Select, props);

    await act(async () => {
      fireEvent.focus(getByTestId('select-button'));
    });

    expect(onFocus).toHaveBeenCalled();
  });

  test('calls onChange', async () => {
    const onChange = jest.fn();
    const props: SelectProps = {
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

    await act(async () => {
      fireEvent.change(getByTestId('select-button'), {
        target: {value: 'test'},
      });
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('does not call onChange', async () => {
    const onChange = jest.fn();
    const props: SelectProps = {
      placeholder: 'This is some text',
      onChange,
      children: defaultSelectOptions,
    };

    renderWithTheme(Select, props);

    expect(onChange).toHaveBeenCalledTimes(0);
  });

  test('renders disabled select', () => {
    const props: SelectProps = {
      state: 'disabled',
      children: defaultSelectOptions,
    };
    const fragment = renderToFragmentWithTheme(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test(`chevron clicks don't open panel when select is disabled`, async () => {
    const props: SelectProps = {
      state: 'disabled',
      children: defaultSelectOptions,
    };

    const {getByTestId} = renderWithTheme(Select, props);

    await act(async () => {
      fireEvent.mouseDown(getByTestId('select-chevron-button'));
      fireEvent.mouseUp(getByTestId('select-chevron-button'));
    });

    const menuElement = getByTestId('select-panel') as any;
    expect(menuElement).not.toBeVisible();
  });

  test(`button clicks don't open panel when select is disabled`, async () => {
    const props: SelectProps = {
      state: 'disabled',
      children: defaultSelectOptions,
    };

    const {getByTestId} = renderWithTheme(Select, props);

    await act(async () => {
      fireEvent.click(getByTestId('select-button'));
    });

    const menuElement = getByTestId('select-panel') as any;
    expect(menuElement).not.toBeVisible();
  });

  test('renders loading select', () => {
    const props: SelectProps = {
      loading: true,
      children: defaultSelectOptions,
    };
    const fragment = renderToFragmentWithTheme(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders select with a pre selected option', () => {
    const props: SelectProps = {
      children: [
        <SelectOption key="1" defaultSelected value="option 1">
          option 1
        </SelectOption>,
        <SelectOption key="2" value="option 2">
          option 2
        </SelectOption>,
      ],
    };
    const fragment = renderToFragmentWithTheme(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders select with a selected option', () => {
    const props: SelectProps = {
      children: [
        <SelectOption key="1" selected value="option 1">
          option 1
        </SelectOption>,
        <SelectOption key="2" value="option 2">
          option 2
        </SelectOption>,
      ],
    };
    const fragment = renderToFragmentWithTheme(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders select with leading and trailing icon', () => {
    const props: SelectProps = {
      startEnhancer: <IconFilledSearch overrides={{size: 'iconSize020'}} />,
      endEnhancer: <IconFilledSearch overrides={{size: 'iconSize020'}} />,
      children: defaultSelectOptions,
    };
    const fragment = renderToFragmentWithTheme(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders select with non-string options', () => {
    const props: SelectProps = {
      children: [
        <SelectOption key="1" value="option 1">
          option 1
        </SelectOption>,
        <SelectOption key="2" defaultSelected value="option 2">
          <div>this is not a string</div>
        </SelectOption>,
      ],
    };
    const fragment = renderToFragmentWithTheme(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders select with open menu', async () => {
    const props: SelectProps = {
      children: defaultSelectOptions,
    };
    const {getByTestId} = renderWithTheme(Select, props);

    await act(async () => {
      fireEvent.click(getByTestId('select-button'));
    });
    const menuElement = getByTestId('select-panel') as any;
    expect(menuElement).toHaveFocus();
  });

  test('changes focus using keyboard', async () => {
    const onChange = jest.fn();
    const props: SelectProps = {
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

    await act(async () => {
      fireEvent.click(getByTestId('select-button'));
    });

    const menuElement = getByTestId('select-panel') as any;
    expect(menuElement).toHaveFocus();

    await act(async () => {
      fireEvent.keyDown(getByTestId('select-panel'), {
        code: 'ArrowDown',
        key: 'ArrowDown',
        keyCode: 40,
      });
    });

    await act(async () => {
      fireEvent.keyDown(getByTestId('select-panel'), {
        code: 'ArrowDown',
        key: 'ArrowDown',
        keyCode: 40,
      });
    });
    await act(async () => {
      fireEvent.keyDown(getByTestId('select-panel'), {
        key: 'Enter',
        code: 13,
      });
    });
    expect(onChange).toHaveBeenCalled();
  });

  test('blur on chevron button opens the menu again', async () => {
    const props: SelectProps = {
      placeholder: 'This is some text',
      children: defaultSelectOptions,
    };

    const {getByTestId} = renderWithTheme(Select, props);

    await act(async () => {
      fireEvent.click(getByTestId('select-button'));
    });
    await act(async () => {
      fireEvent.click(getByTestId('select-button'));
    });

    await act(async () => {
      fireEvent.mouseDown(getByTestId('select-chevron-button'));
    });
    await act(async () => {
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

    const fragment = renderToFragmentWithTheme(
      Select,
      props,
      myCustomTheme,
    ) as any;

    await act(async () => {
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

    const {getByTestId, getAllByRole, asFragment} = renderWithTheme(Select, {
      children: selectOptions,
      size: 'medium',
    });

    // open select
    await act(async () => {
      userEvent.click(getByTestId('select-button'));
    });

    // the amount of rendered options should be less than original list
    expect(getAllByRole('option').length).not.toBe(countries.length);

    expect(asFragment()).toMatchSnapshot();

    // next tab should focus on close button
    // userEvent.tab();
    // expect(getByTestId('button')).toHaveFocus();

    // // next tab should focus on select panel again
    // userEvent.tab();
    // expect(getByTestId('select-panel')).toHaveFocus();
  });

  describe('in Modal', () => {
    const commonProps: SelectProps = {
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
      const {getByTestId, asFragment} = renderWithTheme(Select, commonProps);

      await act(async () => {
        userEvent.click(getByTestId('select-button'));
      });
      const menuElement = getByTestId('select-panel') as any;
      expect(menuElement).toHaveFocus();

      const dialogElement = getByTestId('modal');
      expect(dialogElement).toBeInTheDocument();

      expect(asFragment()).toMatchSnapshot();
    });

    test('render Select with overrides props', async () => {
      const props: SelectProps = {
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

      const {getByTestId, asFragment} = renderWithTheme(Select, props);

      await act(async () => {
        userEvent.click(getByTestId('select-button'));
      });

      expect(asFragment()).toMatchSnapshot();
    });

    test('render Select with overrides style', async () => {
      const props: SelectProps = {
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

      const {getByTestId, asFragment} = renderWithTheme(Select, props);

      await act(async () => {
        userEvent.click(getByTestId('select-button'));
      });

      expect(asFragment()).toMatchSnapshot();
    });

    test('correct focus order', async () => {
      const {getByTestId} = renderWithTheme(Select, commonProps);

      // open select
      await act(async () => {
        userEvent.click(getByTestId('select-button'));
      });

      // check if the select panel is focused
      expect(getByTestId('select-panel')).toHaveFocus();

      // next tab should focus on close button
      userEvent.tab();
      expect(getByTestId('button')).toHaveFocus();

      // next tab should focus on select panel again
      userEvent.tab();
      expect(getByTestId('select-panel')).toHaveFocus();
    });

    test('can close modal', async () => {
      const {getByTestId, queryByTestId} = renderWithTheme(Select, commonProps);

      // open select
      await act(async () => {
        userEvent.click(getByTestId('select-button'));
      });

      // close modal
      userEvent.click(getByTestId('button'));
      expect(queryByTestId('modal')).not.toBeInTheDocument();
    });

    test('do not close modal when click outside the panel', async () => {
      const props: SelectProps = {
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

      const {getByTestId, queryByTestId} = renderWithTheme(Select, props);

      // open select
      await act(async () => {
        userEvent.click(getByTestId('select-button'));
      });

      // click outside select panel
      userEvent.click(getByTestId('header'));

      // the modal should not close
      expect(queryByTestId('modal')).toBeInTheDocument();
    });
  });
});
