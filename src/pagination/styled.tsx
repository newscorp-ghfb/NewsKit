import {styled, getStylePreset} from '../utils/style';
import {PaginationItemProps, PaginationProps} from './types';
import {logicalProps} from '../utils/logical-properties';
import {Button} from '../button';

export const StyledNav = styled.nav<PaginationProps>`
  ${logicalProps()}
  ${getStylePreset('')};
`;

export const StyledUnorderedList = styled.ul<PaginationProps>`
  list-style: none;
  display: inline-flex;
  margin: 0;
  padding: 0px;
`;

export const StyledListItem = styled.li<PaginationProps>`
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const StyledButton = styled(Button)<PaginationItemProps>`
  ${({size, selected}) =>
    getStylePreset(`paginationItem.${size}`, '', {isSelected: selected})};
  cursor: ${({selected}) => (selected ? 'text' : 'pointer')};
`;
