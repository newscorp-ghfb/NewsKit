import {styled, getStylePreset} from '../utils/style';
import {BreadcrumbItemProps, BreadcrumbsProps} from './types';
import {logicalProps} from '../utils/logical-properties';
import {Button} from '../button';

export const StyledNav = styled.nav<BreadcrumbsProps>`
  ${logicalProps()}
  ${getStylePreset('')};
`;

export const StyledOrderdList = styled.ol<BreadcrumbsProps>`
  list-style: none;
  display: inline-flex;
  margin: 0;
  padding: 0px;
`;

export const StyledListItem = styled.li<BreadcrumbsProps>`
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const StyledButton = styled(Button)<BreadcrumbItemProps>`
  ${({size, selected}) =>
    getStylePreset(`breadcrumbItem.${size}`, '', {isSelected: selected})};

  cursor: ${({selected}) => (selected ? 'text' : 'pointer')};
  padding: 0px;
`;
