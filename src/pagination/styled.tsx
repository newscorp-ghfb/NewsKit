import {styled, getStylePreset, getSpacingCssFromTheme} from '../utils/style';
import {ComponentSizeProps, PaginationItemProps} from './types';
import {logicalProps} from '../utils/logical-properties';
import {Button} from '../button';

export const StyledNav = styled.nav<ComponentSizeProps>`
  ${logicalProps()}
  ${({size}) => getStylePreset(`pagination.${size}`, '')};
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
  ${getSpacingCssFromTheme('margin', 'space010')};
`;

export const StyledButton = styled(Button)<PaginationItemProps>`
  ${({size, selected}) =>
    getStylePreset(`paginationItem.${size}`, '', {isSelected: selected})};

  cursor: ${({selected, disabled}) =>
    disabled ? 'not-allowed' : (selected && 'text') || 'pointer'};
`;
