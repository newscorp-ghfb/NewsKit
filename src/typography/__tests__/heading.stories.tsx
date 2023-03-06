import * as React from 'react';
import {createTheme, ThemeProvider} from '../../theme';
import {H6, H5, H4, H3, H2, H1} from '..';
import {getColorCssFromTheme, styled} from '../../utils/style';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {Headline} from '../../headline';

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

export default {
  title: 'Components/typography/heading',
  component: () => 'None',
};

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
      <Headline kickerText="Kicker" headingAs="span" kickerAs="span">
        {HeadlineText}
      </Headline>
    </StorybookCase>
    <StorybookCase title="Render Kicker as h1">
      <Headline kickerText="Kicker" headingAs="h1" kickerAs="h1">
        {HeadlineText}
      </Headline>
    </StorybookCase>
    <StorybookCase title="Render Kicker as h2">
      <Headline kickerText="Kicker" headingAs="h2" kickerAs="h2">
        {HeadlineText}
      </Headline>
    </StorybookCase>
    <StorybookCase title="Render Kicker as h3">
      <Headline kickerText="Kicker" headingAs="h3" kickerAs="h3">
        {HeadlineText}
      </Headline>
    </StorybookCase>
    <StorybookCase title="Render Kicker as h4">
      <Headline kickerText="Kicker" headingAs="h4" kickerAs="h4">
        {HeadlineText}
      </Headline>
    </StorybookCase>
    <StorybookCase title="Render Kicker as h5">
      <Headline kickerText="Kicker" headingAs="h5" kickerAs="h5">
        {HeadlineText}
      </Headline>
    </StorybookCase>
  </StorybookPage>
);
StoryHeadingVariations.storyName = 'Variations';

export const StoryHeadingLogicalPropstest = () => {
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
StoryHeadingLogicalPropstest.storyName = 'Logical Props';

export const StoryHeadingStylingOverrides = () => (
  <StorybookPage columns="1fr 1fr 1fr">
    <ThemeProvider theme={myCustomTheme}>
      <StorybookCase title="UtilityHeadline60">
        <H6
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'editorialHeadline060',
          }}
        >
          {BODY}
        </H6>
      </StorybookCase>
      <StorybookCase title="UtilityHeadline50">
        <H5
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'editorialHeadline050',
          }}
        >
          {BODY}
        </H5>
      </StorybookCase>
      <StorybookCase title="UtilityHeadline40">
        <H4
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'editorialHeadline040',
          }}
        >
          {BODY}
        </H4>
      </StorybookCase>
      <StorybookCase title="UtilityHeadline30">
        <H3
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'editorialHeadline030',
          }}
        >
          {BODY}
        </H3>
      </StorybookCase>
      <StorybookCase title="UtilityHeadline20">
        <H2
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'editorialHeadline020',
          }}
        >
          {BODY}
        </H2>
      </StorybookCase>
      <StorybookCase title="UtilityHeadline10">
        <H1
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'editorialHeadline010',
          }}
        >
          {BODY}
        </H1>
      </StorybookCase>
    </ThemeProvider>
  </StorybookPage>
  // <>
  //   <StorybookHeading>Heading with overrides</StorybookHeading>
  //   <ThemeProvider theme={myCustomTheme}>
  //     <H1
  //       overrides={{
  //         stylePreset: 'headingCustom',
  //         typographyPreset: 'editorialParagraph010',
  //       }}
  //     >
  //       H1 with override
  //     </H1>
  //     <br />
  //     <H2
  //       overrides={{
  //         stylePreset: 'headingCustom',
  //         typographyPreset: 'editorialParagraph020',
  //       }}
  //     >
  //       H2 with override
  //     </H2>
  //     <br />
  //     <H3
  //       overrides={{
  //         stylePreset: 'headingCustom',
  //         typographyPreset: 'editorialParagraph030',
  //       }}
  //     >
  //       H3 with override
  //     </H3>
  //     <br />
  //     <H4
  //       overrides={{
  //         stylePreset: 'headingCustom',
  //         typographyPreset: 'editorialParagraph010',
  //       }}
  //     >
  //       H4 with override
  //     </H4>
  //     <br />
  //     <H5
  //       overrides={{
  //         stylePreset: 'headingCustom',
  //         typographyPreset: 'editorialParagraph020',
  //       }}
  //     >
  //       H5 with override
  //     </H5>
  //     <br />
  //     <H6
  //       overrides={{
  //         stylePreset: 'headingCustom',
  //         typographyPreset: 'editorialParagraph030',
  //       }}
  //     >
  //       H6 with override
  //     </H6>
  //   </ThemeProvider>
  // </>
);
StoryHeadingStylingOverrides.storyName = 'Styling Overrides';

export const StoryHeadingOverrides = () => (
  <StorybookPage columns="1fr">
    <StorybookCase title="H-tag override (to h2)">
      <H1
        overrides={{
          stylePreset: 'headingCustom',
          typographyPreset: 'editorialHeadline080',
        }}
      >
        {BODY}
      </H1>
    </StorybookCase>
  </StorybookPage>
);
StoryHeadingOverrides.storyName = 'Overrides';
