import {Flag, FlagProps} from '../flag';
import {getMotionFromTheme, styled} from '../utils/style';
import {ButtonProps} from './types';

export const StyledFlag = styled(Flag)<Omit<FlagProps, 'size'> & ButtonProps>`
  transition-property: background-color;
  transition-duration: ${getMotionFromTheme('motionDuration020')};
  transition-timing-function: ${getMotionFromTheme('motionEaseOut')};

  ${({isLoading, disabled}) => {
    if (disabled) {
      return null;
    }
    const cursor = isLoading ? 'progress' : 'pointer';
    return {cursor};
  }}
`;
