import {Cell, Grid} from 'newskit';
import React from 'react';
import {SectionIntroduction} from '../../section-introduction';
import {MediaList, MediaListProps} from '../../media-list';
import {Separator} from '../../separator';
import {StyledSection} from './styled';
import {IntroductionText} from './types';
import {ComponentPageCell} from '../../layout-cells';

export type BehaviorsSectionProps = MediaListProps & IntroductionText;

export const BehaviorsSection: React.FC<BehaviorsSectionProps> = ({
  introduction,
  ...behaviors
}) => (
  <>
    <Cell xs={12}>
      <StyledSection id="behaviors" data-toc-indexed="Behaviours">
        <Grid xsMargin="space000" xsRowGutter="space000">
          <SectionIntroduction title="Behaviours">
            {introduction}
          </SectionIntroduction>
          <MediaList
            cardsLayout={{
              xs: 'vertical',
              sm: 'vertical',
              md: 'horizontal',
              lg: 'horizontal',
              xl: 'horizontal',
            }}
            layout="1-span"
            {...behaviors}
          />
        </Grid>
      </StyledSection>
    </Cell>
    <ComponentPageCell>
      <Separator />
    </ComponentPageCell>
  </>
);
