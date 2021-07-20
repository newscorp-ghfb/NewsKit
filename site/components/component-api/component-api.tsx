import React from 'react';
import {Block, InlineMessage, Tab, Tabs, TabSize} from 'newskit';
import {Table} from '../table';
import {ContentText} from '../text-section/content-text';
import {ComponentAPIProps} from './types';
import {ComponentPageCell} from '../layout-cells';

export const ComponentAPI: React.FC<ComponentAPIProps> = ({components}) => (
  <ComponentPageCell>
    {components.map(
      (
        {title, summary, propsRows, argsRows, overridesRows, infoNotice},
        i,
        arr,
      ) => {
        const tabs: {label: string; content: React.ReactNode}[] = [];

        if (propsRows) {
          tabs.push({
            label: 'Props',
            content: (
              <Table
                columns={['Name', 'Type', 'Default', 'Description', 'Required']}
                rows={propsRows}
              />
            ),
          });
        }

        if (argsRows) {
          tabs.push({
            label: 'Arguments',
            content: (
              <Table
                columns={[
                  'Argument',
                  'Type',
                  'Default',
                  'Description',
                  'Required',
                ]}
                rows={argsRows}
              />
            ),
          });
        }

        if (overridesRows) {
          tabs.push({
            label: 'Overrides',
            content: (
              <>
                <Table
                  columns={['Attribute', 'Type', 'Default', 'Description']}
                  rows={overridesRows}
                />
                {infoNotice && (
                  <InlineMessage role="region" aria-label="Support resizing">
                    {infoNotice}
                  </InlineMessage>
                )}
              </>
            ),
          });
        }

        const tabOverrides = {
          typographyPreset: 'utilityButton020',
          stylePreset: 'componentPageTabs',
        };

        return (
          <Block spaceStack={i !== arr.length - 1 ? 'space100' : undefined}>
            {title && (
              <ContentText title={title} titleAs="span">
                {summary}
              </ContentText>
            )}
            {tabs.length > 1 && (
              <Tabs size={TabSize.Medium}>
                {tabs.map(({label, content}) => (
                  <Tab label={label} overrides={tabOverrides}>
                    {content}
                  </Tab>
                ))}
              </Tabs>
            )}
            {tabs.length === 1 && tabs[0].content}
          </Block>
        );
      },
    )}
  </ComponentPageCell>
);
