import {
  styled,
  getSizingFromTheme,
  getTypographyPreset,
  getStylePreset,
  getResponsiveSpace,
  getResponsiveSize,
} from '../utils/style';

import {BaseFlagProps, BaseFlagOverrides} from './types';
import {getToken} from '../utils/get-token';

export const IE11FixContainer = styled.div<BaseFlagProps<BaseFlagOverrides>>`
  display: inline-flex;
  flex-direction: column;
  ${({theme, overrides}) => {
    const widthToken = getToken({theme, overrides}, '', '', 'width');
    const width = getSizingFromTheme(widthToken, undefined)({theme});

    const heightToken = getToken({theme, overrides}, '', '', 'height');
    const height = getSizingFromTheme(heightToken, undefined)({theme});

    return {
      width,
      height,
    };
  }}
`;

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
  border: none;
  appearance: none;
  overflow: hidden;
  // End of button related styles

  ${({$disabled, $loading}) =>
    getStylePreset('', '', {
      isDisabled: $disabled,
      isLoading: $loading,
    })}
`;

export const StyledTextCropWrapper = styled.span<
  BaseFlagProps<BaseFlagOverrides>
>`
  ${getTypographyPreset('', '', {
    withCrop: true,
  })}
`;
