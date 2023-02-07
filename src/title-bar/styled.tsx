import {Block} from '../block';
import {getStylePreset, styled} from '../utils/style';
import {Stack} from '../stack';
import {logicalProps} from '../utils/logical-properties';
import {ContainerProps} from './types';

export const StyledStackContainer = styled(Stack)<ContainerProps>`
  ${logicalProps('titleBar')}
  ${getStylePreset('titleBar')}
`;

export const StyledBlock = styled(Block)`
  flex-grow: 1;
`;
