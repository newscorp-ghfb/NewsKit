import {
  getTypographyPreset,
  styled,
  getResponsiveSize,
  getStylePreset,
} from '../utils/style';
import {TextAreaProps} from './types';
import {logicalProps} from '../utils/logical-properties';

type StyledTextAreaProps = Omit<TextAreaProps, 'size'> & {
  $size: TextAreaProps['size'];
  placeholderColor?: string;
};

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  box-sizing: border-box;

  cursor: ${({disabled}) => (disabled ? 'not-allowed' : 'default')};

  ${({$size}) => getResponsiveSize('width', `textArea.${$size}`, '', 'width')}
  ${({$size}) => getResponsiveSize('height', `textArea.${$size}`, '', 'height')}
  ${({$size}) =>
    getResponsiveSize('maxWidth', `textArea.${$size}`, '', 'maxWidth')}
  ${({$size}) =>
    getResponsiveSize('maxHeight', `textArea.${$size}`, '', 'maxHeight')}
  ${({$size}) =>
    getResponsiveSize('minHeight', `textArea.${$size}`, '', 'minHeight')}

  ${({$size, state}) =>
    getStylePreset(`textArea.${$size}`, '', {
      isInvalid: state === 'invalid',
      isDisabled: state === 'disabled',
      isValid: state === 'valid',
      omitStates: ['valid:hover', 'invalid'],
    })}

  

  ${({$size}) =>
    getTypographyPreset(`textArea.${$size}`, '', {
      withCrop: true,
    })}

    ${({$size}) => logicalProps(`textArea.${$size}`)};

  ::placeholder {
    color: ${({placeholderColor}) => placeholderColor && placeholderColor};
  }
`;
