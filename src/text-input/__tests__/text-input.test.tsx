import React, {createRef} from 'react';
import {fireEvent} from '@testing-library/react';
import {TextInput, TextInputProps} from '..';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {createTheme} from '../../theme';
import {IconFilledSearch} from '../../icons';

const renderTextInput = (props: TextInputProps) => (
  <TextInput
    assistiveText="Assistive Text"
    data-testid="text-input-email"
    {...props}
  />
);

describe('TextInput', () => {
  test('renders correctly with label and assistive text', () => {
    const props: TextInputProps = {
      label: 'label',
    };
    const fragment = renderToFragmentWithTheme(renderTextInput, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly without asistive text', () => {
    const props: TextInputProps = {
      label: 'label',
      spellCheck: true,
    };
    const fragment = renderToFragmentWithTheme(TextInput, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with label hidden', () => {
    const props: TextInputProps = {
      label: 'label',
      hideLabel: true,
    };
    const fragment = renderToFragmentWithTheme(renderTextInput, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders small text input', () => {
    const props: TextInputProps = {
      size: 'small',
      label: 'label',
    };
    const fragment = renderToFragmentWithTheme(renderTextInput, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders large text input', () => {
    const props: TextInputProps = {
      size: 'large',
      label: 'label',
    };
    const fragment = renderToFragmentWithTheme(renderTextInput, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders disabled text input', () => {
    const props: TextInputProps = {
      disabled: true,
      label: 'label',
    };
    const fragment = renderToFragmentWithTheme(renderTextInput, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders readonly text input', () => {
    const props: TextInputProps = {
      readOnly: true,
      label: 'label',
    };
    const fragment = renderToFragmentWithTheme(renderTextInput, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with different minHeight', () => {
    const props: TextInputProps = {
      label: 'label',
      overrides: {
        input: {
          minHeight: 'sizing090',
        },
      },
    };
    const fragment = renderToFragmentWithTheme(renderTextInput, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with fixed width', () => {
    const props: TextInputProps = {
      label: 'label',
      overrides: {
        width: 'sizing120',
      },
    };
    const fragment = renderToFragmentWithTheme(renderTextInput, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with full width', () => {
    const props: TextInputProps = {
      label: 'label',
      overrides: {
        width: '100%',
      },
    };
    const fragment = renderToFragmentWithTheme(renderTextInput, props);
    expect(fragment).toMatchSnapshot();
  });

  test('should render custom aria-label', () => {
    const props: TextInputProps = {
      label: 'label',
      ariaLabel: 'my custom aria label',
    };

    const fragment = renderToFragmentWithTheme(renderTextInput, props);
    expect(fragment).toMatchSnapshot();
  });

  test('should render custom placeholder', () => {
    const props: TextInputProps = {
      label: 'label',
      placeholder: 'This is some text',
    };

    const fragment = renderToFragmentWithTheme(renderTextInput, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders text input with overrides', () => {
    const myCustomTheme = createTheme({
      name: 'my-custom-input-theme',
      overrides: {
        stylePresets: {
          textInputLabelCustom: {
            base: {
              color: '#f000dc',
            },
          },
          textInputContainerCustom: {
            base: {
              borderColor: '#D20600',
            },
          },
          assistiveTextCustom: {
            base: {
              color: '#f000dc',
            },
          },
        },
      },
    });
    const props: TextInputProps = {
      label: 'label',
      overrides: {
        label: {
          stylePreset: 'textInputLabelCustom',
          typographyPreset: 'utilityLabel010',
          spaceStack: 'space050',
          spaceInline: 'space020',
        },
        input: {
          stylePreset: 'textInputContainerCustom',
          spaceInset: 'spaceInset020',
          minHeight: 'sizing090',
          typographyPreset: 'utilityBody030',
          spaceStack: 'space040',
        },
        assistiveText: {
          stylePreset: 'assistiveTextCustom',
          typographyPreset: 'utilityLabel030',
          minHeight: 'sizing050',
        },
      },
    };
    const fragment = renderToFragmentWithTheme(
      renderTextInput,
      props,
      myCustomTheme,
    ) as any;

    expect(fragment).toMatchSnapshot();
  });

  it('focus can be triggered with ref', () => {
    const inputRef = createRef<HTMLInputElement>();

    const props = {
      label: 'label',
      ref: inputRef,
    };

    renderWithTheme(TextInput, props);

    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
    expect(inputRef.current).toHaveFocus();
  });

  it('calls onBlur passed from the props', () => {
    const onBlur = jest.fn();
    const props: TextInputProps = {
      label: 'label',
      placeholder: 'This is some text',
      onBlur,
    };

    const {getByTestId} = renderWithTheme(renderTextInput, props);
    fireEvent.blur(getByTestId('text-input-email'));

    expect(onBlur).toHaveBeenCalled();
  });

  it('calls onChange passed from the props', () => {
    const onChange = jest.fn();
    const props: TextInputProps = {
      label: 'label',
      placeholder: 'This is some text',
      onChange,
    };

    const {getByTestId} = renderWithTheme(renderTextInput, props);
    fireEvent.change(getByTestId('text-input-email'), {
      target: {value: 'test'},
    });

    expect(onChange).toHaveBeenCalled();
  });

  test('renders text input with leading icon', () => {
    const props: TextInputProps = {
      label: 'label',
      icon: (
        <IconFilledSearch
          overrides={{
            size: 'iconSize020',
            stylePreset: 'inkSubtle',
          }}
        />
      ),
    };
    const fragment = renderToFragmentWithTheme(renderTextInput, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders text input with overrides for leading and validation icon', () => {
    const props: TextInputProps = {
      label: 'label',
      icon: (
        <IconFilledSearch
          overrides={{
            size: 'iconSize020',
            stylePreset: 'inkSubtle',
          }}
        />
      ),
      overrides: {
        input: {
          leadingIcon: {
            iconOffset: 'space040',
            spaceInset: 'space080',
          },
          validationIcon: {
            iconOffset: 'space040',
            spaceInset: 'space080',
            iconSize: 'iconSize030',
          },
        },
      },
    };
    const fragment = renderToFragmentWithTheme(renderTextInput, props);
    expect(fragment).toMatchSnapshot();
  });
});
