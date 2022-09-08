import {BaseFlag} from '../flag/flag';
import {logicalProps} from '../utils/logical-properties';
import {styled} from '../utils/style';
import {getTransitionPreset} from '../utils/style/transition-preset';
import {ButtonOrButtonLinkProps} from './types';

export const StyledFlag = styled(BaseFlag)<
  Omit<ButtonOrButtonLinkProps, 'size'>
>`
  margin: 0; //reset for safari

  ${({size}) => getTransitionPreset(`button.${size}`, '')}
  ${({loading, disabled}) => {
    if (disabled) {
      return null;
    }
    const cursor = loading ? 'progress' : 'pointer';
    return {cursor};
  }}

  ${({size}) =>
    logicalProps(
      `button.${size}`,
    )}; // needs to be used in here as well, even though Flag uses it itself
  // that is because of the margin: 0; override higher up.
`;
