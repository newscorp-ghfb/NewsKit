import React from 'react';
import {MediaList, MediaListProps} from '../../components/media-list';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';
import {ComponentPageCell} from '../../components/layout-cells';

export type TutorialSectionProps = MediaListProps & IntroductionText;

export const TutorialSection: React.FC<TutorialSectionProps> = ({
  introduction,
  ...tutorial
}) => (
  <CommonSection title="Tutorial" id="tutorial" introduction={introduction}>
    <ComponentPageCell>
      <MediaList
        {...tutorial}
        cardsLayout={{
          xs: 'vertical',
          sm: 'vertical',
          md: 'horizontal',
          lg: 'horizontal',
          xl: 'horizontal',
        }}
        layout="1-span"
      />
    </ComponentPageCell>
  </CommonSection>
);
