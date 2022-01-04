import React from 'react';
import {styled, getSizingFromTheme} from '../utils/style';
import {isValidNode} from '../utils/component';
import {getBuiId} from '../utils/get-bui-id';
import {StyledLi, StyledUl} from './styled';

export interface UnorderedListProps {
  listItemMarker?: React.ComponentType;
}

const ListItem = styled(StyledLi)`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: ${getSizingFromTheme('spacingSize040')};
`;

const MarkerContainer = styled.span`
  margin-right: ${getSizingFromTheme('spacingSize010')};
`;

export const UnorderedList: React.FC<UnorderedListProps> = ({
  children,
  listItemMarker: ListItemMarker,
}) => (
  <StyledUl $display="block">
    {React.Children.map(children, node =>
      isValidNode(node) ? (
        <ListItem key={getBuiId()}>
          {ListItemMarker && (
            <MarkerContainer>
              <ListItemMarker />
            </MarkerContainer>
          )}
          {node}
        </ListItem>
      ) : null,
    )}
  </StyledUl>
);
