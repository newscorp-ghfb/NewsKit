import React from 'react';
import {GridLayout, GridLayoutItem, Tab, Tabs, TabSize} from 'newskit';
import {Table} from '../table';
import {ComponentTabsWithTableProps} from './types';
import {ContentText} from '../text-section/content-text';
import {ContentColSpan, ContentSecondary} from '../content-structure';

export const TabsWithTable: React.FC<ComponentTabsWithTableProps> = ({
  components,
  showSeparator,
}) => (
  <>
    {components.map(({title, summary, tabs}) => {
      const tabList: {label: string; content: React.ReactNode}[] = [];

      tabs.map(({header, columnHeader, description, rows}) =>
        tabList.push({
          label: header,
          content: (
            <GridLayout columns={`repeat(${ContentColSpan.FULL}, 1fr)`}>
              <GridLayoutItem column={`auto / span ${ContentColSpan.TEXT}`}>
                <ContentText>{description}</ContentText>
              </GridLayoutItem>
              <GridLayoutItem column={`auto / span ${ContentColSpan.FULL}`}>
                <Table columns={columnHeader} rows={rows} />
              </GridLayoutItem>
            </GridLayout>
          ),
        }),
      );

      const tabOverrides = {
        typographyPreset: 'utilityButton020',
        stylePreset: 'componentPageTabs',
      };

      return (
        <ContentSecondary
          key={`${title}-${summary}`}
          headline={title}
          description={summary}
          showSeparator={showSeparator}
        >
          {tabList.length > 1 && (
            <Tabs size={TabSize.Medium}>
              {tabList.map(({label, content}) => (
                <Tab label={label} overrides={tabOverrides} key={label}>
                  {content}
                </Tab>
              ))}
            </Tabs>
          )}
          {tabList.length === 1 && tabList[0].content}
        </ContentSecondary>
      );
    })}
  </>
);
