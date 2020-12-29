import React from 'react';
import {Cell, Block, TextBlock} from 'newskit';
import {Table} from '../table';
import {A11yTableProps} from './types';

export const A11yTable: React.FC<A11yTableProps> = ({
  name,
  description,
  table,
}) => (
  <Cell xs={12} md={10} lg={8} mdOffset={1}>
    <Block spaceStack="space040">
      <TextBlock
        typographyPreset="editorialHeadline020"
        stylePreset="inkContrast"
      >
        {name}
      </TextBlock>
    </Block>
    <Block spaceStack="space050">
      <TextBlock stylePreset="inkBase" typographyPreset="editorialParagraph030">
        {description}
      </TextBlock>
    </Block>
    <Table {...table} />
  </Cell>
);
