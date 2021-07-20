import {Cell, Grid} from 'newskit';
import React from 'react';
import {SectionIntroduction} from '../../section-introduction';
import {Separator} from '../../separator';
import {StyledSection} from './styled';
import {ComponentPageCell} from '../../layout-cells';

export type CommonSection = {
  children?: React.ReactNode;
  title: string;
  introduction: React.ReactNode;
  id: string;
  toc?: string;
  hideSeparator?: boolean;
};

export const CommonSection = ({
  children,
  title,
  introduction,
  id,
  toc,
  hideSeparator,
}: CommonSection) => (
  <>
    <Cell xs={12}>
      <StyledSection id={id} data-toc-indexed={toc || title}>
        <Grid xsMargin="space000" xsRowGutter="space000">
          <SectionIntroduction title={title}>
            {introduction}
          </SectionIntroduction>
          {children}
        </Grid>
      </StyledSection>
    </Cell>
    {!hideSeparator && (
      <ComponentPageCell>
        <Separator />
      </ComponentPageCell>
    )}
  </>
);
