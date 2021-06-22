import React from 'react';
import {Block, InlineMessage, Tab, Tabs, TabSize} from 'newskit';
import {Table} from '../table';
import {ContentText} from '../text-section/content-text';
import {ComponentAPIProps} from './types';
import {ComponentPageCell} from '../layout-cells';

export const ComponentAPI: React.FC<ComponentAPIProps> = ({components}) => (
  <ComponentPageCell>
    {components.map(
      ({title, summary, propsRows, overridesRows, infoNotice}, i, arr) => {
        const propsTable = (
          <Table
            columns={['Name', 'Type', 'Default', 'Description', 'Required']}
            rows={propsRows}
          />
        );
        return (
          <Block spaceStack={i !== arr.length - 1 ? 'space100' : undefined}>
            {title && (
              <ContentText title={title} titleAs="span">
                {summary}
              </ContentText>
            )}
            {overridesRows ? (
              <Tabs size={TabSize.Medium}>
                <Tab label="Props">{propsTable}</Tab>
                <Tab label="Overrides">
                  <Table
                    columns={['Attribute', 'Type', 'Default', 'Description']}
                    rows={overridesRows}
                  />
                  {infoNotice && (
                    <InlineMessage role="region" aria-label="Support resizing">
                      {infoNotice}
                    </InlineMessage>
                  )}
                </Tab>
              </Tabs>
            ) : (
              propsTable
            )}
          </Block>
        );
      },
    )}
  </ComponentPageCell>
);
