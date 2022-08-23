import {GridLayout} from '../grid-layout';
import {styled, getStylePreset, getResponsiveSize} from '../utils/style';

import {BaseFlagProps, BaseFlagOverrides} from './types';

export const StyledBaseFlag = styled(GridLayout)<
  Omit<BaseFlagProps<BaseFlagOverrides>, 'loading'> & {
    $loading?: BaseFlagProps<BaseFlagOverrides>['loading'];
    $disabled?: BaseFlagProps<BaseFlagOverrides>['disabled'];
  }
>`
  box-sizing: border-box;
  text-decoration: none;
  svg {
    ${getResponsiveSize('width', '', '', 'iconSize')};
    ${getResponsiveSize('height', '', '', 'iconSize')};
  }

  cursor: ${({$disabled}) => ($disabled ? 'not-allowed' : 'default')};

  // Button related styles
  overflow: hidden;
  border: none;
  appearance: none;
  // End of button related styles

  ${({$disabled, $loading}) =>
    getStylePreset('', '', {
      isDisabled: $disabled,
      isLoading: $loading,
    })}
`;
