import {
  styled,
  getTypographyPreset,
  getStylePreset,
  MQ,
  getResponsiveSpace,
  getResponsiveSize,
  getResponsiveSpacingStackHorizontal,
  getResponsiveSpacingInlineHorizontal,
} from '../utils/style';
import {TextInputProps, TextInputSize} from './types';
import {TextBlock, TextBlockProps} from '../text-block';
import {Block, BlockProps} from '../block';

export const StyledTextInputContainer = styled.div<TextInputProps>`
  ${getResponsiveSize('width', 'textInput', '', 'width')}
`;

interface StyledTextInputProps
  extends Pick<TextInputProps, 'overrides' | 'disabled' | 'icon'> {
  $size: TextInputSize;
  stylePreset?: MQ<string>;
  id?: string;
  invalid?: boolean;
  valid?: boolean;
  role?: string;
  dataTestId?: string;
  hasIcon?: boolean;
}

export const InputIconContainer = styled.div`
  position: relative;
`;

export const IconContainer = styled.span<StyledTextInputProps>`
  display: flex;
  position: absolute;
  top: 50%;
  transform: translate(0, -65%);
  pointer-events: none;

  ${({valid, invalid, $size, ...rest}) =>
    valid || invalid
      ? getResponsiveSpace(
          'right',
          `textInput.${$size}.input.validationIcon`,
          'input.validationIcon',
          'iconOffset',
        )(rest)
      : ''}

  ${({icon, $size, ...rest}) =>
    icon &&
    getResponsiveSpace(
      'left',
      `textInput.${$size}.input.leadingIcon`,
      'input.leadingIcon',
      'iconOffset',
    )(rest)}
`;

export const StyledInput = styled.input<StyledTextInputProps>`
  & {
    ${({valid, invalid, $size, ...rest}) =>
      valid || invalid
        ? getResponsiveSpace(
            'paddingRight',
            `textInput.${$size}.input.validationIcon`,
            'input.validationIcon',
            'spaceInset',
          )(rest)
        : ''}
    ${({hasIcon, $size, ...rest}) =>
      hasIcon
        ? getResponsiveSpace(
            'paddingLeft',
            `textInput.${$size}.input.leadingIcon`,
            'input.leadingIcon',
            'spaceInset',
          )(rest)
        : ''}
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
  
  ${({$size}) =>
    getResponsiveSpace(
      'padding',
      `textInput.${$size}.input`,
      'input',
      'spaceInset',
    )}
  ${({$size}) =>
    getResponsiveSpacingStackHorizontal(`textInput.${$size}.input`, 'input')}
  ${({$size}) =>
    getResponsiveSpacingInlineHorizontal(`textInput.${$size}.input`, 'input')}
  ${({$size}) =>
    getResponsiveSize(
      'minHeight',
      `textInput.${$size}.input`,
      'input',
      'minHeight',
    )}
`;

export const StyledLabel = styled.label<StyledTextInputProps>`
  display: block;
  ${({$size}) => getStylePreset(`textInput.${$size}.label`, 'label')}
  ${({$size}) =>
    getTypographyPreset(`textInput.${$size}.label`, 'label', {
      withCrop: true,
    })}
    ${({$size}) =>
    getResponsiveSpacingStackHorizontal(`textInput.${$size}.label`, 'label')}
    ${({$size}) =>
    getResponsiveSpacingInlineHorizontal(`textInput.${$size}.label`, 'label')}
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
  ${({$size}) =>
    getResponsiveSize(
      'minHeight',
      `textInput.${$size}.assistiveText`,
      'assistiveText',
      'minHeight',
    )};
`;
