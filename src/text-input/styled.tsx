import {
  styled,
  getTypographyPreset,
  getSpacingStackHorizontal,
  getSpacingInlineHorizontal,
  getMinHeight,
  getSpacingInset,
  getSizingFromTheme,
  getStylePreset,
  getSpacingFromTheme,
  MQ,
} from '../utils/style';
import {TextInputProps, TextInputSize} from './types';
import {TextBlock, TextBlockProps} from '../text-block/text-block';
import {getToken} from '../utils/get-token';
import {Block, BlockProps} from '../block';

export const StyledTextInputContainer = styled.div<TextInputProps>`
  ${({theme, overrides}) => {
    const getSizing = (tokenName: string) => {
      const token = getToken({theme, overrides}, '', '', tokenName);
      return getSizingFromTheme(token, undefined, true)({
        theme,
      });
    };
    const width = getSizing('width');
    return {
      width,
    };
  }}
`;

interface StyledTextInputProps
  extends Pick<TextInputProps, 'overrides' | 'disabled'> {
  $size: TextInputSize;
  stylePreset?: MQ<string>;
  id?: string;
  invalid?: boolean;
  valid?: boolean;
  role?: string;
  dataTestId?: string;
  spaceInsetRight?: string;
}

export const InputIconContainer = styled.div`
  position: relative;
`;

export const IconContainer = styled.span<{iconSpace: string}>`
  display: flex;
  position: absolute;
  right: ${({iconSpace}) => getSpacingFromTheme(iconSpace)};
  top: 50%;
  transform: translate(0, -65%);
`;

export const StyledInput = styled.input<StyledTextInputProps>`
  &{
    padding-right: ${({spaceInsetRight, valid, invalid}) =>
      (valid || invalid) && getSpacingFromTheme(spaceInsetRight)};
  }
  box-sizing: border-box;
  width: 100%;
  cursor: ${({disabled}) => (disabled ? 'not-allowed' : 'default')};
  ${({$size, invalid, valid}) =>
    getStylePreset(`textInput.${$size}.input`, 'input', {
      isInvalid: invalid,
      isValid: valid,
    })}
  ${({$size}) =>
    getTypographyPreset(`textInput.${$size}.input`, 'input', {
      withCrop: true,
    })}
  ${({$size}) => getSpacingInset(`textInput.${$size}.input`, 'input')}
  ${({$size}) => getSpacingStackHorizontal(`textInput.${$size}.input`, 'input')}
  ${({$size}) =>
    getSpacingInlineHorizontal(`textInput.${$size}.input`, 'input')} 
  min-height: ${({$size}) => getMinHeight(`textInput.${$size}.input`, 'input')}
`;

export const StyledLabel = styled.label<StyledTextInputProps>`
    display: block;
    ${({$size}) => getStylePreset(`textInput.${$size}.label`, 'label')}
    ${({$size}) =>
      getTypographyPreset(`textInput.${$size}.label`, 'label', {
        withCrop: true,
      })}
    ${({$size}) =>
      getSpacingStackHorizontal(`textInput.${$size}.label`, 'label')}
    ${({$size}) =>
      getSpacingInlineHorizontal(`textInput.${$size}.label`, 'label')};
 `;

export const StyledAssistiveText = styled(TextBlock)<
  Omit<TextBlockProps, 'overrides'> & StyledTextInputProps
>`
  ${({$size, invalid, valid, disabled}) =>
    getStylePreset(`textInput.${$size}.assistiveText`, 'assistiveText', {
      isInvalid: invalid,
      isValid: valid,
      isDisabled: disabled,
    })}

  ${({$size}) =>
    getTypographyPreset(`textInput.${$size}.assistiveText`, 'assistiveText', {
      withCrop: true,
    })}
`;

export const StyledAssistiveTextContainer = styled(Block)<
  Omit<BlockProps, 'overrides'> & StyledTextInputProps
>`
  min-height: ${({$size}) =>
    getMinHeight(`textInput.${$size}.assistiveText`, 'assistiveText')};
`;
