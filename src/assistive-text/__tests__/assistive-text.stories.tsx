import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {AssistiveText} from '..';
import {Block} from '../../block';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {IconOutlinedInfo} from '../../icons';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {CreateThemeArgs, ThemeProvider} from '../../theme';
import {GridLayout} from '../../grid-layout';

const LONG_TEXT = `NewsKit provides components, guidelines and standards to enable digital product teams to create high-quality, consistent products quickly. NewsKit is built on modular design principles and backed by best practice guidance for design and development.`;

const ENHANCER = (
  <IconOutlinedInfo
    overrides={{stylePreset: 'inkBrand010', size: 'iconSize020'}}
  />
);

const myCustomTheme: CreateThemeArgs = {
  name: 'my-custom-byline-theme',
  overrides: {
    stylePresets: {
      assistiveTextBorderWrapper: {
        base: {
          backgroundColor: 'transparent',
          borderWidth: '{{borders.borderWidth010}}',
          borderStyle: 'dashed',
          borderColor: '{{colors.red060}}',
        },
      },
    },
  },
};

export const StoryAssistiveTextDefault = () => (
  <StorybookPage>
    <StorybookCase>
      <AssistiveText>Please enter your email address</AssistiveText>
    </StorybookCase>
  </StorybookPage>
);
StoryAssistiveTextDefault.storyName = 'Default';

export const StoryAssistiveTextSize = () => (
  <StorybookPage>
    <StorybookCase title="Small">
      <AssistiveText size="small">
        Please enter your email address
      </AssistiveText>
    </StorybookCase>
    <StorybookCase title="Medium">
      <AssistiveText size="medium">
        Please enter your email address
      </AssistiveText>
    </StorybookCase>
    <StorybookCase title="Large">
      <AssistiveText size="large">
        Please enter your email address
      </AssistiveText>
    </StorybookCase>
  </StorybookPage>
);
StoryAssistiveTextSize.storyName = 'Size';

export const StoryAssistiveTextStates = () => (
  <StorybookPage>
    <StorybookCase title="Base">
      <AssistiveText state="valid">
        Please enter your email address
      </AssistiveText>
    </StorybookCase>
    <StorybookCase title="Invalid">
      <AssistiveText state="invalid">
        Please enter your email address
      </AssistiveText>
    </StorybookCase>
    <StorybookCase title="Disabled">
      <AssistiveText state="disabled">
        Please enter your email address
      </AssistiveText>
    </StorybookCase>
  </StorybookPage>
);
StoryAssistiveTextStates.storyName = 'States';

export const StoryAssistiveTextVariations = () => (
  <StorybookPage columns="1fr">
    <GridLayout
      columns={{xs: 'min-content', md: 'repeat(3, fit-content(100%))'}}
      columnGap={{xs: 'space020', md: 'space100'}}
      rowGap="space060"
    >
      <StorybookCase title="Start">
        <AssistiveText startEnhancer={ENHANCER}>Assistive Text</AssistiveText>
      </StorybookCase>
      <StorybookCase title="End">
        <AssistiveText endEnhancer={ENHANCER}>Assistive Text</AssistiveText>
      </StorybookCase>
      <StorybookCase title="Start and end">
        <AssistiveText startEnhancer={ENHANCER} endEnhancer={ENHANCER}>
          Assistive Text
        </AssistiveText>
      </StorybookCase>
    </GridLayout>
    <StorybookCase title="Long text start">
      <AssistiveText startEnhancer={ENHANCER}>{LONG_TEXT}</AssistiveText>
    </StorybookCase>
    <StorybookCase title="Long text end">
      <AssistiveText endEnhancer={ENHANCER}>{LONG_TEXT}</AssistiveText>
    </StorybookCase>
    <StorybookCase title="Long text start and end">
      <AssistiveText startEnhancer={ENHANCER} endEnhancer={ENHANCER}>
        {LONG_TEXT}
      </AssistiveText>
    </StorybookCase>
  </StorybookPage>
);
StoryAssistiveTextVariations.storyName = 'Variations';

export const StoryAssistiveTextLogicalProps = () => (
  <StorybookPage columns="1fr">
    <StorybookCase title="Logical paddings and margins">
      <Block stylePreset="assistiveTextBorderWrapper" marginBlockEnd="space070">
        <AssistiveText overrides={{paddingBlock: 'space080'}}>
          {LONG_TEXT}
        </AssistiveText>
      </Block>
    </StorybookCase>
    <StorybookCase title="Logical paddings, margins and enhancers">
      <Block stylePreset="assistiveTextBorderWrapper" marginBlockEnd="space070">
        <AssistiveText
          startEnhancer={ENHANCER}
          endEnhancer={ENHANCER}
          overrides={{paddingBlock: 'space080'}}
        >
          {LONG_TEXT}
        </AssistiveText>
      </Block>
    </StorybookCase>
  </StorybookPage>
);
StoryAssistiveTextLogicalProps.storyName = 'Logical props';

export default {
  title: 'Components/Assistive text',
  component: AssistiveText,
  parameters: {
    nkDocs: {
      title: 'Assistive text',
      description:
        'Assistive text is used to communicate information relating to instructions on completing an input or requirements.',
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
