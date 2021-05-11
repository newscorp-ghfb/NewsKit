import {Cell, Grid} from 'newskit';
import React from 'react';
import {SectionIntroduction} from '../../section-introduction';
import {MediaList, MediaListProps} from '../../media-list';
import {Separator} from '../../separator';
import {StyledSection} from './styled';
import {IntroductionText} from './types';
import {ComponentPageCell} from '../../layout-cells';

export type OptionsSectionProps = MediaListProps & IntroductionText;

export const OptionsSection: React.FC<OptionsSectionProps> = ({
  introduction,
  ...options
}) => (
  <>
    <Cell xs={12}>
      <StyledSection id="options" data-toc-indexed="Options">
        <Grid xsMargin="space000" xsRowGutter="space000">
          <SectionIntroduction title="Options">
            {introduction}
          </SectionIntroduction>
          <MediaList
            {...options}
            cardsLayout={{
              xs: 'vertical',
              sm: 'vertical',
              md: 'horizontal',
              lg: 'horizontal',
              xl: 'horizontal',
            }}
            layout="1-span"
          />
        </Grid>
      </StyledSection>
    </Cell>
    <ComponentPageCell>
      <Separator />
    </ComponentPageCell>
  </>
);
