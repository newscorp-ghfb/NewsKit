import React, {createRef} from 'react';
import {fireEvent} from '@testing-library/react';
import {LabelProps, TextField, TextFieldProps, TextFieldSize} from '..';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {AssistiveText} from '../assistive-text';
import {Label} from '../label';
import {createTheme, IconFilledClose, IconFilledSearch} from '../..';

const renderInvalidLabel = () => <Label state="invalid">AssistiveText</Label>;
const renderTextFieldWithComponents = () => (
  <>
    <Label>A label</Label>
    <TextField name="textfield" placeholder="placeholder" />
    <AssistiveText>AssistiveText</AssistiveText>
  </>
);
const renderTextField = (props: TextFieldProps) => (
  <TextField
    data-testid="text-field-email"
    {...props}
    startEnhancer={<IconFilledSearch overrides={{size: 'iconSize020'}} />}
    endEnhancer={<IconFilledClose overrides={{size: 'iconSize010'}} />}
  />
);

describe('TextField', () => {
  test('renders TextField Correctly', () => {
    const props: TextFieldProps = {
      name: 'TextField',
    };
    const fragment = renderToFragmentWithTheme(TextField, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders Label', () => {
    const props: LabelProps = {
      children: 'A label',
      state: 'valid',
    };
    const fragment = renderToFragmentWithTheme(Label, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders TextField, AssistiveText and Label', () => {
    const fragment = renderToFragmentWithTheme(renderTextFieldWithComponents);
    expect(fragment).toMatchSnapshot();
  });
  [TextFieldSize.Small, TextFieldSize.Medium, TextFieldSize.Large].forEach(
    size => {
      test(`renders ${size} label`, () => {
        const props: LabelProps = {
          children: 'A Label',
          state: 'valid',
          size,
        };
        const fragment = renderToFragmentWithTheme(Label, props);
        expect(fragment).toMatchSnapshot();
      });

      test(`renders ${size} TextField`, () => {
        const props: TextFieldProps = {
          name: 'textfield',
          size,
        };
        const fragment = renderToFragmentWithTheme(TextField, props);
        expect(fragment).toMatchSnapshot();
      });
    },
  );
  test('should render custom placeholder', () => {
    const props: TextFieldProps = {
      placeholder: 'This is some text',
    };

    const fragment = renderToFragmentWithTheme(renderTextField, props);
    expect(fragment).toMatchSnapshot();
  });
  test('should render invalid label', () => {
    const props: LabelProps = {
      children: 'Assistive Text',
      state: 'invalid',
    };

    const fragment = renderToFragmentWithTheme(renderInvalidLabel, props);
    expect(fragment).toMatchSnapshot();
  });
  test('focus can be triggered with ref', () => {
    const inputRef = createRef<HTMLInputElement>();

    const props = {
      label: 'label',
      ref: inputRef,
    };

    renderWithTheme(TextField, props);

    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
    expect(inputRef.current).toHaveFocus();
  });

  test('calls onBlur ', () => {
    const onBlur = jest.fn();
    const props: TextFieldProps = {
      placeholder: 'This is some text',
      onBlur,
    };

    const {getByTestId} = renderWithTheme(renderTextField, props);
    fireEvent.blur(getByTestId('text-field-email'));

    expect(onBlur).toHaveBeenCalled();
  });
  test('does not call onBlur ', () => {
    const onBlur = jest.fn();
    const props: TextFieldProps = {
      placeholder: 'This is some text',
    };

    const {getByTestId} = renderWithTheme(renderTextField, props);
    fireEvent.blur(getByTestId('text-field-email'));

    expect(onBlur).toHaveBeenCalledTimes(0);
  });
  test('does not call onFocus ', () => {
    const onFocus = jest.fn();
    const props: TextFieldProps = {
      placeholder: 'This is some text',
    };

    const {getByTestId} = renderWithTheme(renderTextField, props);
    fireEvent.focus(getByTestId('text-field-email'));

    expect(onFocus).toHaveBeenCalledTimes(0);
  });
  test('calls onFocus ', () => {
    const onFocus = jest.fn();
    const props: TextFieldProps = {
      placeholder: 'This is some text',
      onFocus,
    };

    const {getByTestId} = renderWithTheme(renderTextField, props);
    fireEvent.focus(getByTestId('text-field-email'));

    expect(onFocus).toHaveBeenCalled();
  });

  test('calls onChange', () => {
    const onChange = jest.fn();
    const props: TextFieldProps = {
      placeholder: 'This is some text',
      onChange,
    };

    const {getByTestId} = renderWithTheme(renderTextField, props);
    fireEvent.change(getByTestId('text-field-email'), {
      target: {value: 'test'},
    });

    expect(onChange).toHaveBeenCalled();
  });
  test('does not call onChange', () => {
    const onChange = jest.fn();
    const props: TextFieldProps = {
      placeholder: 'This is some text',
    };

    const {getByTestId} = renderWithTheme(renderTextField, props);
    fireEvent.change(getByTestId('text-field-email'), {
      target: {value: 'test'},
    });

    expect(onChange).toHaveBeenCalledTimes(0);
  });

  test('renders disabled text field', () => {
    const props: TextFieldProps = {
      disabled: true,
    };
    const fragment = renderToFragmentWithTheme(renderTextField, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders text field with leading and trailing icon', () => {
    const props: TextFieldProps = {
      startEnhancer: <IconFilledSearch overrides={{size: 'iconSize020'}} />,
      endEnhancer: <IconFilledSearch overrides={{size: 'iconSize020'}} />,
    };
    const fragment = renderToFragmentWithTheme(renderTextField, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders TextField with overrides', () => {
    const myCustomTheme = createTheme({
      name: 'my-custom-input-theme',
      overrides: {
        stylePresets: {
          textInputContainerCustom: {
            base: {
              borderColor: '#D20600',
            },
          },
        },
      },
    });
    const props: TextFieldProps = {
      overrides: {
        stylePreset: 'textInputContainerCustom',
        spaceInset: 'spaceInset020',
        minHeight: 'sizing090',
        typographyPreset: 'utilityBody030',
        spaceStack: 'space040',
        startEnhancer: {
          spaceInline: 'space0040',
        },
        endEnhancer: {
          spaceInline: 'space040',
        },
      },
    };
    const fragment = renderToFragmentWithTheme(
      renderTextField,
      props,
      myCustomTheme,
    ) as any;

    expect(fragment).toMatchSnapshot();
  });
});
