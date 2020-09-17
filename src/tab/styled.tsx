import {FlagProps} from '../flag';
import {styled, getStylePreset} from '../utils/style';
import {TabProps} from './types';
import {Button} from '../button';

export const StyledButton = styled(Button)<
  Omit<FlagProps, 'size' | 'isLoading'> & TabProps
>`
  ${({isSelected}) => isSelected && getStylePreset('tab', '', {isSelected})}
`;
