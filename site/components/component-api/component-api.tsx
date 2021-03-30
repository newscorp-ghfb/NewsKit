import React from 'react';
import {Block, Cell, Tab, Tabs, TabSize} from 'newskit';
import {Table} from '../table';
import {ContentText} from '../text-section/content-text';
import {ComponentAPIProps} from './types';

export const ComponentAPI: React.FC<ComponentAPIProps> = ({components}) => (
  <Cell xs={12} lg={8} mdOffset={1}>
    {components.map(({title, summary, propsTable, overridesTable}) => (
      <Block spaceStack="space070">
        {title && (
          <ContentText title={title} titleAs="span">
            {summary}
          </ContentText>
        )}
        {overridesTable ? (
          <Tabs size={TabSize.Small}>
            <Tab label="Props">
              <Table {...propsTable} />
            </Tab>
            <Tab label="Overrides">
              <Table {...overridesTable} />
            </Tab>
          </Tabs>
        ) : (
          <Table {...propsTable} />
        )}
      </Block>
    ))}
  </Cell>
);
