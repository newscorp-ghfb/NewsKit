import React from 'react';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {MediaList} from '../../components/media-list';
import {getByTitle} from '../../utils/get-route-object';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';
import {ComponentPageCell} from '../../components/layout-cells';

export type RelatedComponentsSectionProps = {
  related: string[];
} & IntroductionText & {title?: string; toc?: string; id?: string};

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
...next
}) => (
  <CommonSection
    title={next.title || 'Related Components'}
    toc={next.toc || 'Related'}
    id={next.id || 'related'}
    introduction={introduction}
    hideSeparator
  >
    <ComponentPageCell>
      <MediaList
        spaceStack="space090"
        layout="4-span"
        cards={getRelatedComponents(related).filter(
          component => component.title,
        )}
      />
    </ComponentPageCell>
  </CommonSection>
);
