import * as React from 'react';
import {createTheme, ThemeProvider} from '../../theme';
import {StorybookHeading} from '../../test/storybook-comps';
import {H6, H5, H4, H3, H2, H1} from '..';
import {TextBlock} from '../../text-block';
import {Grid, Cell} from '../../grid';

const myCustomTheme = createTheme({
  name: 'my-custom-heading-theme',
  overrides: {
    stylePresets: {
      headingCustom: {
        base: {
          color: '{{colors.blue060}}',
        },
      },
    },
  },
});

const title = 'We tell the stories that matter.';

export default {
  title: 'NewsKit Light/typography/heading',
  component: () => 'None',
};

export const StoryHeadingDefault = () => (
  <>
    <StorybookHeading>Heading - default</StorybookHeading>
    <br />
    <H1>Default H1 - {title}</H1>
    <br />
    <H2>Default H2 - {title}</H2>
    <br />
    <H3>Default H3 - {title}</H3>
    <br />
    <H4>Default H4 - {title}</H4>
    <br />
    <H5>Default H5 - {title}</H5>
    <br />
    <H6>Default H6 - {title}</H6>
  </>
);
StoryHeadingDefault.storyName = 'heading-default';

export const StoryCropVsNoCrop = () => (
  <>
    <Grid>
      <Cell xs={6}>
        <h1>cropped</h1>
        <TextBlock typographyPreset="editorialHeadline010">
          editorialHeadline010
        </TextBlock>
        <TextBlock typographyPreset="editorialHeadline020">
          editorialHeadline020
        </TextBlock>
        <TextBlock typographyPreset="editorialHeadline030">
          editorialHeadline030
        </TextBlock>
        <TextBlock typographyPreset="editorialHeadline040">
          editorialHeadline040
        </TextBlock>
        <TextBlock typographyPreset="editorialHeadline050">
          editorialHeadline050
        </TextBlock>
        <TextBlock typographyPreset="editorialHeadline060">
          editorialHeadline060
        </TextBlock>
        <TextBlock typographyPreset="editorialHeadline070">
          editorialHeadline070
        </TextBlock>
        <TextBlock typographyPreset="editorialHeadline080">
          editorialHeadline080
        </TextBlock>
      </Cell>
      <Cell xs={6}>
        <h1>not cropped</h1>
        <TextBlock typographyPreset="editorialHeadline010" noCrop>
          editorialHeadline010
        </TextBlock>
        <TextBlock typographyPreset="editorialHeadline020" noCrop>
          editorialHeadline020
        </TextBlock>
        <TextBlock typographyPreset="editorialHeadline030" noCrop>
          editorialHeadline030
        </TextBlock>
        <TextBlock typographyPreset="editorialHeadline040" noCrop>
          editorialHeadline040
        </TextBlock>
        <TextBlock typographyPreset="editorialHeadline050" noCrop>
          editorialHeadline050
        </TextBlock>
        <TextBlock typographyPreset="editorialHeadline060" noCrop>
          editorialHeadline060
        </TextBlock>
        <TextBlock typographyPreset="editorialHeadline070" noCrop>
          editorialHeadline070
        </TextBlock>
        <TextBlock typographyPreset="editorialHeadline080" noCrop>
          editorialHeadline080
        </TextBlock>
      </Cell>
    </Grid>
  </>
);
StoryCropVsNoCrop.storyName = 'crop vs no crop';

export const StoryHeadingOverrides = () => (
  <>
    <StorybookHeading>Heading with overrides</StorybookHeading>
    <ThemeProvider theme={myCustomTheme}>
      <H1
        overrides={{
          stylePreset: 'headingCustom',
          typographyPreset: 'editorialParagraph010',
        }}
      >
        H1 with override
      </H1>
      <br />
      <H2
        overrides={{
          stylePreset: 'headingCustom',
          typographyPreset: 'editorialParagraph020',
        }}
      >
        H2 with override
      </H2>
      <br />
      <H3
        overrides={{
          stylePreset: 'headingCustom',
          typographyPreset: 'editorialParagraph030',
        }}
      >
        H3 with override
      </H3>
      <br />
      <H4
        overrides={{
          stylePreset: 'headingCustom',
          typographyPreset: 'editorialParagraph010',
        }}
      >
        H4 with override
      </H4>
      <br />
      <H5
        overrides={{
          stylePreset: 'headingCustom',
          typographyPreset: 'editorialParagraph020',
        }}
      >
        H5 with override
      </H5>
      <br />
      <H6
        overrides={{
          stylePreset: 'headingCustom',
          typographyPreset: 'editorialParagraph030',
        }}
      >
        H6 with override
      </H6>
    </ThemeProvider>
  </>
);
StoryHeadingOverrides.storyName = 'heading-overrides';
