import * as React from 'react';
import {useRef, useState} from 'react';
import {Story as StoryType} from '@storybook/react';
import {CharacterCount, CharacterCountProps} from '..';
import {
  Form,
  FormInput,
  FormInputCharacterCount,
  FormInputLabel,
  FormInputTextArea,
  FormInputTextField,
} from '../../form';
import {Button} from '../../button';
import {TextArea, TextAreaProps} from '../../text-area';
import {Label} from '../../label';
import {TextField, TextFieldSize} from '../../text-field';
import {FormInputState} from '../../form/types';
import {CreateThemeArgs, newskitLightTheme, ThemeProvider} from '../../theme';
import {deepMerge} from '../../utils';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const myCustomTheme: CreateThemeArgs = {
  name: 'my-custom-theme',
  overrides: {
    stylePresets: {
      characterCountCustom: {
        base: {
          color: '{{colors.inkBrand010}}',
        },
      },
      textAreaCustom: deepMerge(newskitLightTheme.stylePresets.inputField, {
        base: {
          borderWidth: '{{borders.borderWidth020}}',
          borderRadius: '{{borders.borderRadiusRounded030}}',
          borderColor: '{{colors.teal060}}',
          placeholderColor: '{{colors.teal060}}',
          color: '{{colors.teal060}}',
        },
      }),
    },
  },
};

export const CharacterCountDefault = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  return (
    <StorybookPage>
      <StorybookCase title="default">
        <Label htmlFor="textArea-default">Label</Label>
        <TextArea
          placeholder="Placeholder"
          id="textArea-default"
          ref={ref}
          maxLength={200}
        />
        <CharacterCount inputRef={ref} />
      </StorybookCase>
    </StorybookPage>
  );
};
CharacterCountDefault.storyName = 'Default';

export const CharacterCountSizes = () => {
  const refs = {
    small: useRef<HTMLTextAreaElement>(null),
    medium: useRef<HTMLTextAreaElement>(null),
    large: useRef<HTMLTextAreaElement>(null),
  };
  return (
    <StorybookPage>
      {Object.entries(refs).map(([size, ref]) => (
        <StorybookCase
          title={`${size.slice(0, 1).toUpperCase()}${size.substring(1)}`}
          key={size}
        >
          <Label htmlFor={`textArea-${size}`} size={size as TextFieldSize}>
            Label
          </Label>
          <TextArea
            size={size as TextAreaProps['size']}
            placeholder="Placeholder"
            id={`textArea-${size}`}
            ref={ref}
            maxLength={200}
          />
          <CharacterCount
            size={size as CharacterCountProps['size']}
            inputRef={ref}
          />
        </StorybookCase>
      ))}
    </StorybookPage>
  );
};
CharacterCountSizes.storyName = 'Size';

export const CharacterCountStates = () => {
  const refs = {
    valid: useRef<HTMLTextAreaElement>(null),
    invalid: useRef<HTMLTextAreaElement>(null),
    disabled: useRef<HTMLTextAreaElement>(null),
  };
  return (
    <StorybookPage>
      {Object.entries(refs).map(([state, ref]) => (
        <StorybookCase
          title={`${state.slice(0, 1).toUpperCase()}${state.substring(1)}`}
          key={state}
        >
          <Label htmlFor={`textArea-${state}`}>Label</Label>
          <TextArea
            placeholder="Placeholder"
            id={`textArea-${state}`}
            ref={ref}
            minLength={30}
            state={state as FormInputState}
          />
          <CharacterCount state={state as FormInputState} inputRef={ref} />
        </StorybookCase>
      ))}
    </StorybookPage>
  );
};
CharacterCountStates.storyName = 'States';

export const CharacterCountMaxLength = () => {
  const textArea = useRef<HTMLTextAreaElement>(null);
  const textField = useRef<HTMLInputElement>(null);
  return (
    <StorybookPage>
      <StorybookCase title="Text area">
        <Label htmlFor="textAreaMax">Label</Label>
        <TextArea
          placeholder="Placeholder"
          id="textAreaMax"
          ref={textArea}
          maxLength={200}
        />
        <CharacterCount inputRef={textArea} />
      </StorybookCase>
      <StorybookCase title="Text field">
        <Label htmlFor="textFieldMax">Label</Label>
        <TextField
          placeholder="Placeholder"
          id="textFieldMax"
          ref={textField}
          maxLength={20}
        />
        <CharacterCount inputRef={textField} />
      </StorybookCase>
    </StorybookPage>
  );
};
CharacterCountMaxLength.storyName = 'Max length';

export const CharacterCountExceedMaxLength = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [textareavalue, setValue] = useState('');
  const maxLength = 200;
  function validationLimit() {
    return textareavalue.length > maxLength ? 'invalid' : 'valid';
  }
  return (
    <StorybookPage>
      <StorybookCase title="Text area">
        <Label htmlFor="textArea-overlimit">Label</Label>
        <TextArea
          placeholder="Placeholder"
          ref={ref}
          state={validationLimit()}
          value={textareavalue}
          onChange={({target: {value}}) => setValue(value)}
        />
        <CharacterCount
          inputRef={ref}
          maxLength={maxLength}
          state={validationLimit()}
        />
      </StorybookCase>
    </StorybookPage>
  );
};

CharacterCountExceedMaxLength.storyName = 'Max length over limit';

