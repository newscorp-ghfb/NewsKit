import * as React from 'react';
import {Caption} from '../caption';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {styled, getColorCssFromTheme} from '../../utils/style';

const MarginOverridesWrapper = styled.div`
  border: 1px dashed;
  ${getColorCssFromTheme('borderColor', 'red060')}
`;

const CAPTION_TEXT = 'Hathersage Moor in the Peak District';
const CREDIT_TEXT = 'Credit by Matthew Taylor/Alamy';

export const StoryCaptionDefault = () => (
  <StorybookPage>
    <StorybookCase>
      <Caption creditText={CREDIT_TEXT}>{CAPTION_TEXT}</Caption>
    </StorybookCase>
  </StorybookPage>
);
StoryCaptionDefault.storyName = 'Default';

export const StoryCaptionVariations = () => (
  <StorybookPage>
    <StorybookCase title="Caption and credit text">
      <Caption creditText={CREDIT_TEXT}>{CAPTION_TEXT}</Caption>
    </StorybookCase>
    <StorybookCase title="Only caption text">
      <Caption>{CAPTION_TEXT}</Caption>
    </StorybookCase>
  </StorybookPage>
);
StoryCaptionVariations.storyName = 'Variations';

export const StoryCaptionLogicalProps = () => (
  <StorybookPage columns="1fr">
    <StorybookCase>
      <MarginOverridesWrapper>
        <Caption
          overrides={{paddingBlock: 'space070', paddingInline: 'space060'}}
          creditText={CREDIT_TEXT}
        >
          {CAPTION_TEXT}
        </Caption>
      </MarginOverridesWrapper>
    </StorybookCase>
  </StorybookPage>
);
StoryCaptionLogicalProps.storyName = 'Logical props';

export const StoryCaptionOverrides = () => (
  <StorybookPage columns="1fr">
    <StorybookCase>
      <Caption
        overrides={{credit: {stylePreset: 'inkSubtle'}}}
        creditText={CREDIT_TEXT}
      >
        {CAPTION_TEXT}
      </Caption>
    </StorybookCase>
  </StorybookPage>
);
StoryCaptionOverrides.storyName = 'Overrides';

export default {
  title: 'Components/Caption',
  component: Caption,
  parameters: {
    nkDocs: {
      title: 'Caption',
      url: 'https://newskit.co.uk/components/caption',
      description:
        'A caption is a sentence often added to an image or video to describe or explain what the image or video is showing. Sometimes a credit to the owner of the source is added. The caption has two main elements, the caption text and an optional credit text.',
    },
  },
};
