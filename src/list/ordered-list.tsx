import React from 'react';
import {styled, getSizingFromTheme} from '../utils/style';
import {getBuiId} from '../utils/get-bui-id';
import {isValidNode} from '../utils/component';
import {StyledOl} from './styled';

const ListItem = styled.li`
  padding-left: ${getSizingFromTheme('sizing010')};
  margin-bottom: ${getSizingFromTheme('sizing040')};
  margin-left: ${getSizingFromTheme('sizing050')};
`;

const List = styled(StyledOl)`
  display: block;
`;

export const OrderedList: React.FC<{}> = ({children}) => (
  <List>
    {React.Children.map(children, node =>
      isValidNode(node) ? <ListItem key={getBuiId()}>{node}</ListItem> : null,
    )}
  </List>
);
