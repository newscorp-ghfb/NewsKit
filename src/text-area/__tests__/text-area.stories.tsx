import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {TextFieldSize} from '../../text-field';
import {StorybookPage, StorybookCase} from '../../test/storybook-comps';
import {ThemeProvider, CreateThemeArgs, newskitLightTheme} from '../../theme';
import {TextArea} from '../text-area';
import {Label} from '../../label';
import {AssistiveText} from '../../assistive-text';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {FormInputState} from '../../form/types';
import {TextAreaProps} from '../types';
import {
  Form,
  FormInput,
  FormInputAssistiveText,
  FormInputLabel,
  FormInputTextArea,
} from '../../form';
import {Button} from '../../button';
import {deepMerge} from '../../utils';

const textAreaCustomThemeObject: CreateThemeArgs = {
  name: 'text-area-custom-theme',
  overrides: {
    stylePresets: {
      customStyle: deepMerge(newskitLightTheme.stylePresets.inputField, {
        base: {
          borderWidth: '{{borders.borderWidth020}}',
          borderRadius: '{{borders.borderRadiusRounded030}}',
          borderColor: '{{colors.teal060}}',
          placeholderColor: '{{colors.teal060}}',
          color: '{{colors.teal060}}',
        },
      }),
      customOutline: deepMerge(newskitLightTheme.stylePresets.inputField, {
        focus: {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
        },
      }),
    },
  },
};

const sizes: TextFieldSize[] = ['small', 'medium', 'large'];
const states: FormInputState[] = ['valid', 'invalid', 'disabled'];
const resizes: TextAreaProps['resize'][] = [
  'none',
  'vertical',
  'horizontal',
  'both',
];

export const TextAreaSizes = () => (
  <StorybookPage>
    {sizes.map(size => (
      <StorybookCase title={size}>
        <Label size={size}>Label</Label>
        <TextArea size={size} placeholder="Placeholder" />
        <AssistiveText size={size}>Assistive Text</AssistiveText>
      </StorybookCase>
    ))}
  </StorybookPage>
);

export const TextAreaStates = () => (
  <StorybookPage>
    <StorybookCase title="Base">
      <Label>Label</Label>
      <TextArea placeholder="Placeholder" />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="auto focus">
      <Label>Label</Label>
      <TextArea placeholder="Placeholder" autoFocus />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>
    {states.map(state => (
      <StorybookCase title={state as string}>
        <Label>Label</Label>
        <TextArea placeholder="Placeholder" state={state} />
        <AssistiveText>Assistive Text</AssistiveText>
      </StorybookCase>
    ))}
    <StorybookCase title="read only">
      <Label>Label</Label>
      <TextArea placeholder="Placeholder" readOnly />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>
  </StorybookPage>
);

export const TextAreaWidth = () => (
  <StorybookPage>
    <StorybookCase title="default (100%)">
      <Label>Label</Label>
      <TextArea placeholder="Placeholder" />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>

    <StorybookCase title="fixed width">
      <Label>Label</Label>
      <TextArea placeholder="Placeholder" overrides={{width: '200px'}} />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>
  </StorybookPage>
);

export const TextAreaHeight = () => (
  <StorybookPage>
    <StorybookCase title="default">
      <Label>Label</Label>
      <TextArea placeholder="Placeholder" />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>

    <StorybookCase title="fixed height">
      <Label>Label</Label>
      <TextArea placeholder="Placeholder" overrides={{minHeight: '200px'}} />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>
  </StorybookPage>
);

export const TextAreaResize = () => (
  <StorybookPage>
    {resizes.map(resize => (
      <StorybookCase title={resize as string}>
        <Label>Label</Label>
        <TextArea placeholder="Placeholder" resize={resize} />
        <AssistiveText>Assistive Text</AssistiveText>
      </StorybookCase>
    ))}
  </StorybookPage>
);

export const TextAreaRowsAndCols = () => (
  <StorybookPage>
    <StorybookCase title="cols and rows">
      <Label>Label</Label>
      <TextArea
        placeholder="Placeholder"
        rows={5}
        cols={40}
        overrides={{width: 'unset', minHeight: 'unset'}}
      />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>
  </StorybookPage>
);

export const TextAreaOverrides = () => (
  <StorybookPage>
    <StorybookCase title="style">
      <Label>Label</Label>
      <TextArea
        placeholder="Placeholder"
        overrides={{
          stylePreset: 'customStyle',
          typographyPreset: 'editorialHeadline010',
        }}
      />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="logical props">
      <Label>Label</Label>
      <TextArea
        placeholder="Placeholder"
        overrides={{
          paddingBlock: 'space050',
          paddingInline: 'space080',
          marginBlockStart: 'space060',
          marginBlockEnd: 'space050',
        }}
      />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="outline">
      <Label>Label</Label>
      <TextArea
        placeholder="Placeholder"
        overrides={{
          stylePreset: 'customOutline',
        }}
      />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>
  </StorybookPage>
);

export const TextAreaValidation = () => (
  <StorybookPage>
    <StorybookCase title="Form validation">
      <Form onSubmit={() => console.log('Form submitted')}>
        <FormInput
          name="name"
          rules={{
            required: 'Required field',
          }}
        >
          <FormInputLabel>Label</FormInputLabel>
          <FormInputTextArea />
          <FormInputAssistiveText>Assistive text</FormInputAssistiveText>
        </FormInput>
        <Button type="submit" overrides={{marginBlockStart: 'space040'}}>
          Submit
        </Button>
      </Form>
    </StorybookCase>
  </StorybookPage>
);

export default {
  title: 'NewsKit Light/text-area',
  component: TextArea,
  disabledRules: ['color-contrast'],
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          textAreaCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
