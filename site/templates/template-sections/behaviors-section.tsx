import React from 'react';
import {MediaList, MediaListProps} from '../../components/media-list';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';
import {ComponentPageCell} from '../../components/layout-cells';

export type BehaviorsSectionProps = MediaListProps &
  IntroductionText & {title?: string; toc?: string; children?: React.ReactNode};

export const BehaviorsSection: React.FC<BehaviorsSectionProps> = ({
  introduction,
  children,
  ...behaviors
}) => (
  <CommonSection
    title={behaviors.title || 'Behaviours'}
    toc={behaviors.toc}
    id="behaviors"
    introduction={introduction}
  >
    <ComponentPageCell>
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
    </ComponentPageCell>

    {children}
  </CommonSection>
);
