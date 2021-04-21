import React from 'react';
import {Block, getSSRId, Tab, Tabs, TabSize} from 'newskit';
import {Table} from '../table';
import {ContentText} from '../text-section/content-text';
import {ComponentAPIProps} from './types';
import {ComponentPageCell} from '../layout-cells';

export const ComponentAPI: React.FC<ComponentAPIProps> = ({components}) => (
  <ComponentPageCell>
    {components.map(({title, summary, propsTable, overridesTable}) => (
      <Block key={getSSRId()} spaceStack="space070">
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
  </ComponentPageCell>
);
