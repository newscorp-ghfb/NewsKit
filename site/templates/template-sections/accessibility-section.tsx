import {Grid, Cell, InlineMessage, Block} from 'newskit';
import React from 'react';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';
import {ContentText} from '../../components/text-section/content-text';
import {Table} from '../../components/table';
import {ComponentPageCell} from '../../components/layout-cells';

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
  infoNoticeFocus?: React.ReactNode | React.ReactNode[];
  infoNoticeAria?: React.ReactNode | React.ReactNode[];
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

const renderInfoNotice = (
  notice: React.ReactNode | React.ReactNode[],
  label: string,
  title?: string,
) => {
  if (Array.isArray(notice)) {
    return (
      <ComponentPageCell>
        {notice.map((note, index) => (
          <Block
            spaceStack={index < notice.length - 1 ? 'space030' : 'space000'}
          >
            <InlineMessage
              role="region"
              aria-label={`${label} ${index}`}
              title={title}
            >
              {note}
            </InlineMessage>
          </Block>
        ))}
      </ComponentPageCell>
    );
  }
  if (notice !== undefined) {
    return (
      <ComponentPageCell>
        <InlineMessage role="region" aria-label={label} title={title}>
          {notice}
        </InlineMessage>
      </ComponentPageCell>
    );
  }
  return null;
};

export const AccessibilitySection: React.FC<AccessibilitySectionProps> = ({
  introduction,
  focusOrder,
  interaction,
  aria,
  infoNoticeFocus,
  infoNoticeAria,
}) => (
  <CommonSection
    title="Accessibility Considerations"
    id="accessibility"
    toc="Accessibility"
    introduction={introduction}
  >
    <Cell xs={12}>
      <Grid xsRowGutter="space100" xsMargin="space000">
        {focusOrder && (
          <A11yTable columns={['Order', 'Element', 'Role']} {...focusOrder} />
        )}

        {renderInfoNotice(infoNoticeFocus, 'Note')}

        {interaction && (
          <A11yTable columns={['Command', 'Description']} {...interaction} />
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

        {renderInfoNotice(infoNoticeAria, 'WAI Aria notice', 'Note')}
      </Grid>
    </Cell>
  </CommonSection>
);
