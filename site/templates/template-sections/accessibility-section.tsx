import React from 'react';
import {Grid, Cell, InlineMessage, Block, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';
import {ContentText} from '../../components/text-section/content-text';
import {Table} from '../../components/table';
import {ComponentPageCell} from '../../components/layout-cells';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

interface A11ySubSection<RowType> {
  title: string;
  description?: string;
  tableRows?: RowType[];
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
  <Block spaceStack="space070">
    <ContentText title={title} titleAs="span">
      {description}
    </ContentText>
    {tableRows && <Table columns={columns} rows={tableRows} />}
  </Block>
);

const renderInfoNotice = (
  notice: React.ReactNode | React.ReactNode[],
  label: string,
) => {
  if (Array.isArray(notice)) {
    return (
      <>
        {notice.map((note, index) => (
          <Block
            spaceStack={index < notice.length - 1 ? 'space030' : 'space000'}
          >
            <InlineMessage
              role="region"
              aria-label={`${label} ${index}`}
              icon={infoIcon}
            >
              {note}
            </InlineMessage>
          </Block>
        ))}
      </>
    );
  }
  if (notice !== undefined) {
    return (
      <InlineMessage role="region" aria-label={label} icon={infoIcon}>
        {notice}
      </InlineMessage>
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
    title="Accessibility considerations"
    id="accessibility"
    toc="Accessibility"
    introduction={introduction}
  >
    {(focusOrder ||
      infoNoticeFocus ||
      interaction ||
      aria ||
      infoNoticeAria) && (
      <Cell xs={12}>
        <Grid xsRowGutter="space100" xsMargin="space000">
          <ComponentPageCell>
            {focusOrder && (
              <A11yTable
                columns={['Order', 'Element', 'Role']}
                {...focusOrder}
              />
            )}

            {infoNoticeFocus && (
              <Block spaceStack="space090">
                {renderInfoNotice(infoNoticeFocus, 'Focus order notice')}
              </Block>
            )}

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

            {renderInfoNotice(infoNoticeAria, 'WAI Aria notice')}
          </ComponentPageCell>
        </Grid>
      </Cell>
    )}
  </CommonSection>
);
