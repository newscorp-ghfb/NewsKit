import React from 'react';
import {Grid, Cell, Block} from 'newskit';
import {Meta, MetaProps} from '../../components/meta';
import {
  PageIntroduction,
  PageIntroductionProps,
} from '../../components/page-introduction';
import {ComponentPageCell} from '../../components/layout-cells';
import {StyledSection} from './styled';

export interface IntroductionSectionProps {
  pageIntroduction: PageIntroductionProps;
  meta?: MetaProps;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  pageIntroduction,
  meta,
}) => (
  <Cell xs={12}>
    <Block spaceStack={{xs: 'space000', md: 'space030', lg: 'space070'}} />
    <StyledSection id="introduction" data-toc-indexed="Introduction">
      <Grid xsMargin="space000" xsRowGutter="space000">
        <PageIntroduction {...pageIntroduction} />
        {meta && (
          <ComponentPageCell>
            <Meta {...meta} />
          </ComponentPageCell>
        )}
      </Grid>
    </StyledSection>
  </Cell>
);
