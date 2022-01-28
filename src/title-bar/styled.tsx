import {Block} from '../block';
import {
  getResponsiveSpacingInset,
  getStylePreset,
  styled,
} from '../utils/style';
import {Stack} from '../stack';
import {ContainerProps} from './types';

export const StyledStackContainer = styled(Stack)<ContainerProps>`
  ${getResponsiveSpacingInset('titleBar', '')};
  ${getStylePreset('titleBar')};
`;

export const StyledBlock = styled(Block)`
  flex-grow: 1;
`;
