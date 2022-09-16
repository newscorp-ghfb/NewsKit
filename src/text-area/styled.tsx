import {
  getTypographyPreset,
  styled,
  getResponsiveSize,
  getStylePreset,
} from '../utils/style';
import {TextAreaProps} from './types';
import {logicalProps} from '../utils/logical-properties';
import {StylePresetStates} from '../theme/types';

/**
 * there is an issue with getStylePreset when is used on input/textarea component,
 * it adds component:valid:hover style by default which is the browser default behaviour
 * that's why valid:hover and invalid:hover are removed from style-preset when the component don't need these states.
 */
const getOmittedStates = (
  state: TextAreaProps['state'],
): StylePresetStates[] => {
  if (state !== 'valid' && state !== 'invalid')
    return ['valid:hover', 'invalid:hover'];
  return [];
};

type StyledTextAreaProps = Omit<TextAreaProps, 'size'> & {
  $size: TextAreaProps['size'];
  placeholderColor?: string;
};

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  box-sizing: border-box;

  ${({disabled}) => ({cursor: disabled ? 'not-allowed' : 'default'})};
  ${({resize}) => ({resize})}

  ${({$size}) => getResponsiveSize('width', `textArea.${$size}`, '', 'width')}
  ${({$size}) => getResponsiveSize('height', `textArea.${$size}`, '', 'height')}
  ${({$size}) =>
    getResponsiveSize('maxWidth', `textArea.${$size}`, '', 'maxWidth')}
  ${({$size}) =>
    getResponsiveSize('maxHeight', `textArea.${$size}`, '', 'maxHeight')}
  ${({$size}) =>
    getResponsiveSize('minHeight', `textArea.${$size}`, '', 'minHeight')}
  ${({$size}) =>
    getResponsiveSize('minWidth', `textArea.${$size}`, '', 'minWidth')}

  ${({$size, state}) =>
    getStylePreset(`textArea.${$size}`, '', {
      isInvalid: state === 'invalid',
      isDisabled: state === 'disabled',
      isValid: state === 'valid',
      omitStates: getOmittedStates(state),
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
