import {styled, getStylePreset} from '../utils/style';
import {BreadcrumbItemProps, BreadcrumbsProps} from './types';
import {logicalProps} from '../utils/logical-properties';
import {Button} from '../button';

export const StyledNav = styled.nav<BreadcrumbsProps>``;

export const StyledOrderdList = styled.ol<BreadcrumbsProps>`
  list-style: none;
  display: inline-flex;
  ${getStylePreset('')};
  ${logicalProps()}
  margin: 0;
  padding: 0px;
`;

export const StyledList = styled.li`
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const StyledButton = styled(Button)<BreadcrumbItemProps>`
  ${({size, selected}) =>
    getStylePreset(`breadcrumbItem.${size}`, '', {isSelected: selected})};
  padding: 0px;
`;
