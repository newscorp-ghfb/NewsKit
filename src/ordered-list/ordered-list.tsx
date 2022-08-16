import React from 'react';
import {
  styled,
  getStylePreset,
  getTypographyPreset,
  getSpacingInlineVertical,
  getMinWidth,
} from '../utils/style';
import {isValidNode} from '../utils/component';
import {OrderedListItemProps, OrderedListProps} from './types';
import defaults from './defaults';
import {withOwnTheme} from '../utils/with-own-theme';
import {logicalProps} from '../utils/logical-properties';

const ListItem = styled.li<OrderedListItemProps>`
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

const List = styled.ol<Pick<OrderedListProps, 'overrides'>>`
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: item-counter;

  ${logicalProps()}
`;

const ThemelessOrderedList = React.forwardRef<
  HTMLOListElement,
  OrderedListProps
>(({children, overrides}, ref) => (
  <List ref={ref} role="list" overrides={overrides}>
    {React.Children.map(children, node =>
      isValidNode(node) ? (
        <ListItem overrides={overrides}>{node}</ListItem>
      ) : null,
    )}
  </List>
));

export const OrderedList = withOwnTheme(ThemelessOrderedList)({defaults});
