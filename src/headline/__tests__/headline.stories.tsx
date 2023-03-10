import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Headline} from '..';
import {ThemeProvider, CreateThemeArgs, createTheme} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {H6, H5, H4, H3, H2, H1} from '../..';
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

const myCustomTheme = createTheme({
  name: 'my-custom-heading-theme',
  overrides: {
    stylePresets: {
      headingCustom: {
        base: {
          color: '{{colors.amber070}}',
        },
      },
    },
  },
});

const MarginOverridesWrapper = styled.div`
  border: 1px dashed;
  marginblock: 'space030';
  margininline: 'space030';
  paddingblock: 'space030';
  paddinginline: 'space030';
  ${getColorCssFromTheme('borderColor', 'red060')}
`;

export const StoryHeadingDefault = () => (
  <StorybookPage columns="1fr">
    <StorybookCase title="Render as h1 (default)">
      <H1>Heading</H1>
    </StorybookCase>
  </StorybookPage>
);
StoryHeadingDefault.storyName = 'Default';

export const StoryHeadingVariations = () => (
  <StorybookPage columns="1fr 1fr">
    <StorybookCase title="Render heading as h1 (default)">
      <H1>{HeadlineText}</H1>
    </StorybookCase>
    <StorybookCase title="Render heading as h2">
      <H2>{HeadlineText}</H2>
    </StorybookCase>
    <StorybookCase title="Render heading as h3">
      <H3>{HeadlineText}</H3>
    </StorybookCase>
    <StorybookCase title="Render heading as h4">
      <H4>{HeadlineText}</H4>
    </StorybookCase>
    <StorybookCase title="Render heading as h5">
      <H5>{HeadlineText}</H5>
    </StorybookCase>
    <StorybookCase title="Render heading as span (default)">
      <H6>{HeadlineText}</H6>
    </StorybookCase>
    <StorybookCase title="Render kicker as span (default)">
      <Headline
        kickerText="Kicker"
        headingAs="span"
        kickerAs="span"
        overrides={{typographyPreset: 'editorialHeadline010'}}
      >
        {HeadlineText}
      </Headline>
    </StorybookCase>
    <StorybookCase title="Render kicker as h1">
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
    <StorybookCase title="Render kicker as h2">
      <Headline
        kickerText="Kicker"
        headingAs="h2"
        kickerAs="h2"
        overrides={{
          typographyPreset: 'editorialHeadline050',
        }}
      >
        {HeadlineText}
      </Headline>
    </StorybookCase>
    <StorybookCase title="Render kicker as h3">
      <Headline
        kickerText="Kicker"
        headingAs="h3"
        kickerAs="h3"
        overrides={{
          typographyPreset: 'editorialHeadline040',
        }}
      >
        {HeadlineText}
      </Headline>
    </StorybookCase>
    <StorybookCase title="Render kicker as h4">
      <Headline
        kickerText="Kicker"
        headingAs="h4"
        kickerAs="h4"
        overrides={{
          typographyPreset: 'editorialHeadline030',
        }}
      >
        {HeadlineText}
      </Headline>
    </StorybookCase>
    <StorybookCase title="Render kicker as h5">
      <Headline
        kickerText="Kicker"
        headingAs="h5"
        kickerAs="h5"
        overrides={{
          typographyPreset: 'editorialHeadline020',
        }}
      >
        {HeadlineText}
      </Headline>
    </StorybookCase>
  </StorybookPage>
);
StoryHeadingVariations.storyName = 'Variations';

