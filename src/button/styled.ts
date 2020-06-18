import {Flag, FlagProps} from '../flag';
import {getAnimationFromTheme, styled} from '../utils/style';
import {ButtonProps} from './types';

export const StyledFlag = styled(Flag)<Omit<FlagProps, 'size'> & ButtonProps>`
  transition-property: background-color;
  transition-duration: ${getAnimationFromTheme('animationDuration020')};
  transition-timing-function: ${getAnimationFromTheme('animationEaseOut')};

  ${({isLoading, disabled}) => {
    if (disabled) {
      return null;
    }
    const cursor = isLoading ? 'progress' : 'pointer';
    return {cursor};
  }}
`;
