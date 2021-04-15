import {Grid, Cell} from 'newskit';
import React from 'react';

import {SectionIntroduction} from '../../section-introduction';
import {Separator} from '../../separator';
import {StyledSection} from './styled';
import {AccessibilitySectionProps} from './types';

import {ContentText} from '../../text-section/content-text';
import {Table} from '../../table';
import {ComponentPageCell} from '../../layout-cells';

const A11yTable: React.FC<
  | AccessibilitySectionProps['focusOrder']
  | AccessibilitySectionProps['interaction']
  | AccessibilitySectionProps['aria']
> = ({title, description, table}) => (
  <ComponentPageCell>
    <ContentText title={title} titleAs="span">
      {description}
    </ContentText>
    <Table {...table} />
  </ComponentPageCell>
);

export const AccessibilitySection: React.FC<AccessibilitySectionProps> = ({
  introduction,
  focusOrder,
  interaction,
  aria,
}) => (
  <>
    <Cell xs={12}>
      <StyledSection id="accessibility" data-toc-indexed="Accessibility">
        <Grid lgMargin="space000" xsRowGutter="space000">
          <SectionIntroduction title="Accessibility Considerations">
            {introduction}
          </SectionIntroduction>
          <Cell xs={12}>
            <Grid xsRowGutter="space100" xsMargin="space000">
              {focusOrder && focusOrder && <A11yTable {...focusOrder} />}
              {interaction && interaction && <A11yTable {...interaction} />}
              {aria && <A11yTable {...aria} />}
            </Grid>
          </Cell>
        </Grid>
      </StyledSection>
    </Cell>
    <ComponentPageCell>
      <Separator />
    </ComponentPageCell>
  </>
);
