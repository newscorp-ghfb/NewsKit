import React from 'react';
import {
  styled,
  getStylePreset,
  getTypographyPreset,
  getSpacingInlineVertical,
  getMinWidth,
} from '../utils/style';
import {getSSRId} from '../utils/get-ssr-id';
import {isValidNode} from '../utils/component';
import {OrderedListProps} from './types';

const ListItem = styled.li<OrderedListProps>`
  ${getSpacingInlineVertical('orderedList', '')}
  counter-increment: item-counter;
  ${getStylePreset('orderedList.content', 'content')}
  ${getTypographyPreset('orderedList.content', 'content', {
    withCrop: true,
  })}
  &::before {
    content: counter(item-counter) '. ';
    ${getStylePreset('orderedList.counter', 'counter')}
    ${getTypographyPreset('orderedList.counter', 'counter')}
    display: inline-block;
    min-width: ${getMinWidth('orderedList.counter', 'counter')};
  }
`;

const List = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: item-counter;
`;

export const OrderedList: React.FC<OrderedListProps> = ({
  children,
  overrides,
}) => (
  <List role="list">
    {React.Children.map(children, node =>
      isValidNode(node) ? (
        <ListItem overrides={overrides} key={getSSRId()}>
          {node}
        </ListItem>
      ) : null,
    )}
  </List>
);
