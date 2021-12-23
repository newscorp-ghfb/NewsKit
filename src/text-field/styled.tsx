import {getTypographyPreset, styled, getResponsiveSpace} from '../utils/style';
import {FormInputTextFieldProps, TextFieldSize} from './types';

interface StyledTextFieldProps extends FormInputTextFieldProps {
  $size: TextFieldSize;
}

export const StyledInput = styled.input<StyledTextFieldProps>`
  outline: none;
  width: 100%;
  cursor: ${({disabled}) => (disabled ? 'not-allowed' : 'default')};
  border: none;
  background: none;
  ${({$size}) =>
    getTypographyPreset(`textField.${$size}`, '', {
      withCrop: true,
    })}
  ${({$size}) =>
    getResponsiveSpace('padding', `textField.${$size}`, '', 'spaceInset')}
`;
