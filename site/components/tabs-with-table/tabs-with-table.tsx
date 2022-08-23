import React from 'react';
import {Tab, Tabs} from 'newskit';
import {Table} from '../table';
import {ComponentTabsWithTableProps} from './types';
import {ContentSecondary, ContentTertiary} from '../content-structure';

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
            <ContentTertiary hideBottomSpacing description={description}>
              <Table columns={columnHeader} rows={rows} />
            </ContentTertiary>
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
            <Tabs size="medium">
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
