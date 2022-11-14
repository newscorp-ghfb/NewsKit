import {styled, getStylePreset} from '../utils/style';
import {BreadcrumbItemProps, BreadcrumbsProps} from './types';
import {logicalProps} from '../utils/logical-properties';
import {Button} from '../button';

export const StyledNav = styled.nav``;

export const StyledOrderdList = styled.ol<BreadcrumbsProps>`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: inline-flex;
  align-items: center;
  ${logicalProps()}
`;

export const StyledList = styled.li``;

export const StyledIconContainer = styled.div``;

export const StyledButton = styled(Button)<BreadcrumbItemProps>`
  ${({size, selected}) =>
    getStylePreset(`breadcrumbItem.${size}`, '', {isSelected: selected})};
  padding: 0px;
`;
