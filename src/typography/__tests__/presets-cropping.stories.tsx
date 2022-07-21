import * as React from 'react';
import styled from '@emotion/styled';
import {TextBlock} from '../../text-block';
import {Grid, Cell} from '../../grid';
import {createTheme, ThemeProvider, useTheme} from '../../theme';
import {Heading1} from '../heading';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';

export default {
  title: 'NewsKit Light/typography/presets-cropping',
  component: () => 'None',
};

const StyledTextBlock = styled(TextBlock)`
  background-color: tomato;
`;

const StyledHeading1 = styled(Heading1)`
  background-color: tomato;
`;

const myCustomCropConfigTheme = createTheme({
  name: 'newskit-font-crop-config',
  overrides: {
    fonts: {
      fontFamily030: {
        fontFamily: 'Poppins',
        cropConfig: {
          top: 5,
          bottom: 13,
        },
      },
    },
  },
});

const renderTextBlockWithPreset = (presetList: Array<string>) =>
  presetList.map((preset: string) => (
    <>
      <StyledTextBlock typographyPreset={preset}>T{preset}</StyledTextBlock>
      <br />
    </>
  ));

export const EditorialCropping1 = () => {
  const theme = useTheme();

  const editorialDisplayPresetList = Object.keys(
    theme.typographyPresets,
  ).filter(preset => preset.startsWith('editorialDisplay'));

  const editorialLabelPresetList = Object.keys(
    theme.typographyPresets,
  ).filter(preset => preset.startsWith('editorialLabel'));

  const editorialHeadlinePresetList = Object.keys(
    theme.typographyPresets,
  ).filter(preset => preset.startsWith('editorialHeadline'));

  return (
    <>
      <Grid>
        <Cell xs={6}>
          <StorybookHeading>Presets cropping</StorybookHeading>
          <StorybookSubHeading>Editorial</StorybookSubHeading>
          {renderTextBlockWithPreset(editorialDisplayPresetList)}
          <br />
          {renderTextBlockWithPreset(editorialLabelPresetList)}
        </Cell>
        <Cell xs={6}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {renderTextBlockWithPreset(editorialHeadlinePresetList)}
        </Cell>
      </Grid>
    </>
  );
};

EditorialCropping1.storyName = 'editorialCropping1';

export const EditorialCropping2 = () => {
  const theme = useTheme();

  const editorialSubHeadlinePresetList = Object.keys(
    theme.typographyPresets,
  ).filter(preset => preset.startsWith('editorialSubheadline'));

  const editorialParagraphPresetList = Object.keys(
    theme.typographyPresets,
  ).filter(preset => preset.startsWith('editorialParagraph'));

  const editorialQuotePresetList = Object.keys(
    theme.typographyPresets,
  ).filter(preset => preset.startsWith('editorialQuote'));

  const editorialCaptionPresetList = Object.keys(
    theme.typographyPresets,
  ).filter(preset => preset.startsWith('editorialCaption'));

  return (
    <>
      <Grid>
        <Cell xs={6}>
          <StorybookHeading>Presets cropping</StorybookHeading>
          <StorybookSubHeading>Editorial</StorybookSubHeading>
          <br />
          {renderTextBlockWithPreset(editorialSubHeadlinePresetList)}
          <br />
          {renderTextBlockWithPreset(editorialParagraphPresetList)}
          <br />
          {renderTextBlockWithPreset(editorialQuotePresetList)}
        </Cell>
        <Cell xs={6}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {renderTextBlockWithPreset(editorialCaptionPresetList)}
        </Cell>
      </Grid>
    </>
  );
};
EditorialCropping2.storyName = 'editorialCropping2';

export const UtilityCropping = () => {
  const theme = useTheme();

  const utilityHeadingPresetList = Object.keys(
    theme.typographyPresets,
  ).filter(preset => preset.startsWith('utilityHeading'));

  const utilitySubHeadingPresetList = Object.keys(
    theme.typographyPresets,
  ).filter(preset => preset.startsWith('utilitySubheading'));

  const utilityBodyPresetList = Object.keys(
    theme.typographyPresets,
  ).filter(preset => preset.startsWith('utilityBody'));

  const utilityLabelPresetList = Object.keys(
    theme.typographyPresets,
  ).filter(preset => preset.startsWith('utilityLabel'));

  const utilityMetaPresetList = Object.keys(
    theme.typographyPresets,
  ).filter(preset => preset.startsWith('utilityMeta'));

  const utilityButtonPresetList = Object.keys(
    theme.typographyPresets,
  ).filter(preset => preset.startsWith('utilityButton'));

  return (
    <>
      <Grid>
        <Cell xs={6}>
          <StorybookHeading>Presets cropping</StorybookHeading>
          <StorybookSubHeading>Utility</StorybookSubHeading>
          {renderTextBlockWithPreset(utilityHeadingPresetList)}
          <br />
          {renderTextBlockWithPreset(utilitySubHeadingPresetList)}
        </Cell>
        <Cell xs={6}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {renderTextBlockWithPreset(utilityBodyPresetList)}
          <br />
          {renderTextBlockWithPreset(utilityLabelPresetList)}
          <br />
          {renderTextBlockWithPreset(utilityMetaPresetList)}
          <br />
          {renderTextBlockWithPreset(utilityButtonPresetList)}
          {/* Scenarios to be removed once we will support only font metrics */}
          <br />
          <ThemeProvider theme={myCustomCropConfigTheme}>
            <StyledTextBlock typographyPreset="utilityButton030">
              TutilityButton030 as span with cropConfig (TextBlock)
            </StyledTextBlock>
            <br />
            <StyledHeading1 overrides={{typographyPreset: 'utilityButton030'}}>
              TutilityButton030 as span with cropConfig (Heading1)
            </StyledHeading1>
          </ThemeProvider>
          {/*  */}
        </Cell>
      </Grid>
    </>
  );
};

UtilityCropping.storyName = 'utility';
