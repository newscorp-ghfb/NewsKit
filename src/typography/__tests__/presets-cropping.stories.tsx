import * as React from 'react';
import styled from '@emotion/styled';
import {TextBlock} from '../../text-block';
import {TypographyPreset, useTheme} from '../../theme';
import {StorybookPage, StorybookCase} from '../../test/storybook-comps';
import {getColorCssFromTheme} from '../../utils';

export default {
  title: 'Components/Text cropping',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'Text Cropping',
      url: 'https://newskit.co.uk/theme/foundation/fonts/#textcrop',
      description: '',
    },
  },
};

const StyledTextBlock = styled(TextBlock)`
  ${getColorCssFromTheme('backgroundColor', 'blue010')}
`;

const renderTextBlockWithPreset = (
  presetPrefix: string,
  typographyPresets: Record<string, TypographyPreset>,
) => {
  const presetList = Object.keys(typographyPresets).filter(preset =>
    preset.startsWith(presetPrefix),
  );

  return presetList.map((preset: string) => (
    <StorybookCase title={` ${preset}`}>
      <StyledTextBlock typographyPreset={preset}>
        The quick brown fox
      </StyledTextBlock>
    </StorybookCase>
  ));
};

export const EditorialCropping = () => {
  const {typographyPresets} = useTheme();

  const presetsKeys = [
    'editorialDisplay',
    'editorialHeadline',
    'editorialSubheadline',
    'editorialParagraph',
    'editorialQuote',
    'editorialCaption',
    'editorialLabel',
  ];

  return (
    <StorybookPage columns="1fr">
      {presetsKeys.map(presetKey =>
        renderTextBlockWithPreset(presetKey, typographyPresets),
      )}
    </StorybookPage>
  );
};
EditorialCropping.storyName = 'Editorial cropping';

export const UtilityCropping = () => {
  const {typographyPresets} = useTheme();

  const presetsKeys = [
    'utilityHeading',
    'utilitySubheading',
    'utilityBody',
    'utilityLabel',
    'utilityButton',
    'utilityMeta',
  ];

  return (
    <StorybookPage columns="1fr">
      {presetsKeys.map(presetKey =>
        renderTextBlockWithPreset(presetKey, typographyPresets),
      )}
    </StorybookPage>
  );
};
UtilityCropping.storyName = 'Utility cropping ';
