import React from 'react';
import {getIllustrationComponent} from '../../illustrations/illustration-loader';
import {MediaList} from '../../media-list';
import {getByTitle} from '../../../utils/get-route-object';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';

export type RelatedComponentsSectionProps = {
  related: string[];
} & IntroductionText;

const getRelatedComponents = (related: string[]) =>
  related.map(component => {
    const {title, description, id, illustration} = getByTitle(component) || {};
    return {
      title,
      media: getIllustrationComponent(illustration as string),
      description,
      href: id,
    };
  });
export const RelatedComponentsSection: React.FC<RelatedComponentsSectionProps> = ({
  introduction,
  related,
}) => (
  <CommonSection
    title="Related Components"
    toc="Related"
    id="related"
    introduction={introduction}
    hideSeparator
  >
    <MediaList
      spaceStack="space090"
      layout="4-span"
      cards={getRelatedComponents(related).filter(component => component.title)}
    />
  </CommonSection>
);
