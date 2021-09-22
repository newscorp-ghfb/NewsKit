import {Block, BlockProps} from '../block';
import {
  getResponsiveSize,
  getTypographyPreset,
  getStylePreset,
  getResponsiveSpacingStackHorizontal,
  getResponsiveSpacingInlineHorizontal,
  styled,
  getResponsiveSpace,
} from '../utils/style';
import {
  AssistiveTextProps,
  LabelProps,
  FormInputTextFieldProps,
  TextFieldSize,
} from './types';

import {TextBlockProps} from '../text-block/types';
import {TextBlock} from '../text-block';

interface StyledTextFieldProps extends FormInputTextFieldProps {
  $size: TextFieldSize;
}

export const StyledAssistiveTextContainer = styled(Block)<
  Omit<BlockProps, 'overrides'> &
    Pick<AssistiveTextProps, 'size' | 'children' | 'overrides'>
>`
  ${({size}) =>
    getResponsiveSize('minHeight', `assistiveText.${size}`, '', 'minHeight')};
`;

export const StyledAssistiveText = styled(TextBlock)<
  Omit<TextBlockProps, 'overrides'> & AssistiveTextProps
>`
  ${({size, state}) =>
    getStylePreset(`assistiveText.${size}`, '', {
      isInvalid: state === 'invalid',
      isDisabled: state === 'disabled',
      isValid: state === 'valid',
    })}
  ${({size}) =>
    getTypographyPreset(`assistiveText.${size}`, '', {
      withCrop: true,
    })}
`;

export const StyledLabel = styled.label<LabelProps>`
  display: block;
  ${({size, state}) =>
    getStylePreset(`label.${size}`, '', {
      isInvalid: state === 'invalid',
      isDisabled: state === 'disabled',
      isValid: state === 'valid',
    })}
  ${({size}) =>
    getTypographyPreset(`label.${size}`, '', {
      withCrop: true,
    })}
    ${({size}) => getResponsiveSpacingStackHorizontal(`label.${size}`, '')}
    ${({size}) => getResponsiveSpacingInlineHorizontal(`label.${size}`, '')}
`;

export const StyledInputContainer = styled.div<
  FormInputTextFieldProps & {
    focused?: boolean;
  }
>`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  ${({size}) => getResponsiveSpacingStackHorizontal(`textField.${size}`, '')}

  ${({size, focused, state}) =>
    getStylePreset(`textField.${size}`, '', {
      isFocused: focused,
      isInvalid: state === 'invalid',
      isDisabled: state === 'disabled',
      isValid: state === 'valid',
    })}

    ${({size}) =>
    getResponsiveSize('minHeight', `textField.${size}`, '', 'minHeight')}
`;
export const StyledEnhancer = styled.span<
  FormInputTextFieldProps & {
    valid?: boolean;
    invalid?: boolean;
    position?: 'startEnhancer' | 'endEnhancer';
    size?: TextFieldSize;
  }
>`
  align-self: center;

  display: flex;
  align-items: center;
  ${({size, position}) =>
    getResponsiveSpace(
      position === 'startEnhancer' ? 'marginLeft' : 'marginRight',
      `textField.${size}.${position}.spaceInline`,
      position as string,
      'spaceInline',
    )},
`;

export const StyledInput = styled.input<StyledTextFieldProps>`
  outline: none;
  width: 100%;
  cursor: ${({disabled}) => (disabled ? 'not-allowed' : 'default')};
  border: none;
  background: none;
  ${({$size}) =>
    getResponsiveSpace('padding', `textField.${$size}`, '', 'spaceInset')}
  ${({$size}) =>
    getTypographyPreset(`textField.${$size}`, '', {
      withCrop: true,
    })}
`;
