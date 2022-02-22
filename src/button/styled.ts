import {Flag} from '../flag';
import {styled} from '../utils/style';
import {getTransitionPreset} from '../utils/style/transition-preset';
import {ButtonOrButtonLinkProps} from './types';

export const StyledFlag = styled(Flag)<Omit<ButtonOrButtonLinkProps, 'size'>>`
  margin: 0; //reset for safari

  ${({size}) => getTransitionPreset(`button.${size}`, '')};
  ${({loading, disabled}) => {
    if (disabled) {
      return null;
    }
    const cursor = loading ? 'progress' : 'pointer';
    return {cursor};
  }}
`;
