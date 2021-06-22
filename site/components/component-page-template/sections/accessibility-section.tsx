import {Grid, Cell, InlineMessage} from 'newskit';
import React from 'react';
import {SectionIntroduction} from '../../section-introduction';
import {Separator} from '../../separator';
import {StyledSection} from './styled';
import {IntroductionText} from './types';

import {ContentText} from '../../text-section/content-text';
import {Table} from '../../table';
import {ComponentPageCell} from '../../layout-cells';

interface A11ySubSection<RowType> {
  title: string;
  description?: string;
  tableRows: RowType[];
}

export interface AccessibilityTablesProps {
  focusOrder?: A11ySubSection<{
    order: string | number;
    element: string | JSX.Element;
    role?: string;
  }>;
  aria?: A11ySubSection<{
    element: string;
    attribute: string | string[];
    value: string | string[];
    description: string | JSX.Element;
    userSupplied?: true;
  }>;
  interaction?: A11ySubSection<{
    command: string[];
    description: string | JSX.Element;
  }>;
  infoNoticeFocus?: React.ReactNode;
  infoNoticeAria?: React.ReactNode;
}

export type AccessibilitySectionProps = AccessibilityTablesProps &
  IntroductionText;

const A11yTable: React.FC<
  {columns: string[]} & (
    | AccessibilitySectionProps['focusOrder']
    | AccessibilitySectionProps['interaction']
    | AccessibilitySectionProps['aria']
  )
> = ({title, description, columns, tableRows}) => (
  <ComponentPageCell>
    <ContentText title={title} titleAs="span">
      {description}
    </ContentText>
    <Table columns={columns} rows={tableRows} />
  </ComponentPageCell>
);

export const AccessibilitySection: React.FC<AccessibilitySectionProps> = ({
  introduction,
  focusOrder,
  interaction,
  aria,
  infoNoticeFocus,
  infoNoticeAria,
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
              {focusOrder && (
                <A11yTable
                  columns={['Order', 'Element', 'Role']}
                  {...focusOrder}
                />
              )}
              <ComponentPageCell>
                {infoNoticeFocus && (
                  <InlineMessage role="region" aria-label="Focus notice">
                    {infoNoticeFocus}
                  </InlineMessage>
                )}
              </ComponentPageCell>
              {interaction && (
                <A11yTable
                  columns={['Command', 'Description']}
                  {...interaction}
                />
              )}
              {aria && (
                <A11yTable
                  columns={[
                    'Element',
                    'Attribute',
                    'Value',
                    'Description',
                    'User Supplied',
                  ]}
                  {...aria}
                />
              )}
              <ComponentPageCell>
                {infoNoticeAria && (
                  <InlineMessage role="region" aria-label="Wai Aria notice">
                    {infoNoticeAria}
                  </InlineMessage>
                )}
              </ComponentPageCell>
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
