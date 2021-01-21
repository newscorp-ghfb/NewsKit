import {
  styled,
  getSizingFromTheme,
  getTypographyPreset,
  getSpacingInset,
  getStylePreset,
} from '../utils/style';

import {BaseFlagProps, BaseFlagOverrides} from './types';
import {getToken} from '../utils/get-token';

export const IE11FixContainer = styled.div<BaseFlagProps<BaseFlagOverrides>>`
  display: inline-flex;
  flex-direction: column;
  ${({theme, overrides}) => {
    const widthToken = getToken({theme, overrides}, '', '', 'width');
    const width = getSizingFromTheme(widthToken, undefined, true)({theme});

    const heightToken = getToken({theme, overrides}, '', '', 'height');
    const height = getSizingFromTheme(heightToken, undefined, true)({theme});

    return {
      width,
      height,
    };
  }}
`;

export const StyledBaseFlag = styled.div<
  Omit<BaseFlagProps<BaseFlagOverrides>, 'loading'> & {
    $loading?: BaseFlagProps<BaseFlagOverrides>['loading'];
  }
>`
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  ${({theme, overrides}) => {
    const getSizing = (tokenName: string) => {
      const token = getToken({theme, overrides}, '', '', tokenName);
      return getSizingFromTheme(token, undefined, true)({
        theme,
      });
    };
    const minHeight = getSizing('minHeight');
    const minWidth = getSizing('minWidth');
    const width = getSizing('width');
    const height = getSizing('height');
    const iconSize = getSizing('iconSize');

    return {
      minHeight: overrides && overrides.height ? null : minHeight,
      minWidth: overrides && overrides.width ? null : minWidth,
      width,
      height,
      svg: {
        width: iconSize,
        height: iconSize,
      },
    };
  }}

  ${getSpacingInset('', '')}

  cursor: ${({disabled}) => (disabled ? 'not-allowed' : 'default')};

  // Button related styles
  border: none;
  appearance: none;
  overflow: hidden;
  // End of button related styles

  ${({disabled, $loading}) =>
    getStylePreset('', '', {
      isDisabled: disabled,
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
