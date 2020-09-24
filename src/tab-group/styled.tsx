import {styled, getSpacingInset, getStylePreset} from '../utils/style';
import {TabGroupProps} from './types';
import {Stack} from '../stack';

export const StyledInnerTabGroup = styled(Stack)<
  Pick<TabGroupProps, 'overrides'>
>`
  ${getStylePreset('tabGroup', '')}
  ${getSpacingInset('', '')}
  border-width: 0;
  border-bottom-width: 0.5px;
`;

export const StyledOuterTabGroup = styled(Stack)<
  Pick<TabGroupProps, 'overrides'>
>`
  ${getStylePreset('tabGroup', '')}
  ${getSpacingInset('', '')}
  border-width: 0;
  border-bottom-width: 0.5px;
`;
