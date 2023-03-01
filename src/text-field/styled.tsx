import {getTypographyPreset, styled} from '../utils/style';
import {FormInputTextFieldProps, TextFieldSize} from './types';
import {logicalPaddingProps} from '../utils/logical-properties';

interface StyledTextFieldProps extends FormInputTextFieldProps {
  $size: TextFieldSize;
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
  box-sizing: border-box;
  // make the input to take size of his parent
  align-self: stretch;
  color: currentColor;

  ${({$size}) =>
    getTypographyPreset(`textField.${$size}`, '', {
      withCrop: true,
    })}
  ::placeholder {
    color: ${({placeholderColor}) => placeholderColor && placeholderColor};
  }

  ${({$size}) => logicalPaddingProps(`textField.${$size}`)};
`;
