import React from 'react';
import {Cell} from 'newskit';
import {ContentText} from '../text-section/content-text';
import {Table} from '../table';
import {A11yTableProps} from './types';

export const A11yTable: React.FC<A11yTableProps> = ({
  title,
  description,
  table,
}) => (
  <Cell xs={12} md={10} lg={8} mdOffset={1}>
    <ContentText title={title} titleAs="span">
      {description}
      <Table {...table} />
    </ContentText>
  </Cell>
);
