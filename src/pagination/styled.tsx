import {styled, getStylePreset, getTypographyPreset} from '../utils/style';
import {ComponentSizeProps, PaginationItemProps} from './types';
import {logicalProps} from '../utils/logical-properties';
import {Button} from '../button';

// The path will most likely always be 'pagination'
export const StyledNav = styled.nav<ComponentSizeProps>`
  ${({path, size}) => getStylePreset(`${path}.${size}`, '')};
  ${({path, size}) => getTypographyPreset(`${path}.${size}`, '')};
  ${({path, size}) => logicalProps(`${path}.${size}`, '')};
`;

export const StyledUnorderedList = styled.ul`
  list-style: none;
  display: inline-flex;
  margin: 0;
  padding: 0px;
`;

export const StyledListItem = styled.li<ComponentSizeProps>`
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const StyledButton = styled(Button)<PaginationItemProps>`
  ${({size, selected}) =>
    getStylePreset(`paginationItem.${size}`, '', {isSelected: selected})};

  cursor: ${({disabled}) => (disabled ? 'not-allowed' : 'pointer')};
`;
