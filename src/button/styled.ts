import {BaseFlag} from '../flag/flag';
import {styled} from '../utils/style';
import {getTransitionPreset} from '../utils/style/transition-preset';
import {ButtonOrButtonLinkProps} from './types';

export const StyledFlag = styled(BaseFlag)<
  Omit<ButtonOrButtonLinkProps, 'size'>
>`
  ${({size}) => getTransitionPreset(`button.${size}`, '')}
  ${({loading, disabled}) => {
    if (disabled) {
      return null;
    }
    const cursor = loading ? 'progress' : 'pointer';
    return {cursor};
  }}
`;
