import {
  styled,
  getTypographyPreset,
  getSpacingStack,
  getSpacingInline,
  getMinHeight,
  getPaddingPreset,
  getSizingFromTheme,
} from '../utils/style';
import {TextInputProps, TextInputSize} from './types';
import {TextBlock, TextBlockProps} from '../text-block/text-block';
import {getStylePreset, getStylePresetFromTheme} from '../utils/style-preset';
import {getToken} from '../utils/get-token';

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

interface InputContainer
  extends Pick<TextInputProps, 'overrides' | 'disabled'> {
  $size: TextInputSize;
  stylePreset?: string;
  id?: string;
}

export const StyledInput = styled.input<InputContainer>`
  box-sizing: border-box;
  width: 100%;
  cursor: ${({disabled}) => (disabled ? 'not-allowed' : 'default')};
  ${({$size}) => getStylePreset(`textInput.${$size}.input`, 'input')}
  ${({$size}) =>
    getTypographyPreset(`textInput.${$size}.input`, 'input', {
      withCrop: true,
    })}
  ${({$size}) => getPaddingPreset(`textInput.${$size}.input`, 'input')}
  ${({$size}) => getSpacingStack(`textInput.${$size}.input`, 'input')}
  ${({$size}) => getSpacingInline(`textInput.${$size}.input`, 'input')} 
  min-height: ${({$size}) => getMinHeight(`textInput.${$size}.input`, 'input')} 
`;

export const StyledLabel = styled.label<InputContainer>`
    display: block;
    ${({$size}) => getStylePreset(`textInput.${$size}.label`, 'label')}
    ${({$size}) =>
      getTypographyPreset(`textInput.${$size}.label`, 'label', {
        withCrop: true,
      })}
    ${({$size}) => getSpacingStack(`textInput.${$size}.label`, 'label')}
    ${({$size}) => getSpacingInline(`textInput.${$size}.label`, 'label')};
 `;

export const StyledAssistiveText = styled(TextBlock)<
  Omit<TextBlockProps, 'overrides'> & InputContainer
>`
  ${({$size}) =>
    getStylePreset(`textInput.${$size}.assistiveText`, 'assistiveText')}
  ${({disabled}) =>
    getStylePresetFromTheme('textInputAssistiveText', 'stylePreset', {
      isDisabled: disabled,
    })}
  ${({$size}) =>
    getTypographyPreset(`textInput.${$size}.assistiveText`, 'assistiveText', {
      withCrop: true,
    })}
`;