export const CharacterCountMinLength = () => {
  const textArea = useRef<HTMLTextAreaElement>(null);
  const textField = useRef<HTMLInputElement>(null);
  return (
    <StorybookPage>
      <StorybookCase title="Text area">
        <Label htmlFor="textAreaMin">Label</Label>
        <TextArea
          placeholder="Placeholder"
          id="textAreaMin"
          ref={textArea}
          minLength={30}
        />
        <CharacterCount inputRef={textArea} />
      </StorybookCase>
      <StorybookCase title="Text field">
        <Label htmlFor="textFieldMin">Label</Label>
        <TextField
          placeholder="Placeholder"
          id="textFieldMin"
          ref={textField}
          minLength={10}
        />
        <CharacterCount inputRef={textField} />
      </StorybookCase>
    </StorybookPage>
  );
};
CharacterCountMinLength.storyName = 'Min length';

export const CharacterCountMinAndMaxLength = () => {
  const textArea = useRef<HTMLTextAreaElement>(null);
  const textField = useRef<HTMLInputElement>(null);
  return (
    <StorybookPage>
      <StorybookCase title="Text area">
        <Label htmlFor="textAreaMinMax">Label</Label>
        <TextArea
          placeholder="Placeholder"
          id="textAreaMinMax"
          ref={textArea}
          minLength={30}
          maxLength={200}
        />
        <CharacterCount inputRef={textArea} />
      </StorybookCase>
      <StorybookCase title="Text field">
        <Label htmlFor="textFieldMinMax">Label</Label>
        <TextField
          placeholder="Placeholder"
          id="textFieldMinMax"
          ref={textField}
          minLength={10}
          maxLength={20}
        />
        <CharacterCount inputRef={textField} />
      </StorybookCase>
    </StorybookPage>
  );
};
CharacterCountMinAndMaxLength.storyName = 'Min and max length';

export const CharacterCountForm = () => (
  <Form onSubmit={() => {}}>
    <StorybookPage>
      <StorybookCase title="Text area">
        <FormInput
          rules={{
            required: 'Required field',
            minLength: {
              value: 30,
              message: 'message is required for state to update',
            },
            maxLength: {
              value: 100,
              message: 'message is required for state to update',
            },
          }}
          name="textArea"
        >
          <FormInputLabel>Label</FormInputLabel>
          <FormInputTextArea placeholder="Placeholder" />
          <FormInputCharacterCount />
        </FormInput>
      </StorybookCase>
      <StorybookCase title="Text field">
        <FormInput
          rules={{
            required: 'Required field',
            minLength: {
              value: 10,
              message: 'message is required for state to update',
            },
            maxLength: {
              value: 25,
              message: 'message is required for state to update',
            },
          }}
          name="textField"
        >
          <FormInputLabel>Label</FormInputLabel>
          <FormInputTextField placeholder="Placeholder" />
          <FormInputCharacterCount />
        </FormInput>
      </StorybookCase>
      <StorybookCase title="">
        <Button type="submit" overrides={{marginBlockStart: 'space040'}}>
          Submit
        </Button>
      </StorybookCase>
    </StorybookPage>
  </Form>
);
CharacterCountForm.storyName = 'Form with submit validation';

export const CharacterCountStylingOverrides = () => {
  const styleRef = useRef<HTMLTextAreaElement>(null);
  return (
    <StorybookPage>
      <StorybookCase title="Style">
        <Label htmlFor="style" overrides={{stylePreset: 'inkBrand010'}}>
          Label
        </Label>
        <TextArea
          placeholder="Placeholder"
          id="style"
          ref={styleRef}
          maxLength={200}
          overrides={{stylePreset: 'textAreaCustom'}}
        />
        <CharacterCount
          inputRef={styleRef}
          overrides={{stylePreset: 'characterCountCustom'}}
        />
      </StorybookCase>
    </StorybookPage>
  );
};
CharacterCountStylingOverrides.storyName = 'Styling overrides';

export const CharacterCountOverrides = () => {
  const logicalPropsRef = useRef<HTMLTextAreaElement>(null);
  const minHeightRef = useRef<HTMLTextAreaElement>(null);
  const formatRef = useRef<HTMLTextAreaElement>(null);
  return (
    <StorybookPage>
      <StorybookCase title="Logical props">
        <Label htmlFor="logicalProps">Label</Label>
        <TextArea
          placeholder="Placeholder"
          id="logicalProps"
          ref={logicalPropsRef}
          maxLength={20}
        />
        <CharacterCount
          inputRef={logicalPropsRef}
          overrides={{marginBlock: 'space040', paddingInline: 'space060'}}
        />
      </StorybookCase>
      <StorybookCase title="Min height">
        <Label htmlFor="minHeight">Label</Label>
        <TextArea
          placeholder="Placeholder"
          id="minHeight"
          ref={minHeightRef}
          maxLength={200}
        />
        <CharacterCount
          inputRef={minHeightRef}
          overrides={{minHeight: '80px'}}
        />
      </StorybookCase>
      <StorybookCase title="Custom format">
        <Label htmlFor="format">Label</Label>
        <TextArea
          placeholder="Placeholder"
          id="format"
          ref={formatRef}
          minLength={20}
        />
        <CharacterCount
          inputRef={formatRef}
          format={({minLength, currentLength}) =>
            `You need to input at least ${minLength} characters but so far you've only entered ${currentLength}!`
          }
        />
      </StorybookCase>
    </StorybookPage>
  );
};
CharacterCountOverrides.storyName = 'Overrides';

export default {
  title: 'Components/Character count',
  parameters: {
    nkDocs: {
      title: 'Character count',
      description:
        'The Character count lets users know how much text they can enter in an input field as they type.',
    },
  },
  decorators: [
    (
      Story: StoryType,
      context: {name: string; globals: {backgrounds: {value: string}}},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          myCustomTheme,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
