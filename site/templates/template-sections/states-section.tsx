import React from 'react';
import {MediaList, MediaListProps} from '../../components/media-list';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';
import {ComponentPageCell} from '../../components/layout-cells';

export type StatesSectionProps = MediaListProps & IntroductionText;

export const StatesSection: React.FC<StatesSectionProps> = ({
  introduction,
  ...states
}) => (
  <CommonSection title="States" id="states" introduction={introduction}>
    <ComponentPageCell>
      <MediaList {...states} layout="2-span" />
    </ComponentPageCell>
  </CommonSection>
);
