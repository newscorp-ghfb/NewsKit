import {Cell, Grid} from 'newskit';
import React from 'react';
import {
  SectionIntroduction,
  SectionIntroductionProps,
} from '../../section-introduction';
import {Separator} from '../../separator';
import {StyledSection} from './styled';
import {IntroductionText} from './types';
import {ComponentPageCell} from '../../layout-cells';

export type SEOSectionProps = Omit<SectionIntroductionProps, 'children'> &
  IntroductionText;

export const SEOSection: React.FC<SEOSectionProps> = ({
  introduction,
  ...seo
}) => (
  <>
    <Cell xs={12}>
      <StyledSection id="seo" data-toc-indexed="SEO">
        <Grid xsMargin="space000" xsRowGutter="space000">
          <SectionIntroduction title={seo.title}>
            {introduction}
          </SectionIntroduction>
        </Grid>
      </StyledSection>
    </Cell>
    <ComponentPageCell>
      <Separator />
    </ComponentPageCell>
  </>
);