export const StoryHeadingLogicalProps = () => (
  <StorybookPage columns="1fr 1fr">
    <StorybookCase title="editorialHeadline070">
      <MarginOverridesWrapper>
        <H1
          overrides={{
            typographyPreset: 'editorialHeadline070',
            marginBlock: 'space030',
            marginInline: 'space030',
            paddingBlock: 'space030',
            paddingInline: 'space030',
          }}
        >
          {BODY}
        </H1>
      </MarginOverridesWrapper>
    </StorybookCase>
    <StorybookCase title="editorialHeadline060">
      <MarginOverridesWrapper>
        <H1
          overrides={{
            typographyPreset: 'editorialHeadline060',
            marginBlock: 'space030',
            marginInline: 'space030',
            paddingBlock: 'space030',
            paddingInline: 'space030',
          }}
        >
          {BODY}
        </H1>
      </MarginOverridesWrapper>
    </StorybookCase>
    <StorybookCase title="editorialHeadline050">
      <MarginOverridesWrapper>
        <H2
          overrides={{
            typographyPreset: 'editorialHeadline050',
            marginBlock: 'space030',
            marginInline: 'space030',
            paddingBlock: 'space030',
            paddingInline: 'space030',
          }}
        >
          {BODY}
        </H2>
      </MarginOverridesWrapper>
    </StorybookCase>
    <StorybookCase title="editorialHeadline040">
      <MarginOverridesWrapper>
        <H3
          overrides={{
            typographyPreset: 'editorialHeadline040',
            marginBlock: 'space030',
            marginInline: 'space030',
            paddingBlock: 'space030',
            paddingInline: 'space030',
          }}
        >
          {BODY}
        </H3>
      </MarginOverridesWrapper>
    </StorybookCase>
    <StorybookCase title="editorialHeadline030">
      <MarginOverridesWrapper>
        <H4
          overrides={{
            typographyPreset: 'editorialHeadline030',
            marginBlock: 'space030',
            marginInline: 'space030',
            paddingBlock: 'space030',
            paddingInline: 'space030',
          }}
        >
          {BODY}
        </H4>
      </MarginOverridesWrapper>
    </StorybookCase>
    <StorybookCase title="editorialHeadline020">
      <MarginOverridesWrapper>
        <H5
          overrides={{
            typographyPreset: 'editorialHeadline020',
            marginBlock: 'space030',
            marginInline: 'space030',
            paddingBlock: 'space030',
            paddingInline: 'space030',
          }}
        >
          {BODY}
        </H5>
      </MarginOverridesWrapper>
    </StorybookCase>
    <StorybookCase title="editorialHeadline010">
      <MarginOverridesWrapper>
        <H6
          overrides={{
            typographyPreset: 'editorialHeadline010',
            marginBlock: 'space030',
            marginInline: 'space030',
            paddingBlock: 'space030',
            paddingInline: 'space030',
          }}
        >
          {BODY}
        </H6>
      </MarginOverridesWrapper>
    </StorybookCase>
  </StorybookPage>
);
StoryHeadingLogicalProps.storyName = 'Logical props';

export const StoryHeadingStylingOverrides = () => (
  <StorybookPage columns="1fr 1fr 1fr">
    <ThemeProvider theme={myCustomTheme}>
      <StorybookCase title="utilityHeading50">
        <H2
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'utilityHeading050',
          }}
        >
          {BODY}
        </H2>
      </StorybookCase>
      <StorybookCase title="utilityHeading40">
        <H3
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'utilityHeading040',
          }}
        >
          {BODY}
        </H3>
      </StorybookCase>
      <StorybookCase title="utilityHeading30">
        <H4
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'utilityHeading030',
          }}
        >
          {BODY}
        </H4>
      </StorybookCase>
      <StorybookCase title="utilityHeading20">
        <H5
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'utilityHeading020',
          }}
        >
          {BODY}
        </H5>
      </StorybookCase>
      <StorybookCase title="utilityHeading10">
        <H6
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'utilityHeading010',
          }}
        >
          {BODY}
        </H6>
      </StorybookCase>
    </ThemeProvider>
  </StorybookPage>
);
StoryHeadingStylingOverrides.storyName = 'Styling overrides';

export const StoryHeadingOverrides = () => (
  <StorybookPage columns="1fr">
    <StorybookCase title="H-tag override (to h2)">
      <H1
        overrides={{
          typographyPreset: 'editorialHeadline070',
        }}
      >
        {BODY}
      </H1>
    </StorybookCase>
  </StorybookPage>
);
StoryHeadingOverrides.storyName = 'Overrides';

export default {
  title: 'Components/Headline',
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
