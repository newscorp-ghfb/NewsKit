import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {
  IconFilledInfo,
  IconOutlinedStarOutline,
  IconFilledError,
} from '../../icons';
import {InlineMessage} from '..';
import {LinkInline} from '../../link';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const twoFlagCols = {
  xs: 'repeat(1, minmax(150px, max-content))',
  sm: 'repeat(2, minmax(150px, max-content))',
};

const CONTENT = 'A short line describing the message.';

const inlineMessageCustomThemeObject: CreateThemeArgs = {
  name: 'inline-message-custom-theme',
  overrides: {
    stylePresets: {
      customInlineMessage: {
        base: {
          backgroundColor: '#FDDCC6',
          borderWidth: '0px 0px 0px 4px',
          borderColor: '#804200',
          borderStyle: 'solid',
          borderRadius: '4px',
          iconColor: '#804200',
        },
      },
      inlineMessageStylingOverrides: {
        base: {
          color: '#804200',
        },
      },
    },
  },
};

const icon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const staricon = (
  <IconOutlinedStarOutline
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const erroricon = (
  <IconFilledError
    overrides={{
      size: 'iconSize020',
    }}
  />
);

export const StoryInlineMessageDefault = () => (
  <StorybookPage>
    <InlineMessage title="Inline message title" icon={icon}>
      {CONTENT}
    </InlineMessage>
  </StorybookPage>
);
StoryInlineMessageDefault.storyName = 'Default';

export const StoryStylePresets = () => (
  <StorybookPage columns={twoFlagCols}>
    <StorybookCase title="Informative">
      <InlineMessage
        title="Inline message title"
        icon={icon}
        aria-label="informative"
        overrides={{
          marginInlineEnd: '70px',
          stylePreset: 'inlineMessageInformative',
        }}
      >
        A short line describing the message.
      </InlineMessage>
    </StorybookCase>
    <StorybookCase title="Negative">
      <InlineMessage
        icon={erroricon}
        title="Inline message title"
        aria-label="negative"
        overrides={{
          marginInlineEnd: '70px',
          stylePreset: 'inlineMessageNegative',
        }}
      >
        A short line describing the message.
      </InlineMessage>
    </StorybookCase>
  </StorybookPage>
);

StoryStylePresets.storyName = 'Intents';

export const StoryVariations = () => (
  <StorybookPage columns={twoFlagCols}>
    <StorybookCase title="Short text">
      <InlineMessage
        aria-label="short text"
        overrides={{
          marginInlineEnd: '80px',
          marginBlockEnd: '30px',
        }}
      >
        {CONTENT}
      </InlineMessage>
    </StorybookCase>
    <StorybookCase title="Long text and link">
      <InlineMessage
        aria-label="long text and link"
        overrides={{
          marginInlineEnd: '80px',
          marginBlockEnd: '30px',
        }}
      >
        A longer line describing the message. A longer line describing the
        message <LinkInline href="">with a link</LinkInline>
      </InlineMessage>
    </StorybookCase>
    <StorybookCase title="Icon and short text">
      <InlineMessage
        icon={icon}
        aria-label="short text"
        overrides={{
          marginInlineEnd: '80px',
          marginBlockEnd: '30px',
        }}
      >
        {CONTENT}
      </InlineMessage>
    </StorybookCase>
    <StorybookCase title="Icon and long text">
      <InlineMessage
        icon={icon}
        aria-label="long text and link"
        overrides={{
          marginInlineEnd: '80px',
          marginBlockEnd: '30px',
        }}
      >
        A longer line describing the message. A longer line describing the
        message.
      </InlineMessage>
    </StorybookCase>
    <StorybookCase title="Title">
      <InlineMessage
        title="Inline message title"
        aria-label="short text"
        overrides={{
          marginInlineEnd: '80px',
        }}
      >
        {CONTENT}
      </InlineMessage>
    </StorybookCase>
    <StorybookCase title="Icon and title">
      <InlineMessage
        title="Inline message title"
        icon={icon}
        aria-label="long text and link"
        overrides={{
          marginInlineEnd: '80px',
        }}
      >
        {CONTENT}
      </InlineMessage>
    </StorybookCase>
  </StorybookPage>
);
StoryVariations.storyName = 'Variations';

export const StoryLogicalProps = () => (
  <StorybookPage columns={twoFlagCols}>
    <StorybookCase title="Logical padding props">
      <InlineMessage
        aria-label="with logical padding overrides"
        overrides={{
          paddingInline: '50px',
          marginInlineEnd: '40px',
        }}
      >
        {CONTENT}
      </InlineMessage>
    </StorybookCase>
    <StorybookCase title="Logical margin props">
      <InlineMessage
        aria-label="with logical margin overrides"
        overrides={{
          paddingInline: '50px',
          marginInlineEnd: '40px',
        }}
      >
        {CONTENT}
      </InlineMessage>
    </StorybookCase>
  </StorybookPage>
);
StoryLogicalProps.storyName = 'Logical props';

export const StoryOverrides = () => (
  <StorybookPage>
    <StorybookCase>
      <InlineMessage
        title="Inline message title"
        icon={staricon}
        aria-label="overrides"
        overrides={{
          stylePreset: 'customInlineMessage',
          content: {
            message: {
              typographyPreset: 'utilityBody020',
              stylePreset: 'inlineMessageStylingOverrides',
            },
            title: {
              spaceStack: 'space030',
              typographyPreset: 'utilityHeading020',
              stylePreset: 'inlineMessageStylingOverrides',
            },
          },
        }}
      >
        {CONTENT}
      </InlineMessage>
    </StorybookCase>
  </StorybookPage>
);
StoryOverrides.storyName = 'Styling overrides';

export default {
  title: 'Components/Inline message',
  component: () => InlineMessage,
  parameters: {
    nkDocs: {
      title: 'Inline Message',
      url: 'https://newskit.co.uk/components/inline-message/',
      description:
        'An inline message communicates contextual information. They are positioned inline, in close proximity to the element they are adding context to.',
    },
  },
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          inlineMessageCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
