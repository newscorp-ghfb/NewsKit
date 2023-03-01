import * as React from 'react';
import styled from '@emotion/styled';
import {TextBlock} from '../../text-block';
import {Cell, Grid} from '../../grid';
import {useTheme} from '../../theme';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';

export default {
  title: 'Components/typography/presets-cropping',
  component: () => 'None',
};

const StyledTextBlock = styled(TextBlock)`
  background-color: tomato;
`;

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
        </Cell>
      </Grid>
    </>
  );
};

UtilityCropping.storyName = 'utility';
