import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Headline} from '..';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {getColorCssFromTheme, styled} from '../../utils/style';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';

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
      headlineCustom: {base: {color: '{{colors.inkBrand010}}'}},
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

const BODY = 'The quick brown fox';

const HeadlineText = 'Heading';

const MarginOverridesWrapper = styled.div`
  border: 1px dashed;
  marginblock: 'space030';
  margininline: 'space030';
  paddingblock: 'space030';
  paddinginline: 'space030';
  ${getColorCssFromTheme('borderColor', 'red060')}
`;

export const StoryHeadlineDefault = () => (
  <StorybookPage columns="1fr">
    <StorybookCase title="Render as h1 (default)">
      <Headline headingAs="h1">Heading</Headline>
    </StorybookCase>
  </StorybookPage>
);
StoryHeadlineDefault.storyName = 'Default';

export const StoryHeadlineKicker = () => (
  <StorybookPage>
    <StorybookCase title="With Kicker">
      <Headline
        kickerText="Kicker"
        headingAs="h1"
        kickerAs="h1"
        overrides={{
          typographyPreset: 'editorialHeadline070',
        }}
      >
        {HeadlineText}
      </Headline>
    </StorybookCase>
  </StorybookPage>
);
StoryHeadlineKicker.storyName = 'Kicker';

export const StoryHeadlineLogicalProps = () => (
  <StorybookPage columns="1fr 1fr">
    <StorybookCase title=" editorialHeadline050">
      <MarginOverridesWrapper>
        <Headline
          overrides={{
            typographyPreset: 'editorialHeadline070',
            marginBlock: 'space030',
            marginInline: 'space030',
            paddingBlock: 'space030',
            paddingInline: 'space030',
          }}
        >
          {BODY}
        </Headline>
      </MarginOverridesWrapper>
    </StorybookCase>
    <StorybookCase title=" editorialHeadline050">
      <MarginOverridesWrapper>
        <Headline
          overrides={{
            typographyPreset: 'editorialHeadline060',
            marginBlock: 'space030',
            marginInline: 'space030',
            paddingBlock: 'space030',
            paddingInline: 'space030',
          }}
        >
          {BODY}
        </Headline>
      </MarginOverridesWrapper>
    </StorybookCase>
    <StorybookCase title=" editorialHeadline050">
      <MarginOverridesWrapper>
        <Headline
          overrides={{
            typographyPreset: 'editorialHeadline050',
            marginBlock: 'space030',
            marginInline: 'space030',
            paddingBlock: 'space030',
            paddingInline: 'space030',
          }}
        >
          {BODY}
        </Headline>
      </MarginOverridesWrapper>
    </StorybookCase>
    <StorybookCase title=" editorialHeadline040">
      <MarginOverridesWrapper>
        <Headline
          overrides={{
            typographyPreset: 'editorialHeadline040',
            marginBlock: 'space030',
            marginInline: 'space030',
            paddingBlock: 'space030',
            paddingInline: 'space030',
          }}
        >
          {BODY}
        </Headline>
      </MarginOverridesWrapper>
    </StorybookCase>
    <StorybookCase title=" editorialHeadline030">
      <MarginOverridesWrapper>
        <Headline
          overrides={{
            typographyPreset: 'editorialHeadline030',
            marginBlock: 'space030',
            marginInline: 'space030',
            paddingBlock: 'space030',
            paddingInline: 'space030',
          }}
        >
          {BODY}
        </Headline>
      </MarginOverridesWrapper>
    </StorybookCase>
    <StorybookCase title=" editorialHeadline020">
      <MarginOverridesWrapper>
        <Headline
          overrides={{
            typographyPreset: 'editorialHeadline020',
            marginBlock: 'space030',
            marginInline: 'space030',
            paddingBlock: 'space030',
            paddingInline: 'space030',
          }}
        >
          {BODY}
        </Headline>
      </MarginOverridesWrapper>
    </StorybookCase>
    <StorybookCase title=" editorialHeadline010">
      <MarginOverridesWrapper>
        <Headline
          overrides={{
            typographyPreset: 'editorialHeadline010',
            marginBlock: 'space030',
            marginInline: 'space030',
            paddingBlock: 'space030',
            paddingInline: 'space030',
          }}
        >
          {BODY}
        </Headline>
      </MarginOverridesWrapper>
    </StorybookCase>
  </StorybookPage>
);
StoryHeadlineLogicalProps.storyName = 'Logical props';

export const StoryHeadlineStylingOverrides = () => (
  <StorybookPage columns="1fr 1fr 1fr">
    <StorybookCase title=" utilityHeading050">
      <Headline
        overrides={{
          heading: {
            stylePreset: 'headlineCustom',
          },
          typographyPreset: 'utilityHeading050',
        }}
      >
        {BODY}
      </Headline>
    </StorybookCase>
    <StorybookCase title=" utilityHeading040">
      <Headline
        overrides={{
          heading: {
            stylePreset: 'headlineCustom',
          },
          typographyPreset: 'utilityHeading040',
        }}
      >
        {BODY}
      </Headline>
    </StorybookCase>
    <StorybookCase title=" utilityHeading030">
      <Headline
        overrides={{
          heading: {
            stylePreset: 'headlineCustom',
          },
          typographyPreset: 'utilityHeading030',
        }}
      >
        {BODY}
      </Headline>
    </StorybookCase>
    <StorybookCase title=" utilityHeading020">
      <Headline
        overrides={{
          heading: {
            stylePreset: 'headlineCustom',
          },
          typographyPreset: 'utilityHeading020',
        }}
      >
        {BODY}
      </Headline>
    </StorybookCase>
    <StorybookCase title=" utilityHeading010">
      <Headline
        overrides={{
          heading: {
            stylePreset: 'headlineCustom',
          },
          typographyPreset: 'utilityHeading010',
        }}
      >
        {BODY}
      </Headline>
    </StorybookCase>
  </StorybookPage>
);
StoryHeadlineStylingOverrides.storyName = 'Styling overrides';

export const StoryHeadlineOverrides = () => (
  <StorybookPage columns="1fr">
    <StorybookCase title="H-tag override (to h2)">
      <Headline
        headingAs="h2"
        overrides={{
          typographyPreset: 'editorialHeadline070',
        }}
      >
        {BODY}
      </Headline>
    </StorybookCase>
  </StorybookPage>
);
StoryHeadlineOverrides.storyName = 'Overrides';

export default {
  title: 'Components/Headline',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'Headline',
      url: 'https://newskit.co.uk/components/headline/',
      description:
        'Headline is used to highlight the main point or category of the following text.',
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
          headlineCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
