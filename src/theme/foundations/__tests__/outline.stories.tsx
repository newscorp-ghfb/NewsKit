import React from 'react';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../../test/storybook-comps';

import {Button} from '../../../button';
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
    <StorybookHeading>Outline and Safari</StorybookHeading>
    <StorybookSubHeading>Button with default Outline</StorybookSubHeading>
    <p>
      Default outline-style is solid, but auto for Safari this ensures rounded
      edges
    </p>
    <Button>Button</Button>
    <StorybookSubHeading>
      Button without Safari outline override
    </StorybookSubHeading>
    <p>
      Not setting safariOutlineStyle in a custom style preset will result in
      sqaure outline
    </p>
    <ThemeProvider theme={myCustomTheme}>
      <Button
        overrides={{
          stylePreset: 'buttonWithoutSafari',
        }}
      >
        Button
      </Button>
    </ThemeProvider>
    <StorybookSubHeading>
      Button with default Safari but color change
    </StorybookSubHeading>
    <p>Safari default is auto so you don&apos;t get to control color</p>
    <ThemeProvider theme={myCustomTheme}>
      <Button
        overrides={{
          stylePreset: 'outlineColorChange',
        }}
      >
        Button
      </Button>
    </ThemeProvider>
    <StorybookSubHeading>
      Button with color change and Safari outline-style set to dotted
    </StorybookSubHeading>
    <p>A none auto outline style will allow color to change in Safari</p>
    <ThemeProvider theme={myCustomTheme}>
      <Button
        overrides={{
          stylePreset: 'outlineSafariChange',
        }}
      >
        Button
      </Button>
    </ThemeProvider>
    <StorybookSubHeading>
      The outline-offset may apear different in Safrai so you can change that
      too
    </StorybookSubHeading>
    <p>outlineOffset is set to 2px. safariOutlineOffset is set to 5px</p>
    <ThemeProvider theme={myCustomTheme}>
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

StoryOutlineDefault.storyName = 'outline';
StoryOutlineDefault.parameters = {
  eyes: {include: false},
  percy: {skip: true},
};
