import {Cell, Grid} from 'newskit';
import React from 'react';
import {SectionIntroduction} from '../../section-introduction';
import {ComponentAPI} from '../../component-api';
import {Separator} from '../../separator';
import {StyledSection} from './styled';
import {ComponentAPISectionProps} from './types';
import {ComponentPageCell} from '../../layout-cells';

export const ComponentAPISection: React.FC<ComponentAPISectionProps> = ({
  introduction,
  ...componentAPI
}) => (
  <>
    <Cell xs={12}>
      <StyledSection id="component-api" data-toc-indexed="API">
        <Grid lgMargin="space000" xsRowGutter="space000">
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
