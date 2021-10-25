import React from 'react';
import {MediaList, MediaListProps} from '../../components/media-list';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';

export type BehaviorsSectionProps = MediaListProps &
  IntroductionText & {title?: string};

export const BehaviorsSection: React.FC<BehaviorsSectionProps> = ({
  introduction,
  children,
  ...behaviors
}) => (
  <CommonSection
    title={behaviors.title || 'Behaviours'}
    id="behaviors"
    introduction={introduction}
  >
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
    {children}
  </CommonSection>
);
