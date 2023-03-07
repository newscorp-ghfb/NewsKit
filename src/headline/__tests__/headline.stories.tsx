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

const BODY = 'The quick brown box';

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
  ${getColorCssFromTheme('borderColor', 'red060')}
`;

export const StoryHeadingDefault = () => (
  <StorybookPage columns="1fr">
    <StorybookCase title="Render as h1 (Default)">
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
    <StorybookCase title="Render Kicker as span (default)">
      <Headline
        kickerText="Kicker"
        headingAs="span"
        kickerAs="span"
        overrides={{typographyPreset: 'editorialHeadline010'}}
      >
        {HeadlineText}
      </Headline>
    </StorybookCase>
    <StorybookCase title="Render Kicker as h1">
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
    <StorybookCase title="Render Kicker as h2">
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
    <StorybookCase title="Render Kicker as h3">
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
    <StorybookCase title="Render Kicker as h4">
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
    <StorybookCase title="Render Kicker as h5">
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

export const StoryHeadingLogicalProps = () => {
  const logicalPropsOverrides = {
    marginBlock: 'space030',
    marginInline: 'space030',
    paddingBlock: 'space030',
    paddingInline: 'space030',
  };

  return (
    <StorybookPage columns="1fr 1fr">
      <StorybookCase title="EditorialHeadline060">
        <MarginOverridesWrapper>
          <H1 overrides={logicalPropsOverrides}>{BODY}</H1>
        </MarginOverridesWrapper>
      </StorybookCase>
      <StorybookCase title="EditorialHeadline050">
        <MarginOverridesWrapper>
          <H2 overrides={logicalPropsOverrides}>{BODY}</H2>
        </MarginOverridesWrapper>
      </StorybookCase>
      <StorybookCase title="EditorialHeadline040">
        <MarginOverridesWrapper>
          <H3 overrides={logicalPropsOverrides}>{BODY}</H3>
        </MarginOverridesWrapper>
      </StorybookCase>
      <StorybookCase title="EditorialHeadline030">
        <MarginOverridesWrapper>
          <H4 overrides={logicalPropsOverrides}>{BODY}</H4>
        </MarginOverridesWrapper>
      </StorybookCase>
      <StorybookCase title="EditorialHeadline020">
        <MarginOverridesWrapper>
          <H5 overrides={logicalPropsOverrides}>{BODY}</H5>
        </MarginOverridesWrapper>
      </StorybookCase>
      <StorybookCase title="EditorialHeadline010">
        <MarginOverridesWrapper>
          <H6 overrides={logicalPropsOverrides}>{BODY}</H6>
        </MarginOverridesWrapper>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryHeadingLogicalProps.storyName = 'Logical Props';

export const StoryHeadingStylingOverrides = () => (
  <StorybookPage columns="1fr 1fr 1fr">
    <ThemeProvider theme={myCustomTheme}>
      <StorybookCase title="UtilityHeadline60">
        <H6
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'utilityHeading050',
          }}
        >
          {BODY}
        </H6>
      </StorybookCase>
      <StorybookCase title="UtilityHeadline50">
        <H5
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'utilityHeading050',
          }}
        >
          {BODY}
        </H5>
      </StorybookCase>
      <StorybookCase title="UtilityHeadline40">
        <H4
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'utilityHeading040',
          }}
        >
          {BODY}
        </H4>
      </StorybookCase>
      <StorybookCase title="UtilityHeadline30">
        <H3
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'utilityHeading030',
          }}
        >
          {BODY}
        </H3>
      </StorybookCase>
      <StorybookCase title="UtilityHeadline20">
        <H2
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'utilityHeading020',
          }}
        >
          {BODY}
        </H2>
      </StorybookCase>
      <StorybookCase title="UtilityHeadline10">
        <H1
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'utilityHeading010',
          }}
        >
          {BODY}
        </H1>
      </StorybookCase>
    </ThemeProvider>
  </StorybookPage>
);
StoryHeadingStylingOverrides.storyName = 'Styling Overrides';

export const StoryHeadingOverrides = () => (
  <StorybookPage columns="1fr">
    <StorybookCase title="H-tag override (to h2)">
      <H1
        overrides={{
          stylePreset: 'headingCustom',
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
