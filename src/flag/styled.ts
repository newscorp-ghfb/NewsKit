import {
  styled,
  getSizingFromTheme,
  getTypePreset,
  getPaddingPreset,
} from '../utils/style';
import {getStylePreset} from '../utils/style-preset';
import {BaseFlagProps} from './types';
import {getToken} from '../utils/get-token';

export const IE11FixContainer = styled.div<Pick<BaseFlagProps, 'overrides'>>`
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

export const StyledBaseFlag = styled.div<BaseFlagProps>`
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

  ${getPaddingPreset('', '')}

  cursor: ${({disabled}) => (disabled ? 'not-allowed' : 'default')};

  // Button related styles
  border: none;
  appearance: none;
  overflow: hidden;
  // End of button related styles

  ${({disabled, isLoading}) =>
    getStylePreset('', '', {
      isDisabled: disabled,
      isLoading,
    })}
`;

export const StyledTextCropWrapper = styled.span<
  Pick<BaseFlagProps, 'overrides'>
>`
  ${getTypePreset('', '', {
    withCrop: true,
  })}
`;
