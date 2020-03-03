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
import {CircularProgressIndicator} from '../progress-indicator';

interface ButtonSizeOption {
  minHeight: SizingKeys;
  typePreset: TypePresetKeys;
  iconSize: IconSizeKeys;
}

const buttonSizeStyleTokens: Record<ButtonSize, ButtonSizeOption> = {
  [ButtonSize.Large]: {
    minHeight: 'sizing040',
    typePreset: 'button030',
    iconSize: 'iconSize030',
  },
  [ButtonSize.Medium]: {
    minHeight: 'sizing030',
    typePreset: 'button020',
    iconSize: 'iconSize020',
  },
  [ButtonSize.Small]: {
    minHeight: 'sizing020',
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
  cursor: ${({isLoading}) => (isLoading ? 'disabled' : 'pointer')};
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
    isLoading = false,
    $width,
    $height,
  }) => {
    const {minHeight, typePreset, iconSize} = buttonSizeStyleTokens[$size];
    const commonStyles = css`
        ${getStylePresetFromTheme<StylePresetAndTheme>(
          $stylePreset,
          '$stylePreset',
          {
            isLoading,
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
> = ({children, isLoading, $size = ButtonSize.Small, ...restOfProps}) => {
  const {iconSize} = buttonSizeStyleTokens[$size];
  return (
    <ButtonElement
      type="button"
      $size={$size}
      isLoading={isLoading}
      {...restOfProps}
    >
      <Stack
        flow={Flow.HorizontalCenter}
        stackDistribution={StackDistribution.Center}
        space="sizing020"
      >
        {isLoading ? (
          <CircularProgressIndicator hideTrack $size={iconSize} />
        ) : (
          children
        )}
      </Stack>
    </ButtonElement>
  );
};
