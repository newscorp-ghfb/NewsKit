import {Flag, FlagProps} from '../flag';
import {styled} from '../utils/style';
import {TabProps} from './types';
import {getStylePreset} from '../utils/style-preset';

export const StyledFlag = styled(Flag)<
  Omit<FlagProps, 'size' | 'isLoading'> & TabProps
>`
  ${({isSelected}) => isSelected && getStylePreset('tab', '', {isSelected})}
`;
