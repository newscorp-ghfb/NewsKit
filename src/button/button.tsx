import React from 'react';
import {
  css,
  styled,
  getColorFromTheme,
  getAnimationFromTheme,
  getTypePresetFromTheme,
} from '../utils/style';
import {ButtonProps, ButtonShape, ButtonSize} from './types';

const ButtonElement = styled.button<ButtonProps>`
  position: relative;
  width: auto;
  border: none;
  outline: none;
  appearance: none;
  color: ${getColorFromTheme('buttonText')};
  transition-property: background-color;
  transition-duration: ${getAnimationFromTheme('animationDuration020')};
  transition-timing-function: ${getAnimationFromTheme('animationEaseOut')};
  background-color: ${getColorFromTheme('buttonFill')};
  cursor: pointer;

  ${({$size = ButtonSize.Small, theme}) => {
    const defaultStyle = css`
      ${getTypePresetFromTheme('button010')({theme})}
      padding: 0 ${theme.sizing.sizing020};
      height: ${theme.sizing.sizing060};
      /* Extend touchpoint area */
      margin: ${theme.sizing.sizing020} 0;
      ::before {
        content: '';
        position: absolute;
        left: 0;
        top: -${theme.sizing.sizing020};
        width: 100%;
        height: ${theme.sizing.sizing080};
      }
    `;

    return {
      [ButtonSize.Small]: defaultStyle,
      [ButtonSize.Medium]: css`
        ${getTypePresetFromTheme('button020')({theme})}
        padding: 0 ${theme.sizing.sizing040};
        height: ${theme.sizing.sizing070};
      `,
      [ButtonSize.Large]: css`
        ${getTypePresetFromTheme('button030')({theme})}
        padding: 0 ${theme.sizing.sizing050};
        height: ${theme.sizing.sizing080};
      `,
    }[$size];
  }}

  border-radius: ${({$shape = ButtonShape.Square, theme}) =>
    ({
      [ButtonShape.Square]: 0,
      [ButtonShape.Rounded]: theme.sizing.sizing020,
    }[$shape])};

  :disabled {
    cursor: not-allowed;
    background-color: ${getColorFromTheme('buttonDisabledFill')};
    color: ${getColorFromTheme('buttonDisabledText')};
  }

  :hover:not(:disabled) {
    background-color: ${getColorFromTheme('interactive010Hover')};
  }

  :focus:not(:disabled) {
    background-color: ${getColorFromTheme('buttonFill')};
    box-shadow: 0 0 0 2px white, 0 0 0 4px ${getColorFromTheme(
      'interactive030',
    )};
  }

  :active:not(:disabled) {
    background-color: ${getColorFromTheme('interactive010Pressed')};
  }
`;

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = props => {
  const {children, icon: Icon, ...restOfProps} = props;

  if (Icon && children) {
    throw new Error('Button with children and Icon is not implemented');
  }

  return (
    <ButtonElement type="button" {...restOfProps} icon={Icon}>
      {(Icon && <Icon />) || children}
    </ButtonElement>
  );
};
