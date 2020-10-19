import {styled, getStylePreset} from '../utils/style';
import {TabProps} from './types';
import {Button, ButtonProps} from '../button';

export const StyledButton = styled(Button)<
  Omit<ButtonProps, 'size' | 'isLoading'> & TabProps
>`
  ${({isSelected}) => isSelected && getStylePreset('tab', '', {isSelected})}
`;
