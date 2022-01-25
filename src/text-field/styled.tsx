import {getTypographyPreset, styled, getResponsiveSpace} from '../utils/style';
import {FormInputTextFieldProps, TextFieldSize} from './types';

interface StyledTextFieldProps extends FormInputTextFieldProps {
  $size: TextFieldSize | 'small' | 'medium' | 'large';
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
  ${({$size}) =>
    getResponsiveSpace('padding', `textField.${$size}`, '', 'spaceInset')}
`;
