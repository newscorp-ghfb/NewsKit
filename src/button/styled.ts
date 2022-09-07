import {Flag} from '../flag';
import {logicalProps} from '../utils/logical-properties';
import {styled, getStylePreset} from '../utils/style';
import {getTransitionPreset} from '../utils/style/transition-preset';
import {ButtonOrButtonLinkProps} from './types';

export const StyledFlag = styled(Flag)<
  Omit<ButtonOrButtonLinkProps, 'size' | 'loading'> & {
    $loading?: ButtonOrButtonLinkProps['loading'];
  }
>`
  margin: 0; //reset for safari

  ${({size}) => getTransitionPreset(`button.${size}`, '')}
  ${({$loading, disabled}) => {
    if (disabled) {
      return null;
    }
    const cursor = $loading ? 'progress' : 'pointer';
    return {cursor};
  }}
  ${({$loading, disabled}) =>
    getStylePreset('', '', {
      isLoading: $loading,
      isDisabled: disabled,
    })}

  ${({size}) =>
    logicalProps(
      `button.${size}`,
    )}; // needs to be used in here as well, even though Flag uses it itself
  // that is because of the margin: 0; override higher up.
`;
