import React from 'react';
import {Cell, Block, OrderedList, Image} from 'newskit';
import {AnatomyProps} from './types';

export const Anatomy: React.FC<AnatomyProps> = ({media, list}) => (
  <>
    <Cell mdOffset={1} xs={12} md={10} lg={8}>
      <Block spaceStack="space050">
        <Image {...media} />
      </Block>
    </Cell>
    <Cell xs={9} md={8} lg={6} mdOffset={1}>
      <Block spaceStack="space050">
        <OrderedList
          overrides={{content: {typographyPreset: 'editorialCaption010'}}}
        >
          {list}
        </OrderedList>
      </Block>
    </Cell>
  </>
);
