import {Grid, Block, Image, ImageProps} from 'newskit';
import React from 'react';
import {SectionIntroduction} from '../../section-introduction';
import {Separator} from '../../separator';
import {Table} from '../../table';
import {StyledSection} from './styled';
import {IntroductionText} from './types';
import {ComponentPageCell} from '../../layout-cells';

export interface AnatomyProps {
  media: ImageProps;
  rows: {
    name: string;
    description: string | JSX.Element;
    component: string;
    optional?: boolean;
  }[];
}

export type AnatomySectionProps = AnatomyProps & IntroductionText;

export const AnatomySection: React.FC<AnatomySectionProps> = ({
  introduction,
  media,
  rows,
}) => (
  <>
    <ComponentPageCell>
      <StyledSection id="anatomy" data-toc-indexed="Anatomy">
        {/* TODO: this Grid can be removed when the Cell is removed from
        SectionIntroduction */}
        <Grid lgMargin="space000" xsRowGutter="space000">
          <SectionIntroduction
            title="Anatomy"
            cellProps={{
              md: 12,
              lg: 12,
              mdOffset: 0,
            }}
          >
            {introduction}
          </SectionIntroduction>
        </Grid>
        <Block spaceStack="space050">
          <Image {...media} />
        </Block>
        <Block spaceStack="space050">
          <Table
            columns={['Item', 'Name', 'Description', 'Component', 'Optional']}
            rows={rows}
          />
        </Block>
      </StyledSection>
    </ComponentPageCell>
    <ComponentPageCell>
      <Separator />
    </ComponentPageCell>
  </>
);
