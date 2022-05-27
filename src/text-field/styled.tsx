import {logicalPaddingProps} from '../utils/logical-properties';
import {getTypographyPreset, styled, getResponsiveSpace} from '../utils/style';
import {FormInputTextFieldProps, TextFieldSizeType} from './types';

interface StyledTextFieldProps extends FormInputTextFieldProps {
  $size: TextFieldSizeType;
}

export const StyledInput = styled.input<
  StyledTextFieldProps & {
    placeholderColor?: string;
  }
>`
  outline: none;
  width: 100%;
  cursor: ${({disabled}) => (disabled ? 'not-allowed' : 'default')};
  border: none;
  background: none;
  ${({$size}) =>
    getTypographyPreset(`textField.${$size}`, '', {
      withCrop: true,
    })}
  ::placeholder {
    color: ${({placeholderColor}) => placeholderColor && placeholderColor};
  }
  // LOGICAL_PROPS_TO_DO: remove the below func when logical props are used in defaults
  ${({$size}) =>
    getResponsiveSpace('padding', `textField.${$size}`, '', 'spaceInset')}

  ${({$size}) => logicalPaddingProps(`textField.${$size}`)}
`;
