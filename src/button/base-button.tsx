import React from 'react';
import {
  css,
  styled,
  getAnimationFromTheme,
  getTypePresetFromTheme,
  ThemeProp,
} from '../utils/style';
import {ButtonProps, ButtonSize, ButtonSizing} from './types';
import {getStylePresetFromTheme} from '../utils/style-preset';
import {SizingKeys, TypePresetKeys, IconSizeKeys} from '../themes';
import {PaddingPresetKeys} from '../themes/mappers/spacing';
import {Stack} from '../stack/stack';
import {Flow, StackDistribution} from '../stack/types';

const buttonSizeStyleTokens: Record<
  ButtonSize,
  {
    minHeight: PaddingPresetKeys;
    borderRadiusSize: SizingKeys;
    typePreset: TypePresetKeys;
    iconSize: IconSizeKeys;
  }
> = {
  [ButtonSize.Large]: {
    minHeight: 'spaceInset040',
    borderRadiusSize: 'sizing020',
    typePreset: 'button030',
    iconSize: 'iconSize020',
  },
  [ButtonSize.Medium]: {
    minHeight: 'spaceInset030',
    borderRadiusSize: 'sizing020',
    typePreset: 'button020',
    iconSize: 'iconSize020',
  },
  [ButtonSize.Small]: {
    minHeight: 'spaceInset020',
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

  &:disabled {
    cursor: not-allowed;
  }

  ${({$size = ButtonSize.Small, theme, paddingX, paddingY, $stylePreset}) => {
    const {
      minHeight,
      borderRadiusSize,
      typePreset,
      iconSize,
    } = buttonSizeStyleTokens[$size];
    const commonStyles = css`
        ${getStylePresetFromTheme<
          Pick<ButtonProps, '$stylePreset'> & ThemeProp
        >('interactive010', '$stylePreset', {
          borderRadiusSize,
        })({
          theme,
          $stylePreset,
        })} 
        min-height: ${theme.sizing[minHeight]};
        ${getTypePresetFromTheme(typePreset)({theme})}
        padding: ${theme.sizing[paddingX]} ${theme.sizing[paddingY]};

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
