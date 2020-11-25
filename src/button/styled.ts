import {Flag, FlagProps} from '../flag';
import {getMotionFromTheme, styled} from '../utils/style';
import {ButtonProps} from './types';

export const StyledFlag = styled(Flag)<FlagProps & ButtonProps>`
  transition-property: background-color;
  transition-duration: ${getMotionFromTheme('motionDuration020')};
  transition-timing-function: ${getMotionFromTheme('motionEaseOut')};

  ${({loading, disabled}) => {
    if (disabled) {
      return null;
    }
    const cursor = loading ? 'progress' : 'pointer';
    return {cursor};
  }}
`;
