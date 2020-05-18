import {
  styled,
  getTypePresetFromTheme,
  getSizingFromTheme,
} from '../utils/style';
import {getStylePresetFromTheme} from '../utils/style-preset';
import {BaseFlagProps, StyledBaseFlagProps} from './types';

export const IE11FixContainer = styled.div<StyledBaseFlagProps>`
  display: inline-flex;
  flex-direction: column;
  width: ${getSizingFromTheme(undefined, '$width', true)};
  height: ${getSizingFromTheme(undefined, '$height', true)};
`;

export const StyledBaseFlag = styled.div<StyledBaseFlagProps>`
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  min-height: ${({$height}) =>
    $height ? '' : getSizingFromTheme(undefined, 'minHeight', true)};
  min-width: ${({$width}) =>
    $width ? '' : getSizingFromTheme(undefined, 'minWidth', true)};
  padding: ${getSizingFromTheme(undefined, 'padding')};
  width: ${getSizingFromTheme(undefined, '$width', true)};
  height: ${getSizingFromTheme(undefined, '$height', true)};
  cursor: ${({disabled}) => (disabled ? 'not-allowed' : 'default')};

  // Button related styles
  border: none;
  appearance: none;
  overflow: hidden;
  // End of button related styles

  svg {
    width: ${getSizingFromTheme(undefined, 'iconSize')};
    height: ${getSizingFromTheme(undefined, 'iconSize')};
  }

  ${({disabled, isLoading, ...props}) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getStylePresetFromTheme(undefined, 'stylePreset' as any, {
      isDisabled: disabled,
      isLoading,
    })(props)}
`;

export const StyledTextCropWrapper = styled.span<
  Pick<BaseFlagProps, 'typePreset'>
>`
  ${getTypePresetFromTheme(undefined, 'typePreset')}
`;
