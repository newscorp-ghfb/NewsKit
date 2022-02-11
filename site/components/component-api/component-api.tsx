import React from 'react';
import {Block, Tab, Tabs, TabSize} from 'newskit';
import {Table} from '../table';
import {ContentText} from '../text-section/content-text';
import {ComponentAPIProps} from './types';
import {ComponentPageCell} from '../layout-cells';

export const ComponentAPI: React.FC<ComponentAPIProps> = ({components}) => (
  <ComponentPageCell>
    {components.map(
      (
        {
          title,
          summary,
          propsSummary,
          argsSummary,
          overridesSummary,
          propsRows,
          argsRows,
          overridesRows,
          propsFooter,
          argsFooter,
          overridesFooter,
        },
        i,
        arr,
      ) => {
        const tabs: {
          label: string;
          tabSummary?: string;
          content: React.ReactNode;
        }[] = [];

        if (propsRows) {
          tabs.push({
            label: 'Props',
            tabSummary: propsSummary,
            content: (
              <>
                <Table
                  columns={[
                    'Name',
                    'Type',
                    'Default',
                    'Description',
                    'Required',
                  ]}
                  rows={propsRows}
                />
                {propsFooter}
              </>
            ),
          });
        }

        if (argsRows) {
          tabs.push({
            label: 'Arguments',
            tabSummary: argsSummary,
            content: (
              <>
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
                {argsFooter}
              </>
            ),
          });
        }

        if (overridesRows) {
          tabs.push({
            label: 'Overrides',
            tabSummary: overridesSummary,
            content: (
              <>
                <Table
                  columns={['Attribute', 'Type', 'Default', 'Description']}
                  rows={overridesRows}
                />
                {overridesFooter}
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
                {tabs.map(({label, tabSummary, content}) => (
                  <Tab label={label} overrides={tabOverrides}>
                    {tabSummary && <ContentText>{tabSummary}</ContentText>}
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
