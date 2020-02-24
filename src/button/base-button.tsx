import React from 'react';
import {
  css,
  styled,
  getAnimationFromTheme,
  getTypePresetFromTheme,
} from '../utils/style';
import {
  ButtonProps,
  ButtonSize,
  ButtonSizing,
  StylePresetAndTheme,
} from './types';
import {getStylePresetFromTheme} from '../utils/style-preset';
import {SizingKeys, TypePresetKeys, IconSizeKeys} from '../themes';
import {Stack} from '../stack/stack';
import {Flow, StackDistribution} from '../stack/types';

const buttonSizeStyleTokens: Record<
  ButtonSize,
  {
    minHeight: SizingKeys;
    borderRadiusSize: SizingKeys;
    typePreset: TypePresetKeys;
    iconSize: IconSizeKeys;
  }
> = {
  [ButtonSize.Large]: {
    minHeight: 'sizing040',
    borderRadiusSize: 'sizing020',
    typePreset: 'button030',
    iconSize: 'iconSize020',
  },
  [ButtonSize.Medium]: {
    minHeight: 'sizing030',
    borderRadiusSize: 'sizing020',
    typePreset: 'button020',
    iconSize: 'iconSize020',
  },
  [ButtonSize.Small]: {
    minHeight: 'sizing020',
    borderRadiusSize: 'sizing020',
    typePreset: 'button010',
    iconSize: 'iconSize010',
  },
};
const ButtonElement = styled.button<ButtonProps & ButtonSizing>`
  display: inline-block;
  position: relative;
  width: auto;
  border: none;
  outline: none;
  appearance: none;
  overflow: hidden;
  transition-property: background-color;
  transition-duration: ${getAnimationFromTheme('animationDuration020')};
  transition-timing-function: ${getAnimationFromTheme('animationEaseOut')};
  cursor: pointer;
  box-sizing: border-box;

  &:disabled {
    cursor: not-allowed;
  }

  ${({
    $size = ButtonSize.Small,
    theme,
    paddingX,
    paddingY,
    $stylePreset,
    $width,
    $height,
  }) => {
    const {
      minHeight,
      borderRadiusSize,
      typePreset,
      iconSize,
    } = buttonSizeStyleTokens[$size];
    const commonStyles = css`
        ${getStylePresetFromTheme<StylePresetAndTheme>(
          $stylePreset,
          '$stylePreset',
          {
            borderRadiusSize,
          },
        )({
          theme,
          $stylePreset,
        })} 
        min-height: ${theme.sizing[minHeight]};
        ${getTypePresetFromTheme(typePreset)({theme})}
        padding: ${theme.sizing[paddingX]} ${theme.sizing[paddingY]};
        width: ${$width && theme.sizing[$width]};
        height: ${$height && theme.sizing[$height]};
        

    svg {
      width: ${theme.sizing[iconSize]};
      height: ${theme.sizing[iconSize]};
    }
        
    ${$size === ButtonSize.Small &&
      css`
      /* Extend touchpoint area */
      margin: ${theme.sizing.sizing020} 0;
      ::before {
      content: '';
      position: absolute;
      left: 0;
      top: -${theme.sizing.sizing020};
      width: 100%;
      height: ${theme.sizing.sizing080};
    `}`;
    return commonStyles;
  }}
`;

export const BaseButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps & ButtonSizing
> = ({children, ...restOfProps}) => (
  <ButtonElement type="button" {...restOfProps}>
    <Stack
      flow={Flow.HorizontalCenter}
      stackDistribution={StackDistribution.Center}
      space="sizing020"
    >
      {children}
    </Stack>
  </ButtonElement>
);
