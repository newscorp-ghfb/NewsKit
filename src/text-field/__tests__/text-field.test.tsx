import React, {createRef} from 'react';
import {fireEvent, act} from '@testing-library/react';
import {TextField, TextFieldProps, TextFieldSize} from '..';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {AssistiveText} from '../../assistive-text';
import {Label, LabelProps} from '../../label';
import {createTheme, EventTrigger, InstrumentationProvider} from '../..';
import {IconFilledClose, IconFilledSearch} from '../../icons';

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
    placeholder="placeholder"
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
  ['small', 'medium', 'large'].forEach(size => {
    test(`renders ${size} TextField`, () => {
      const props: TextFieldProps = {
        name: 'textfield',
        size: size as TextFieldSize,
      };
      const fragment = renderToFragmentWithTheme(TextField, props);
      expect(fragment).toMatchSnapshot();
    });
  });
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

    act(() => {
      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    });
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
              placeholderColor: 'red',
            },
          },
        },
      },
    });
    const props: TextFieldProps = {
      overrides: {
        stylePreset: 'textInputContainerCustom',
        paddingBlock: 'space020',
        paddingInline: 'space020',
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

  test('renders TextField with logical props overrides', () => {
    const props: TextFieldProps = {
      overrides: {
        paddingInline: 'space020',
        paddingBlock: 'space040',
        marginBlock: 'space060',
        marginInline: 'space080',
      },
    };
    const fragment = renderWithTheme(renderTextField, props) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('fires focus event onFocus with custom originator', async () => {
    const mockFireEvent = jest.fn();

    const props: TextFieldProps = {
      eventContext: {event: 'other event data'},
      eventOriginator: 'custom-originator',
    };

    const textField = await renderWithTheme((() => (
      <InstrumentationProvider fireEvent={mockFireEvent}>
        {renderTextField(props)}
      </InstrumentationProvider>
    )) as React.FC).findByTestId('text-field-email');

    fireEvent.focus(textField);

    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'custom-originator',
      trigger: EventTrigger.Focus,
      context: {
        event: 'other event data',
      },
    });
  });
});
