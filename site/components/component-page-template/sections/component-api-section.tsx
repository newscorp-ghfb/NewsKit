import {Cell, Grid} from 'newskit';
import React from 'react';
import {SectionIntroduction} from '../../section-introduction';
import {ComponentAPI, ComponentAPIProps} from '../../component-api';
import {Separator} from '../../separator';
import {StyledSection} from './styled';
import {IntroductionText} from './types';
import {ComponentPageCell} from '../../layout-cells';

export type ComponentAPISectionProps = ComponentAPIProps & IntroductionText;

export const ComponentAPISection: React.FC<ComponentAPISectionProps> = ({
  introduction,
  ...componentAPI
}) => (
  <>
    <Cell xs={12}>
      <StyledSection id="component-api" data-toc-indexed="API">
        <Grid xsMargin="space000" xsRowGutter="space000">
          <SectionIntroduction title="API">{introduction}</SectionIntroduction>
          <ComponentAPI {...componentAPI} />
        </Grid>
      </StyledSection>
    </Cell>
    <ComponentPageCell>
      <Separator />
    </ComponentPageCell>
  </>
);
