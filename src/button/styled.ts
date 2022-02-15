import {Flag} from '../flag';
import {useLogicalProps} from '../utils/logical-properties';
import {getMotionFromTheme, styled} from '../utils/style';
import {ButtonOrButtonLinkProps} from './types';

export const StyledFlag = styled(Flag)<Omit<ButtonOrButtonLinkProps, 'size'>>`
  margin: 0; //reset for safari
  transition-property: background-color;
  transition-duration: ${getMotionFromTheme('motionDuration020')};
  transition-timing-function: ${getMotionFromTheme('motionTimingEaseOut')};

  ${({loading, disabled}) => {
    if (disabled) {
      return null;
    }
    const cursor = loading ? 'progress' : 'pointer';
    return {cursor};
  }}
  ${useLogicalProps} // needs to be used in here as well, even though Flag uses it itself
  // that is because of the margin: 0; override higher up.
`;
