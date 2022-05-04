import React from 'react';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {createTheme, compileTheme, ThemeProvider} from '../../theme';
import {IconFilledInfo} from '../../icons';
import {InlineMessage} from '..';
import {Link} from '../../link';

const myCustomTheme = compileTheme(
  createTheme({
    name: 'inline-message-theme',
    overrides: {
      stylePresets: {
        customInlineMessage: {
          base: {
            backgroundColor: '#a05a64',
            borderWidth: '1px 4px',
            borderColor: 'deeppink',
            borderStyle: 'solid',
            borderRadius: '3px',
            iconColor: 'deeppink',
          },
        },
      },
    },
  }),
);

const link = <Link href="/">link</Link>;
const icon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

export default {
  title: 'NewsKit Light/inline-message',
  component: () => 'None',
};

export const StoryDefault = () => (
  <>
    <StorybookHeading>Inline message</StorybookHeading>
    <StorybookSubHeading>default</StorybookSubHeading>
    <InlineMessage>Short text</InlineMessage>
    <StorybookSubHeading>with long text</StorybookSubHeading>
    <InlineMessage aria-label="short text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </InlineMessage>
    <StorybookSubHeading>with Icon</StorybookSubHeading>
    <InlineMessage icon={icon} aria-label="short text and icon">
      Short text
    </InlineMessage>
    <StorybookSubHeading>with Icon and long text</StorybookSubHeading>
    <InlineMessage icon={icon} aria-label="icon and long text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </InlineMessage>
    <StorybookSubHeading>with link</StorybookSubHeading>
    <InlineMessage icon={icon} aria-label="icon and link">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt {link} ut labore et dolore magna aliqua.
    </InlineMessage>
    <StorybookSubHeading>with title</StorybookSubHeading>
    <InlineMessage title="Your title here" aria-label="title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </InlineMessage>
    <StorybookSubHeading>with title and icon</StorybookSubHeading>
    <InlineMessage
      title="Your title here"
      icon={icon}
      aria-label="title and icon"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </InlineMessage>
  </>
);
StoryDefault.storyName = 'inline-message-default';

export const StoryOverrides = () => (
  <ThemeProvider theme={myCustomTheme}>
    <StorybookHeading>
      Inline message with custom theme and overrides
    </StorybookHeading>
    <InlineMessage
      title="Your title here"
      icon={icon}
      aria-label="overrides"
      overrides={{
        stylePreset: 'customInlineMessage',
        spaceInset: 'spaceInset050',
        icon: {
          spaceInline: 'space050',
        },
        content: {
          message: {
            typographyPreset: 'utilityBody020',
            stylePreset: 'inkInverse',
          },
          title: {
            spaceStack: 'space050',
            typographyPreset: 'utilityHeading020',
            stylePreset: 'inkInverse',
          },
        },
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </InlineMessage>
  </ThemeProvider>
);
StoryOverrides.storyName = 'inline-message-with-overrides';

export const StoryStylePresets = () => (
  <>
    <StorybookHeading>
      Inline message with different style presets
    </StorybookHeading>
    <br />
    <StorybookSubHeading>inlineMessageInformative</StorybookSubHeading>
    <InlineMessage
      title="Your title here"
      icon={icon}
      aria-label="with inlineMessageInformative"
      overrides={{
        stylePreset: 'inlineMessageInformative',
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </InlineMessage>
    <StorybookSubHeading>inlineMessageNegative</StorybookSubHeading>
    <InlineMessage
      title="Your title here"
      icon={icon}
      aria-label="with inlineMessageNegative"
      overrides={{
        stylePreset: 'inlineMessageNegative',
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </InlineMessage>
  </>
);

StoryStylePresets.storyName = 'inline-message-intents';

export const StoryLogicalProps = () => (
  <>
    <StorybookHeading>Inline message</StorybookHeading>
    <StorybookSubHeading>With logical padding props</StorybookSubHeading>
    <InlineMessage overrides={{paddingInline: '50px'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </InlineMessage>
    <StorybookSubHeading>With logical margin props</StorybookSubHeading>
    <InlineMessage overrides={{marginInline: '50px'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </InlineMessage>
  </>
);
StoryLogicalProps.storyName = 'inline-message-logical-props';
