import React from 'react';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {StorybookCase} from '../../../test/storybook-comps';
import {Button} from '../../../button';
import {InlineMessage, toNewsKitIcon} from '../../..';
import {compileTheme, createTheme, ThemeProvider} from '../..';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const myCustomTheme = compileTheme(
  createTheme({
    name: 'outline-theme',
    overrides: {
      stylePresets: {
        buttonWithoutSafari: {
          base: {
            backgroundColor: '{{colors.interactivePrimary030}}',
            borderRadius: '{{borders.borderRadiusDefault}}',
            color: '{{colors.inkInverse}}',
            iconColor: '{{colors.inkInverse}}',
          },
          hover: {
            backgroundColor: '{{colors.interactivePrimary040}}',
          },
          active: {
            backgroundColor: '{{colors.interactivePrimary050}}',
          },
          disabled: {
            backgroundColor: '{{colors.interactiveDisabled010}}',
            color: '{{colors.inkNonEssential}}',
            iconColor: '{{colors.inkNonEssential}}',
          },
          loading: {
            backgroundColor: '{{colors.interactivePrimary020}}',
            color: '{{colors.inkBrand010}}',
            iconColor: '{{colors.inkBrand010}}',
          },
          'focus-visible': {
            outlineColor: '{{outlines.outlineColorDefault}}',
            outlineStyle: '{{outlines.outlineStyleDefault}}',
            outlineWidth: '{{outlines.outlineWidthDefault}}',
            outlineOffset: '{{outlines.outlineOffsetDefault}}',
          },
        },
        outlineColorChange: {
          base: {
            backgroundColor: '{{colors.interactivePrimary030}}',
            borderRadius: '{{borders.borderRadiusDefault}}',
            color: '{{colors.inkInverse}}',
            iconColor: '{{colors.inkInverse}}',
          },
          hover: {
            backgroundColor: '{{colors.interactivePrimary040}}',
          },
          active: {
            backgroundColor: '{{colors.interactivePrimary050}}',
          },
          disabled: {
            backgroundColor: '{{colors.interactiveDisabled010}}',
            color: '{{colors.inkNonEssential}}',
            iconColor: '{{colors.inkNonEssential}}',
          },
          loading: {
            backgroundColor: '{{colors.interactivePrimary020}}',
            color: '{{colors.inkBrand010}}',
            iconColor: '{{colors.inkBrand010}}',
          },
          'focus-visible': {
            outlineColor: 'red',
            outlineStyle: '{{outlines.outlineStyleDefault}}',
            outlineWidth: '{{outlines.outlineWidthDefault}}',
            outlineOffset: '{{outlines.outlineOffsetDefault}}',
            safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
          },
        },
        outlineSafariChange: {
          base: {
            backgroundColor: '{{colors.interactivePrimary030}}',
            borderRadius: '{{borders.borderRadiusDefault}}',
            color: '{{colors.inkInverse}}',
            iconColor: '{{colors.inkInverse}}',
          },
          hover: {
            backgroundColor: '{{colors.interactivePrimary040}}',
          },
          active: {
            backgroundColor: '{{colors.interactivePrimary050}}',
          },
          disabled: {
            backgroundColor: '{{colors.interactiveDisabled010}}',
            color: '{{colors.inkNonEssential}}',
            iconColor: '{{colors.inkNonEssential}}',
          },
          loading: {
            backgroundColor: '{{colors.interactivePrimary020}}',
            color: '{{colors.inkBrand010}}',
            iconColor: '{{colors.inkBrand010}}',
          },
          'focus-visible': {
            outlineColor: 'red',
            outlineStyle: '{{outlines.outlineStyleDefault}}',
            outlineWidth: '{{outlines.outlineWidthDefault}}',
            outlineOffset: '{{outlines.outlineOffsetDefault}}',
            safariOutlineStyle: 'dotted',
          },
        },
        outlineoffsetChange: {
          base: {
            backgroundColor: '{{colors.interactivePrimary030}}',
            borderRadius: '{{borders.borderRadiusDefault}}',
            color: '{{colors.inkInverse}}',
            iconColor: '{{colors.inkInverse}}',
          },
          hover: {
            backgroundColor: '{{colors.interactivePrimary040}}',
          },
          active: {
            backgroundColor: '{{colors.interactivePrimary050}}',
          },
          disabled: {
            backgroundColor: '{{colors.interactiveDisabled010}}',
            color: '{{colors.inkNonEssential}}',
            iconColor: '{{colors.inkNonEssential}}',
          },
          loading: {
            backgroundColor: '{{colors.interactivePrimary020}}',
            color: '{{colors.inkBrand010}}',
            iconColor: '{{colors.inkBrand010}}',
          },
          'focus-visible': {
            outlineColor: '{{outlines.outlineColorDefault}}',
            outlineStyle: '{{outlines.outlineStyleDefault}}',
            outlineWidth: '{{outlines.outlineWidthDefault}}',
            outlineOffset: '{{outlines.outlineOffsetDefault}}',
            safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
            safariOutlineOffset: '5px',
          },
        },
      },
    },
  }),
);

