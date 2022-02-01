import {Flag} from '../flag';
import {getMotionFromTheme, styled} from '../utils/style';
import { getTransitionPreset, getTransitionPresetFromTheme } from '../utils/style/transition-preset';
import {ButtonOrButtonLinkProps} from './types';

export const StyledFlag = styled(Flag)<Omit<ButtonOrButtonLinkProps, 'size'>>`
  margin: 0; //reset for safari
  ${getTransitionPreset('button', '', 'nk-button')};
  ${({loading, disabled}) => {
    if (disabled) {
      return null;
    }
    const cursor = loading ? 'progress' : 'pointer';
    return {cursor};
  }}
`;
