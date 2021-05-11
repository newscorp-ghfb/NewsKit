import {Grid, Block, Image, ImageProps, Cell} from 'newskit';
import React from 'react';
import {SectionIntroduction} from '../../section-introduction';
import {Table} from '../../table';
import {StyledSection} from './styled';
import {IntroductionText} from './types';
import {ComponentPageCell} from '../../layout-cells';
import {Separator} from '../../separator';

export interface AnatomyProps {
  media: ImageProps;
  rows: {
    name: string;
    description: string | JSX.Element;
    component: string | string[];
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
    <Cell xs={12}>
      <StyledSection id="anatomy" data-toc-indexed="Anatomy">
        <Grid xsMargin="space000" xsRowGutter="space000">
          <SectionIntroduction title="Anatomy">
            {introduction}
          </SectionIntroduction>
          <ComponentPageCell>
            <Block spaceStack="space050">
              <Image {...media} />
            </Block>
            <Block spaceStack="space000">
              <Table
                columns={[
                  'Item',
                  'Name',
                  'Description',
                  'Component',
                  'Optional',
                ]}
                rows={rows}
              />
            </Block>
          </ComponentPageCell>
        </Grid>
      </StyledSection>
    </Cell>
    <ComponentPageCell>
      <Separator />
    </ComponentPageCell>
  </>
);
