import {Flag} from '../flag';
import {getMotionFromTheme, styled} from '../utils/style';
import {ButtonOrButtonLinkProps} from './types';

export const StyledFlag = styled(Flag)<Omit<ButtonOrButtonLinkProps, 'size'>>`
  margin: 0; //reset for safari
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
