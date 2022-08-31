import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {TextFieldSize} from '../../text-field';
import {StorybookPage, StorybookCase} from '../../test/storybook-comps';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {TextArea} from '../textarea';
import {Label} from '../../label';
import {AssistiveText} from '../../assistive-text';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {FormInputState} from '../../form/types';
import {TextAreaProps} from '../types';

const textAreaCustomThemeObject: CreateThemeArgs = {
  name: 'text-area-custom-theme',
  overrides: {},
};

const DOCS_URL = '/';

const sizes: TextFieldSize[] = ['small', 'medium', 'large'];
const states: FormInputState[] = ['valid', 'invalid', 'disabled'];
const resizes: TextAreaProps['resize'][] = ['vertical', 'horizontal', 'both'];

export const TextAreaSizes = () => (
  <StorybookPage title="TextArea Sizes" url={DOCS_URL}>
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
  <StorybookPage title="TextArea States" url={DOCS_URL}>
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
  <StorybookPage title="TextArea Width" url={DOCS_URL}>
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
  <StorybookPage title="TextArea Height" url={DOCS_URL}>
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
  <StorybookPage title="TextArea resize" url={DOCS_URL}>
    {resizes.map(resize => (
      <StorybookCase title={resize as string}>
        <Label>Label</Label>
        <TextArea placeholder="Placeholder" resize={resize} />
        <AssistiveText>Assistive Text</AssistiveText>
      </StorybookCase>
    ))}
  </StorybookPage>
);

export default {
  title: 'NewsKit Light/text-area',
  component: () => 'None',
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
