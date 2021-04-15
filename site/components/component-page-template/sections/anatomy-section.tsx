import {Cell, Grid} from 'newskit';
import React from 'react';
import {SectionIntroduction} from '../../section-introduction';
import {Anatomy} from '../../anatomy';
import {Separator} from '../../separator';
import {StyledSection} from './styled';
import {AnatomySectionProps} from './types';
import {ComponentPageCell} from '../../layout-cells';

export const AnatomySection: React.FC<AnatomySectionProps> = ({
  introduction,
  ...anatomy
}) => (
  <>
    <Cell xs={12}>
      <StyledSection id="anatomy" data-toc-indexed="Anatomy">
        <Grid lgMargin="space000" xsRowGutter="space000">
          <SectionIntroduction title="Anatomy">
            {introduction}
          </SectionIntroduction>
          {/* TODO: replace with table */}
          <Anatomy {...anatomy} />
        </Grid>
      </StyledSection>
    </Cell>
    <ComponentPageCell>
      <Separator />
    </ComponentPageCell>
  </>
);
