import React from 'react';
import {TextInput, TextInputProps} from '..';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {TextInputSize} from '../types';
import {createTheme} from '../../theme';

const renderTextInputWithLabelAndAssistiveText = (props: TextInputProps) => (
  <TextInput label="label" assistiveText="assistiveText" {...props} />
);

const renderTextInputWithoutAssistiveText = (props: TextInputProps) => (
  <TextInput label="label" {...props} spellCheck />
);

const renderTextInputWithLabelHidden = (props: TextInputProps) => (
  <TextInput label="label" hideLabel assistiveText="assistiveText" {...props} />
);

describe('TextInput', () => {
  test('renders correctly with label and assistive text', () => {
    const fragment = renderToFragmentWithTheme(
      renderTextInputWithLabelAndAssistiveText,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly without asistive text', () => {
    const fragment = renderToFragmentWithTheme(
      renderTextInputWithoutAssistiveText,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with label hidden', () => {
    const fragment = renderToFragmentWithTheme(renderTextInputWithLabelHidden);
    expect(fragment).toMatchSnapshot();
  });

  test('renders small text input', () => {
    const props: TextInputProps = {
      size: TextInputSize.Small,
      label: 'label',
      assistiveText: 'assistiveText',
    };
    const fragment = renderToFragmentWithTheme(
      renderTextInputWithLabelAndAssistiveText,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders large text input', () => {
    const props: TextInputProps = {
      size: TextInputSize.Large,
      label: 'label',
      assistiveText: 'assistiveText',
    };
    const fragment = renderToFragmentWithTheme(
      renderTextInputWithLabelAndAssistiveText,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders disabled text input', () => {
    const props: TextInputProps = {
      disabled: true,
      label: 'label',
      assistiveText: 'assistiveText',
    };
    const fragment = renderToFragmentWithTheme(
      renderTextInputWithLabelAndAssistiveText,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders readonly text input', () => {
    const props: TextInputProps = {
      readOnly: true,
      label: 'label',
      assistiveText: 'assistiveText',
    };
    const fragment = renderToFragmentWithTheme(
      renderTextInputWithLabelAndAssistiveText,
      props,
    );
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
    const fragment = renderToFragmentWithTheme(
      renderTextInputWithLabelAndAssistiveText,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders with fixed width', () => {
    const props: TextInputProps = {
      label: 'label',
      assistiveText: 'assistiveText',
      overrides: {
        width: 'sizing120',
      },
    };
    const fragment = renderToFragmentWithTheme(
      renderTextInputWithLabelAndAssistiveText,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders with full width', () => {
    const props: TextInputProps = {
      label: 'label',
      assistiveText: 'assistiveText',
      overrides: {
        width: '100%',
      },
    };
    const fragment = renderToFragmentWithTheme(
      renderTextInputWithLabelAndAssistiveText,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('should render custom aria-label', () => {
    const props: TextInputProps = {
      label: 'label',
      ariaLabel: 'my custom aria label',
      assistiveText: 'assistiveText',
    };

    const fragment = renderToFragmentWithTheme(
      renderTextInputWithLabelAndAssistiveText,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('should render custom placeholder', () => {
    const props: TextInputProps = {
      label: 'label',
      placeholder: 'This is some text',
      assistiveText: 'assistiveText',
    };

    const fragment = renderToFragmentWithTheme(
      renderTextInputWithLabelAndAssistiveText,
      props,
    );
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
      assistiveText: 'Assistive Text',
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
        },
      },
    };
    const fragment = renderToFragmentWithTheme(
      TextInput,
      props,
      myCustomTheme,
    ) as any;

    expect(fragment).toMatchSnapshot();
  });
});
