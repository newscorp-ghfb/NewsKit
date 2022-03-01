import React from 'react';
import {Block, Tab, Tabs, TabSize} from 'newskit';
import {Table} from '../table';
import {ComponentTabsWithTableProps} from './types';
import {ContentText} from '../text-section/content-text';
import {Separator} from '../separator';

export const TabsWithTable: React.FC<ComponentTabsWithTableProps> = ({
  components,
  showSeparator,
}) => (
  <>
    {components.map(({title, summary, tabs}, i, arr) => {
      const tabList: {label: string; content: React.ReactNode}[] = [];

      tabs.map(({header, columnHeader, description, rows}) =>
        tabList.push({
          label: header,
          content: (
            <>
              <ContentText>{description}</ContentText>
              <Table columns={columnHeader} rows={rows} />
            </>
          ),
        }),
      );

      const tabOverrides = {
        typographyPreset: 'utilityButton020',
        stylePreset: 'componentPageTabs',
      };

      return (
        <React.Fragment key={`${title}-${summary}`}>
          <Block spaceStack={i !== arr.length - 1 ? 'space100' : undefined}>
            {title && (
              <ContentText title={title} titleAs="span">
                {summary}
              </ContentText>
            )}
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
          </Block>
          {showSeparator && <Separator />}
        </React.Fragment>
      );
    })}
  </>
);
