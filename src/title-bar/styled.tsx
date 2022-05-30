import {Block} from '../block';
import {
  getResponsiveSpacingInset,
  getStylePreset,
  styled,
} from '../utils/style';
import {Stack} from '../stack';
import {ContainerProps} from './types';

export const StyledStackContainer = styled(Stack)<ContainerProps>`
  // LOGICAL_PROPS_TO_DO: remove the below func when logical props are used in defaults
  ${getResponsiveSpacingInset('titleBar', '')}
  ${getStylePreset('titleBar')}
`;

export const StyledBlock = styled(Block)`
  flex-grow: 1;
`;
