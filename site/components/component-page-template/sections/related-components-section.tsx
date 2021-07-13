import React from 'react';
import {Cell, Grid} from 'newskit';
import {getIllustrationComponent} from '../../illustrations/illustration-loader';
import {SectionIntroduction} from '../../section-introduction';
import {MediaList} from '../../media-list';
import {getByTitle} from '../../../utils/get-route-object';
import {IntroductionText} from './types';
import {StyledSection} from './styled';

export type RelatedComponentsSectionProps = {
  related: string[];
} & IntroductionText;

const getRelatedComponents = (related: string[]) =>
  related.map(component => {
    const {title, description, id} = getByTitle(component) || {};
    return {
      title,
      media: getIllustrationComponent('components/scroll-illustration'),
      description,
      href: id,
    };
  });

export const RelatedComponentsSection: React.FC<RelatedComponentsSectionProps> = ({
  introduction,
  related,
}) => (
  <Cell xs={12}>
    <StyledSection id="related" data-toc-indexed="Related">
      <Grid lgMargin="space000" xsRowGutter="space000">
        <SectionIntroduction title="Related Components">
          {introduction}
        </SectionIntroduction>
        <MediaList
          spaceStack="space090"
          layout="4-span"
          cards={getRelatedComponents(related)}
        />
      </Grid>
    </StyledSection>
  </Cell>
);
