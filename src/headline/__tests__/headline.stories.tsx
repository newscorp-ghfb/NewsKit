import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Headline} from '..';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const headlineCustomThemeObject: CreateThemeArgs = {
  name: 'headline-custom-theme',
  overrides: {
    stylePresets: {
      tagPrimary: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactiveSecondary030}}',
          borderWidth: '{{borders.borderWidth010}}',
          color: '{{colors.inkBase}}',
          iconColor: '{{colors.inkBase}}',
          borderRadius: '{{borders.borderRadiusSharp}}',
        },
      },
      linkInline: {
        base: {
          color: '{{colors.interactivePrimary030}}',
          iconColor: '{{colors.interactivePrimary030}}',
          textDecoration: 'underline',
        },
      },
    },
  },
};

export const StoryHeadline = () => (
  <>
    <Headline>Headline text with no kicker</Headline>
    <br />
    <br />
    <Headline kickerText="Kicker">Headline text</Headline>
    <br />
    <Headline kickerText="Kicker as h2" headingAs="h3" kickerAs="h2">
      Headline as h3
    </Headline>
    <br />
    <Headline
      kickerText="Kicker overwritten preset"
      overrides={{
        kicker: {
          stylePreset: 'tagPrimary',
        },
        heading: {
          stylePreset: 'linkInline',
        },
      }}
    >
      Headline overwritten preset
    </Headline>
    <br />
    <Headline
      kickerText="Kicker custom mq margin preset"
      overrides={{
        kicker: {
          spaceInline: {
            xs: 'space080',
            md: 'space040',
          },
        },
      }}
    >
      Heading Headline
    </Headline>
    <br />
    <Headline
      kickerText="Using logical props"
      overrides={{
        paddingInline: '30px',
        paddingBlock: '15px',
      }}
    >
      For Padding
    </Headline>
    <br />
    <Headline
      kickerText="Using logical props"
      overrides={{
        marginInline: '30px',
        marginBlock: '15px',
      }}
    >
      For Margin
    </Headline>
  </>
);
StoryHeadline.storyName = 'headline';

export default {
  title: 'Components/headline',
  component: () => 'None',
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          headlineCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
