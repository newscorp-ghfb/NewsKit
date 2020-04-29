import React from 'react';
import {
  css,
  styled,
  getAnimationFromTheme,
  getTypePresetFromTheme,
} from '../utils/style';
import {
  ButtonCommonProps,
  ButtonSize,
  ButtonSizing,
  StylePresetAndTheme,
  StyledButtonSizing,
} from './types';
import {getStylePresetFromTheme} from '../utils/style-preset';
import {Stack} from '../stack/stack';
import {Flow, StackDistribution} from '../stack/types';
import {CircularProgressIndicator} from '../progress-indicator';

const ButtonElement = styled.button<ButtonCommonProps & StyledButtonSizing>`
  display: inline-block;
  position: relative;
  width: auto;
  border: none;
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
    size,
    theme,
    padding,
    stylePreset,
    isLoading = false,
    $width: width,
    $height: height,
    minHeight,
    typePreset,
    iconSize,
  }) => {
    const commonStyles = css`
        ${getStylePresetFromTheme<StylePresetAndTheme>(
          stylePreset,
          'stylePreset',
          {
            isLoading,
          },
        )({
          theme,
          stylePreset,
        })}
        min-height: ${theme.sizing[minHeight]};
        ${getTypePresetFromTheme(typePreset)({theme})}
        padding: ${theme.sizing[padding]}};
        width: ${width && theme.sizing[width]};
        height: ${height && theme.sizing[height]};


    svg {
      width: ${theme.sizing[iconSize]};
      height: ${theme.sizing[iconSize]};
    }

    ${size === ButtonSize.Small &&
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
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    ButtonCommonProps &
    ButtonSizing
> = ({
  children,
  isLoading,
  iconSize,
  size = ButtonSize.Small,
  height,
  width,
  ...restOfProps
}) => (
  <ButtonElement
    type="button"
    size={size}
    isLoading={isLoading}
    iconSize={iconSize}
    $height={height}
    $width={width}
    {...restOfProps}
  >
    <Stack
      flow={Flow.HorizontalCenter}
      stackDistribution={StackDistribution.Center}
      space="sizing020"
    >
      {isLoading ? (
        <CircularProgressIndicator hideTrack size={iconSize} />
      ) : (
        children
      )}
    </Stack>
  </ButtonElement>
);
