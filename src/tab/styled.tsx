import {FlagProps} from '../flag';
import {styled} from '../utils/style';
import {TabProps} from './types';
import {getStylePreset} from '../utils/style-preset';
import {Button} from '../button';

export const StyledButton = styled(Button)<
  Omit<FlagProps, 'size' | 'isLoading'> & TabProps
>`
  ${({isSelected}) => isSelected && getStylePreset('tab', '', {isSelected})}
`;
