import React from 'react';
import {Block, Tab, Tabs, TabSize} from 'newskit';
import {Table} from '../table';
import {ContentText} from '../text-section/content-text';
import {ComponentColoursTableProps} from './types';
import {Separator} from '../separator';

export const ColoursTable: React.FC<ComponentColoursTableProps> = ({
  components,
}) => (
  <>
    {components.map(({title, summary, tabs}, i, arr) => {
      const tabList: {label: string; content: React.ReactNode}[] = [];

      tabs.map(({header, rows, description}) =>
        tabList.push({
          label: header,
          content: (
            <>
              <ContentText>{description}</ContentText>
              <Table
                columns={[
                  'Colour',
                  'Colour token',
                  'Token value',
                  'Common uses',
                ]}
                rows={rows}
              />
            </>
          ),
        }),
      );

      const tabOverrides = {
        typographyPreset: 'utilityButton020',
        stylePreset: 'componentPageTabs',
      };

      return (
        <>
          <Block spaceStack={i !== arr.length - 1 ? 'space100' : undefined}>
            {title && (
              <ContentText title={title} titleAs="span">
                {summary}
              </ContentText>
            )}
            {tabList.length > 1 && (
              <Tabs size={TabSize.Medium}>
                {tabList.map(({label, content}) => (
                  <Tab label={label} overrides={tabOverrides}>
                    {content}
                  </Tab>
                ))}
              </Tabs>
            )}
            {tabList.length === 1 && tabList[0].content}
          </Block>
          <Separator />
        </>
      );
    })}
  </>
);
