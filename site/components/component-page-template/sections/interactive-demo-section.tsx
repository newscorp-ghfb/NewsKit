import {Block, Cell, Grid} from 'newskit';
import React from 'react';
import {Separator} from '../../separator';
import {SectionIntroduction} from '../../section-introduction';
import {Playground} from '../../playground';
import {PlaygroundProps} from '../../playground/types';
import {StyledSection} from './styled';
import {ComponentPageCell} from '../../layout-cells';

export interface InteractiveDemoSectionProps {
  introduction: string;
  playground: PlaygroundProps;
}

export const InteractiveDemoSection: React.FC<InteractiveDemoSectionProps> = ({
  introduction,
  playground,
}) => (
  <>
    <Cell xs={12}>
      <StyledSection id="interactive-demo" data-toc-indexed="Interactive Demo">
        <Grid xsMargin="space000" xsRowGutter="space000">
          <SectionIntroduction title="Interactive Demo">
            {introduction}
          </SectionIntroduction>
          <ComponentPageCell>
            <Block spaceStack="space050">
              <Playground {...playground} />
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
