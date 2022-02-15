import {useLogicalProps} from '../utils/logical-properties';
import {
  styled,
  getStylePreset,
  getResponsiveSpace,
  getResponsiveSize,
} from '../utils/style';

import {BaseFlagProps, BaseFlagOverrides} from './types';

export const StyledBaseFlag = styled('div')<
  Omit<BaseFlagProps<BaseFlagOverrides>, 'loading'> & {
    $loading?: BaseFlagProps<BaseFlagOverrides>['loading'];
    $disabled?: BaseFlagProps<BaseFlagOverrides>['disabled'];
  }
>`
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  ${useLogicalProps}

  ${props =>
    getResponsiveSize(
      minHeight =>
        props.overrides && props.overrides.height ? '' : {minHeight},
      '',
      '',
      'minHeight',
    )(props)};
  ${props =>
    getResponsiveSize(
      minWidth => (props.overrides && props.overrides.width ? '' : {minWidth}),
      '',
      '',
      'minWidth',
    )(props)};
  ${getResponsiveSize('width', '', '', 'width')};
  ${getResponsiveSize('height', '', '', 'height')};
  ${getResponsiveSpace('padding', '', '', 'spaceInset')};
  ${getResponsiveSize('maxWidth', '', '', 'maxWidth')};
  ${getResponsiveSize('maxHeight', '', '', 'maxHeight')};

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
