import React from 'react';
import {SectionIntroduction} from '../../section-introduction';
import {MediaList} from '../../media-list';
import {RelatedComponentsSectionProps} from './types';

export const RelatedComponentsSection: React.FC<RelatedComponentsSectionProps> = ({
  introduction,
  ...related
}) => (
  <>
    <SectionIntroduction title="Related Components">
      {introduction}
    </SectionIntroduction>
    <MediaList spaceStack="space110" layout="4-span" {...related} />
  </>
);
