import {GridLayout} from '../grid-layout';
import {logicalProps} from '../utils/logical-properties';
import {
  styled,
  getStylePreset,
  getResponsiveSpace,
  getResponsiveSize,
} from '../utils/style';

import {BaseFlagProps, BaseFlagOverrides} from './types';

export const StyledBaseFlag = styled(GridLayout)<
  Omit<BaseFlagProps<BaseFlagOverrides>, 'loading'> & {
    $loading?: BaseFlagProps<BaseFlagOverrides>['loading'];
    $disabled?: BaseFlagProps<BaseFlagOverrides>['disabled'];
  }
>`
  box-sizing: border-box;
  text-decoration: none;

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
  ${getResponsiveSize('maxWidth', '', '', 'maxWidth')};
  ${getResponsiveSize('maxHeight', '', '', 'maxHeight')};
  ${getResponsiveSpace('padding', '', '', 'spaceInset')};
  ${({size}) => logicalProps(`flag.${size}`)};

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
