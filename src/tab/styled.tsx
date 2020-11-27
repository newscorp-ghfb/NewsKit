import {styled, getStylePreset} from '../utils/style';
import {TabProps} from './types';
import {Button} from '../button';

export const StyledButton = styled(Button)<Omit<TabProps, 'size' | 'loading'>>`
  ${({selected}) =>
    selected && getStylePreset('tab', '', {isSelected: selected})}
`;
