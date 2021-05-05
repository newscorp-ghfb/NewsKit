import {Cell, Grid} from 'newskit';
import React from 'react';
import {SectionIntroduction} from '../../section-introduction';
import {MediaList, MediaListProps} from '../../media-list';
import {Separator} from '../../separator';
import {StyledSection} from './styled';
import {IntroductionText} from './types';
import {ComponentPageCell} from '../../layout-cells';

export type UsageSectionProps = MediaListProps & IntroductionText;

export const UsageSection: React.FC<UsageSectionProps> = ({
  introduction,
  ...usage
}) => (
  <>
    <Cell xs={12}>
      <StyledSection id="usage" data-toc-indexed="Usage">
        <Grid lgMargin="space000" xsRowGutter="space000">
          <SectionIntroduction title="Usage">
            {introduction}
          </SectionIntroduction>
          <MediaList
            gridProps={{xsRowGutter: 'space050'}}
            cardType="usage"
            layout="2-span"
            {...usage}
          />
        </Grid>
      </StyledSection>
    </Cell>
    <ComponentPageCell>
      <Separator />
    </ComponentPageCell>
  </>
);
