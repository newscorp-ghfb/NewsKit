import {styled, getStylePreset, getTypographyPreset} from '../utils/style';
import {PaginationItemProps, PaginationProps} from './types';
import {logicalProps} from '../utils/logical-properties';
import {Button, ButtonOrButtonLinkProps} from '../button';
import {GridLayout} from '../grid-layout';

export const StyledNav = styled.nav<
  Pick<PaginationProps, 'size' | 'overrides'>
>`
  ${({size}) => getStylePreset(`pagination.${size}`, '')};
  ${({size}) => getTypographyPreset(`pagination.${size}`, '')};
  ${({size}) => logicalProps(`pagination.${size}`, '')};
`;

export const StyledUnorderedList = styled(GridLayout)`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledButton = styled(Button)<
  ButtonOrButtonLinkProps & PaginationItemProps
>`
  ${({size, selected}) =>
    getStylePreset(`paginationItem.${size}`, '', {isSelected: selected})};
`;
