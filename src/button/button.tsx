import React from 'react';
import {
  css,
  styled,
  getAnimationFromTheme,
  getTypePresetFromTheme,
} from '../utils/style';
import {ButtonProps, ButtonSize} from './types';
import {getStylePresetFromTheme} from '../utils/style-preset';
import {SizingKeys, TypePresetKeys} from '../themes';
import {PaddingPresetKeys} from '../themes/mappers/spacing';
import {Stack} from '../stack/stack';
import {Flow, StackDistribution} from '../stack/types';
import * as iconList from '../icons';
import {SvgProps} from '../icons/types';
import {ThemeProp} from '../../dist/utils/style';

const buttonSizeStyleTokens: Record<
  ButtonSize,
  {
    minHeight: PaddingPresetKeys;
    borderRadiusSize: SizingKeys;
    typePreset: TypePresetKeys;
    paddingX: SizingKeys;
    paddingY: SizingKeys;
  }
> = {
  [ButtonSize.Large]: {
    minHeight: 'spaceInset040',
    borderRadiusSize: 'sizing020',
    typePreset: 'button030',
    paddingX: 'sizing040',
    paddingY: 'sizing050',
  },
  [ButtonSize.Medium]: {
    minHeight: 'spaceInset030',
    borderRadiusSize: 'sizing020',
    typePreset: 'button020',
    paddingX: 'sizing030',
    paddingY: 'sizing040',
  },
  [ButtonSize.Small]: {
    minHeight: 'spaceInset020',
    borderRadiusSize: 'sizing020',
    typePreset: 'button010',
    paddingX: 'sizing020',
    paddingY: 'sizing030',
  },
};
const ButtonElement = styled.button<ButtonProps>`
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

  ${({$size = ButtonSize.Small, theme, equalSides, $stylePreset}) => {
    const {
      minHeight,
      borderRadiusSize,
      typePreset,
      paddingX,
      paddingY,
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
        padding: ${theme.sizing[paddingX]} ${
      theme.sizing[equalSides ? paddingX : paddingY]
    };
        
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

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({
  children,
  icon: Icon,
  $size,
  $iconColor = 'buttonFill',
  equalSides = false,
  ...restOfProps
}) => {
  const isIcon = (child: React.ReactElement) =>
    !!Object.values(iconList).find(
      IconItem => child instanceof (IconItem as any).constructor, // eslint-disable-line @typescript-eslint/no-explicit-any
    );
  const renderChildren = React.Children.map(children, child =>
    isIcon(child as React.ReactElement)
      ? React.cloneElement(
          child as React.ReactElement<Pick<SvgProps, '$size' | '$color'>>,
          {
            $size:
              !$size || $size === ButtonSize.Small
                ? 'iconSize010'
                : 'iconSize020',
            $color: $iconColor,
          },
          null,
        )
      : child,
  );
  const setSpacing =
    renderChildren &&
    renderChildren.length > 1 &&
    React.Children.toArray(renderChildren)
      .map(child => isIcon(child as React.ReactElement))
      .find(isIconBoolean => isIconBoolean)
      ? 'sizing020'
      : undefined;

  return (
    <ButtonElement
      type="button"
      $size={$size}
      equalSides={equalSides}
      {...restOfProps}
    >
      <Stack
        flow={Flow.HorizontalCenter}
        stackDistribution={StackDistribution.Center}
        space={setSpacing}
      >
        {renderChildren}
      </Stack>
    </ButtonElement>
  );
};
