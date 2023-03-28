import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {IconButton} from '..';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {IconFilledAddCircle} from '../../icons';
import {CreateThemeArgs, ThemeProvider} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

export const StoryIconButtonStylingOverrides = () => (
  <StorybookPage>
    <StorybookCase>
      <IconButton
        overrides={{stylePreset: 'stylingOverrides'}}
        aria-label="styling overrides icon button"
      >
        <IconFilledAddCircle />
      </IconButton>
    </StorybookCase>
  </StorybookPage>
);
StoryIconButtonStylingOverrides.storyName = 'Styling overrides';

export const StoryIconButtonOverrides = () => (
  <StorybookPage>
    <StorybookCase title="Logical props">
      <IconButton
        overrides={{
          stylePreset: 'customLogicalPropsStyle',
          paddingInline: 'space060',
          paddingBlock: 'space050',
        }}
        aria-label="logical props icon button"
      >
        <IconFilledAddCircle />
      </IconButton>
    </StorybookCase>
    <StorybookCase title="Icon size">
      <IconButton
        overrides={{iconSize: 'iconSize020'}}
        aria-label="logical props icon button"
      >
        <IconFilledAddCircle />
      </IconButton>
    </StorybookCase>
    <StorybookCase title="Custom outline">
      <IconButton
        overrides={{stylePreset: 'customOutlineStyle'}}
        aria-label="custom outline icon button"
      >
        <IconFilledAddCircle />
      </IconButton>
    </StorybookCase>
  </StorybookPage>
);
StoryIconButtonOverrides.storyName = 'Overrides';

const iconButtonCustomThemeObject: CreateThemeArgs = {
  name: 'icon-button-custom-theme',
  overrides: {
    stylePresets: {
      customLogicalPropsStyle: {
        base: {
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderRadius: '{{borders.borderRadiusRounded050}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
        },
      },
      customOutlineStyle: {
        base: {
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderRadius: '{{borders.borderRadiusRounded050}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '10px',
        },
      },
      stylingOverrides: {
        base: {
          backgroundColor: '{{colors.inkBrand010}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.interfaceInformative020}}',
        },
      },
    },
  },
};

export default {
  title: 'Components/Icon button',
  component: IconButton,
  parameters: {
    nkDocs: {
      title: 'Icon button',
      url: 'https://newskit.co.uk/components/button',
      description:
        'Icon buttons allow users to make choices, take actions, and help guide around an interface with a single tap.',
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
          iconButtonCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
