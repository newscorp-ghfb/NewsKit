import {Cell, Grid} from 'newskit';
import React from 'react';
import {SectionIntroduction} from '../../section-introduction';
import {MediaList} from '../../media-list';
import {Separator} from '../../separator';
import {StyledSection} from './styled';
import {StatesSectionProps} from './types';
import {ComponentPageCell} from '../../layout-cells';

export const StatesSection: React.FC<StatesSectionProps> = ({
  introduction,
  ...states
}) => (
  <>
    <Cell xs={12}>
      <StyledSection id="states" data-toc-indexed="States">
        <Grid lgMargin="space000" xsRowGutter="space000">
          <SectionIntroduction title="States">
            {introduction}
          </SectionIntroduction>
          <MediaList {...states} layout="2-span" />
        </Grid>
      </StyledSection>
    </Cell>
    <ComponentPageCell>
      <Separator />
    </ComponentPageCell>
  </>
);
