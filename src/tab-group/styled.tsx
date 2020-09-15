import {styled, getPaddingPreset} from '../utils/style';
import {getStylePreset} from '../utils/style-preset';
import {TabGroupProps} from './types';
import {Stack} from '../stack';

export const StyledInnerTabGroup = styled(Stack)<
  Pick<TabGroupProps, 'overrides'>
>`
  ${getStylePreset('tabGroup', '')}
  ${getPaddingPreset('', '')}
  border-width: 0;
  border-bottom-width: 0.5px;
`;

export const StyledOuterTabGroup = styled(Stack)<
  Pick<TabGroupProps, 'overrides'>
>`
  ${getStylePreset('tabGroup', '')}
  ${getPaddingPreset('', '')}
  border-width: 0;
  border-bottom-width: 0.5px;
`;
