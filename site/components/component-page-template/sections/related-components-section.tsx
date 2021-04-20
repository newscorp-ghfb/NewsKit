import React from 'react';
import {SectionIntroduction} from '../../section-introduction';
import {MediaList} from '../../media-list';
import {getByTitle} from '../../../utils/get-route-object';
import {RelatedComponentsSectionProps} from './types';

const getRelatedComponents = (related: string[]) =>
  related.map(component => {
    const {title, media, description, id} = getByTitle(component) || {};
    return {
      title,
      media: {src: media, alt: ''},
      description,
      href: id,
    };
  });

export const RelatedComponentsSection: React.FC<RelatedComponentsSectionProps> = ({
  introduction,
  related,
}) => (
  <>
    <SectionIntroduction title="Related Components">
      {introduction}
    </SectionIntroduction>
    <MediaList
      spaceStack="space110"
      layout="4-span"
      cards={getRelatedComponents(related)}
    />
  </>
);
