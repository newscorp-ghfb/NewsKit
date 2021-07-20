import React from 'react';
import {MediaList, MediaListProps} from '../../media-list';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';

export type BehaviorsSectionProps = MediaListProps & IntroductionText;

export const BehaviorsSection: React.FC<BehaviorsSectionProps> = ({
  introduction,
  ...behaviors
}) => (
  <CommonSection title="Behaviours" id="behaviors" introduction={introduction}>
    <MediaList
      cardsLayout={{
        xs: 'vertical',
        sm: 'vertical',
        md: 'horizontal',
        lg: 'horizontal',
        xl: 'horizontal',
      }}
      layout="1-span"
      {...behaviors}
    />
  </CommonSection>
);
