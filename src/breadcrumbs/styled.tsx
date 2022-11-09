import {styled, getStylePresetFromTheme} from '../utils/style';
import {BreadcrumbItemProps, BreadcrumbsProps} from './types';
import {logicalProps} from '../utils/logical-properties';
import {Button} from '../button';

export const StyledOrderdList = styled.ol<BreadcrumbsProps>`
  box-sizing: border-box;
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${logicalProps()}
`;

export const StyledButton = styled(Button)<BreadcrumbItemProps>`
  ${getStylePresetFromTheme('breadcrumbItem')};
`;
