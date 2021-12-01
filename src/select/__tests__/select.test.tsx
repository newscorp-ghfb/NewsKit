import React, {createRef} from 'react';
import {fireEvent, screen} from '@testing-library/react';
import {act} from 'react-dom/test-utils';
import {Select, SelectProps, ButtonSelectSize, SelectOption} from '..';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {AssistiveText} from '../../assistive-text';
import {Label} from '../../label';
import {createTheme, IconFilledSearch} from '../..';

const renderSelectButtonWithComponents = () => (
  <>
    <Label>A label</Label>
    <Select>
      <SelectOption value="option 1">option 1</SelectOption>
      <SelectOption value="option 2">option 2</SelectOption>
    </Select>
    <AssistiveText>AssistiveText</AssistiveText>
  </>
);

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
        children: [
          <SelectOption value="option 1">option 1</SelectOption>,
          <SelectOption value="option 2">option 2</SelectOption>,
        ],
      };
      const fragment = renderToFragmentWithTheme(Select, props);
      expect(fragment).toMatchSnapshot();
    });
  });

  test('should render custom placeholder', () => {
    const props: SelectProps = {
      children: [
        <SelectOption value="option 1">option 1</SelectOption>,
        <SelectOption value="option 2">option 2</SelectOption>,
      ],
      placeholder: 'This is some text',
    };

    const fragment = renderToFragmentWithTheme(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test('focus can be triggered with ref', async () => {
    const inputRef = createRef<HTMLInputElement>();

    const props = {
      ref: inputRef,
      children: [
        <SelectOption value="option 1">option 1</SelectOption>,
        <SelectOption value="option 2">option 2</SelectOption>,
      ],
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
      children: [
        <SelectOption value="option 1">option 1</SelectOption>,
        <SelectOption value="option 2">option 2</SelectOption>,
      ],
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
      children: [
        <SelectOption value="option 1">option 1</SelectOption>,
        <SelectOption value="option 2">option 2</SelectOption>,
      ],
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
        <SelectOption defaultSelected value="option 1">
          option 1
        </SelectOption>,
        <SelectOption value="option 2">option 2</SelectOption>,
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
      children: [
        <SelectOption value="option 1">option 1</SelectOption>,
        <SelectOption value="option 2">option 2</SelectOption>,
      ],
    };

    renderWithTheme(Select, props);

    expect(onChange).toHaveBeenCalledTimes(0);
  });

  test('renders disabled select', () => {
    const props: SelectProps = {
      state: 'disabled',
      children: [
        <SelectOption value="option 1">option 1</SelectOption>,
        <SelectOption value="option 2">option 2</SelectOption>,
      ],
    };
    const fragment = renderToFragmentWithTheme(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders loading select', () => {
    const props: SelectProps = {
      loading: true,
      children: [
        <SelectOption value="option 1">option 1</SelectOption>,
        <SelectOption value="option 2">option 2</SelectOption>,
      ],
    };
    const fragment = renderToFragmentWithTheme(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders select with a pre selected option', () => {
    const props: SelectProps = {
      children: [
        <SelectOption defaultSelected value="option 1">
          option 1
        </SelectOption>,
        <SelectOption value="option 2">option 2</SelectOption>,
      ],
    };
    const fragment = renderToFragmentWithTheme(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders select with a selected option', () => {
    const props: SelectProps = {
      children: [
        <SelectOption selected value="option 1">
          option 1
        </SelectOption>,
        <SelectOption value="option 2">option 2</SelectOption>,
      ],
    };
    const fragment = renderToFragmentWithTheme(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders select with leading and trailing icon', () => {
    const props: SelectProps = {
      startEnhancer: <IconFilledSearch overrides={{size: 'iconSize020'}} />,
      endEnhancer: <IconFilledSearch overrides={{size: 'iconSize020'}} />,
      children: [
        <SelectOption value="option 1">option 1</SelectOption>,
        <SelectOption value="option 2">option 2</SelectOption>,
      ],
    };
    const fragment = renderToFragmentWithTheme(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders select with non-string options', () => {
    const props: SelectProps = {
      children: [
        <SelectOption value="option 1">option 1</SelectOption>,
        <SelectOption defaultSelected value="option 2">
          <div>this is not a string</div>
        </SelectOption>,
      ],
    };
    const fragment = renderToFragmentWithTheme(Select, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders select with open menu', async () => {
    const props: SelectProps = {
      children: [
        <SelectOption value="option 1">option 1</SelectOption>,
        <SelectOption value="option 2">option 2</SelectOption>,
      ],
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
        <SelectOption defaultSelected value="option 1">
          option 1
        </SelectOption>,
        <SelectOption value="option 2">option 2</SelectOption>,
        <SelectOption value="option 3">option 3</SelectOption>,
        <SelectOption value="option 4">option 4</SelectOption>,
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
      children: [
        <SelectOption value="option 1">option 1</SelectOption>,
        <SelectOption value="option 2">option 2</SelectOption>,
      ],
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
        >
          option 1
        </SelectOption>,
        <SelectOption value="option 2">option 2</SelectOption>,
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
});
