import React from 'react';
import {Grid, Cell} from 'newskit';
import {Meta, MetaProps} from '../../meta';
import {PageIntroduction, PageIntroductionProps} from '../../page-introduction';
import {ComponentPageCell} from '../../layout-cells';
import {StyledSection} from './styled';

export interface IntroductionSectionProps {
  pageIntroduction: PageIntroductionProps;
  meta: MetaProps;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  pageIntroduction,
  meta,
}) => (
  <Cell xs={12}>
    <StyledSection id="introduction" data-toc-indexed="Introduction">
      <Grid lgMargin="space000" xsRowGutter="space000">
        <PageIntroduction {...pageIntroduction} />
        <ComponentPageCell>
          <Meta {...meta} />
        </ComponentPageCell>
      </Grid>
    </StyledSection>
  </Cell>
);