export default {
  title: 'Components/outline',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'Outline',
      url: 'https://www.newskit.co.uk/theme/foundation/outlines/',
      description:
        'Outlines provide visual cues about the focus or active states of elements',
    },
  },
};

export const StoryOutlineDefault = () => (
  <>
    <InlineMessage
      overrides={{stylePreset: 'inlineMessageInformative'}}
      icon={infoIcon}
    >
      The default outline style is solid, with the exception of Safari that uses
      auto, which ensures the border radius matches the element.
    </InlineMessage>
    <br />
    <br />
    <br />
    <Button>Button</Button>
  </>
);

StoryOutlineDefault.storyName = 'Default';
StoryOutlineDefault.parameters = {
  percy: {skip: true},
};

export const StoryOutlineOverrides = () => (
  <>
    <ThemeProvider theme={myCustomTheme}>
      <InlineMessage
        overrides={{stylePreset: 'inlineMessageInformative'}}
        icon={infoIcon}
      >
        Not setting //safariOutlineStyle// in a custom style preset will result
        in a sharp border radius outline. View in Safari to see this applied.
      </InlineMessage>
      <br />
      <br />
      <br />
      <StorybookCase title="Without Safari outline" />
      <Button
        overrides={{
          stylePreset: 'buttonWithoutSafari',
        }}
      >
        Button
      </Button>
      <br />
      <br />
      <br />
    </ThemeProvider>
    <ThemeProvider theme={myCustomTheme}>
      <InlineMessage
        overrides={{stylePreset: 'inlineMessageInformative'}}
        icon={infoIcon}
      >
        The Safari default is //auto//, so the colour is not controllable unless
        using //nonOutlineStyle// which will allow the colour to change in
        Safari.
      </InlineMessage>
      <br />
      <br />
      <br />
      <StorybookCase title="Style" />
      <Button
        overrides={{
          stylePreset: 'outlineSafariChange',
        }}
      >
        Button
      </Button>
      <br />
      <br />
      <br />
    </ThemeProvider>
    <ThemeProvider theme={myCustomTheme}>
      <InlineMessage
        overrides={{stylePreset: 'inlineMessageInformative'}}
        icon={infoIcon}
      >
        The outline offset may also appear different in Safari when compared to
        other browsers. This can be configured by using //safariOutlineOffset//.
      </InlineMessage>
      <br />
      <br />
      <br />
      <StorybookCase title="outlineOffset is set to 2px, safariOutlineOffset is set to 5px" />
      <Button
        overrides={{
          stylePreset: 'outlineoffsetChange',
        }}
      >
        Button
      </Button>
    </ThemeProvider>
  </>
);

StoryOutlineOverrides.storyName = 'Overrides';
StoryOutlineOverrides.parameters = {
  percy: {skip: true},
};
