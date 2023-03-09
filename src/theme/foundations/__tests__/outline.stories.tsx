import React from 'react';
import {StorybookCase} from '../../../test/storybook-comps';

import {Button} from '../../../button';
import {InlineMessage} from '../../..';
import {compileTheme, createTheme, ThemeProvider} from '../..';

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
};

export const StoryOutlineDefault = () => (
  <>
    <InlineMessage overrides={{stylePreset: 'inlineMessageInformative'}}>
      Default outline-style is solid, but auto for Safari this ensures rounded
      edges
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
      <InlineMessage overrides={{stylePreset: 'inlineMessageInformative'}}>
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
    <InlineMessage overrides={{stylePreset: 'inlineMessageInformative'}}>
      The Safari default is //auto//, so the colour is not controllable unless
      using //nonOutlineStyle// which will allow the colour to change in Safari.
    </InlineMessage>
    <br />
    <br />
    <br />
    <StorybookCase title="Style" />
    <ThemeProvider theme={myCustomTheme}>
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
    <InlineMessage overrides={{stylePreset: 'inlineMessageInformative'}}>
      The outline offset may also appear different in Safari when compared to
      other browsers. This can be configured by using //safariOutlineOffset//.
    </InlineMessage>
    <br />
    <br />
    <br />
    <ThemeProvider theme={myCustomTheme}>
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
