import {styled, getStylePreset} from '../utils/style';
import {BreadcrumbItemProps, BreadcrumbsProps} from './types';
import {logicalProps} from '../utils/logical-properties';
import {Button} from '../button';

export const StyledOrderdList = styled.ol<BreadcrumbsProps>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  ${logicalProps()}
`;

export const StyledList = styled.li`
  display: inline;
`;

export const StyledIconContainer = styled.div`
  //not sure about this
  margin-bottom: -4px;
`;

export const StyledButton = styled(Button)<BreadcrumbItemProps>`
  ${({size}) => getStylePreset(`breadcrumbItem.${size}`, '')};
  // overrides padding on the button link which was creating to much gap between button and separator
  padding: 2px;
`;
