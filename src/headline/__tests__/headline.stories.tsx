import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {GridLayout} from '../../grid-layout';
import {Headline} from '..';
import {TextBlock} from '../../text-block';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
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
      headingCustom: {base: {color: '{{colors.inkBrand010}}'}},
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
      <span>{HeadlineText}</span>
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
    <StorybookCase>
      <GridLayout rowGap="space045">
        <TextBlock stylePreset="inkBase" typographyPreset="utilityBody020">
          editorialHeadline070
        </TextBlock>
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
      </GridLayout>
    </StorybookCase>
    <StorybookCase>
      <GridLayout rowGap="space045">
        <TextBlock stylePreset="inkBase" typographyPreset="utilityBody020">
          editorialHeadline060
        </TextBlock>
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
      </GridLayout>
    </StorybookCase>
    <StorybookCase>
      <GridLayout rowGap="space045">
        <TextBlock stylePreset="inkBase" typographyPreset="utilityBody020">
          editorialHeadline050
        </TextBlock>
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
      </GridLayout>
    </StorybookCase>
    <StorybookCase>
      <GridLayout rowGap="space045">
        <TextBlock stylePreset="inkBase" typographyPreset="utilityBody020">
          editorialHeadline040
        </TextBlock>
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
      </GridLayout>
    </StorybookCase>
    <StorybookCase>
      <GridLayout rowGap="space045">
        <TextBlock stylePreset="inkBase" typographyPreset="utilityBody020">
          editorialHeadline030
        </TextBlock>
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
      </GridLayout>
    </StorybookCase>
    <StorybookCase>
      <GridLayout rowGap="space045">
        <TextBlock stylePreset="inkBase" typographyPreset="utilityBody020">
          editorialHeadline020
        </TextBlock>
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
      </GridLayout>
    </StorybookCase>
    <StorybookCase>
      <GridLayout rowGap="space045">
        <TextBlock stylePreset="inkBase" typographyPreset="utilityBody020">
          editorialHeadline010
        </TextBlock>
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
      </GridLayout>
    </StorybookCase>
  </StorybookPage>
);
StoryHeadingLogicalProps.storyName = 'Logical props';

export const StoryHeadingStylingOverrides = () => (
  <StorybookPage columns="1fr 1fr 1fr">
    <StorybookCase>
      <GridLayout rowGap="space045">
        <TextBlock stylePreset="inkBase" typographyPreset="utilityBody020">
          utilityHeading050
        </TextBlock>
        <H2
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'utilityHeading050',
          }}
        >
          {BODY}
        </H2>
      </GridLayout>
    </StorybookCase>
    <StorybookCase>
      <GridLayout rowGap="space045">
        <TextBlock stylePreset="inkBase" typographyPreset="utilityBody020">
          utilityHeading040
        </TextBlock>
        <H3
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'utilityHeading040',
          }}
        >
          {BODY}
        </H3>
      </GridLayout>
    </StorybookCase>
    <StorybookCase>
      <GridLayout rowGap="space045">
        <TextBlock stylePreset="inkBase" typographyPreset="utilityBody020">
          utilityHeading030
        </TextBlock>
        <H4
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'utilityHeading030',
          }}
        >
          {BODY}
        </H4>
      </GridLayout>
    </StorybookCase>
    <StorybookCase>
      <GridLayout rowGap="space045">
        <TextBlock stylePreset="inkBase" typographyPreset="utilityBody020">
          utilityHeading020
        </TextBlock>
        <H5
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'utilityHeading020',
          }}
        >
          {BODY}
        </H5>
      </GridLayout>
    </StorybookCase>
    <StorybookCase>
      <GridLayout rowGap="space045">
        <TextBlock stylePreset="inkBase" typographyPreset="utilityBody020">
          utilityHeading010
        </TextBlock>
        <H6
          overrides={{
            stylePreset: 'headingCustom',
            typographyPreset: 'utilityHeading010',
          }}
        >
          {BODY}
        </H6>
      </GridLayout>
    </StorybookCase>
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
