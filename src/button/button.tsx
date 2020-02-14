import React from 'react';
import {
  css,
  styled,
  getAnimationFromTheme,
  getTypePresetFromTheme,
} from '../utils/style';
import {ButtonProps, ButtonSize, IconPlacement} from './types';
import {getStylePresetFromTheme} from '../utils/style-preset';
import {SizingKeys, TypePresetKeys, Theme} from '../themes';
import {PaddingPresetKeys} from '../themes/mappers/spacing';
import {Stack} from '../stack/stack';
import {Flow, StackDistribution} from '../stack/types';

const buttonStylePresetDefault = 'interactive010';
const spacing: SizingKeys = 'sizing020';

const getButtonStylePreset = (
  props: ButtonProps & {theme: Theme},
  {
    borderRadiusSize,
    withIconColor,
  }: {borderRadiusSize: SizingKeys; withIconColor?: boolean},
) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getStylePresetFromTheme(buttonStylePresetDefault, '$stylePreset' as any, {
    borderRadiusSize,
    omitStyles: withIconColor ? [] : ['iconColor'],
  })(props);

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

  ${({$size = ButtonSize.Small, icon, theme, $stylePreset}) => {
    const {
      minHeight,
      borderRadiusSize,
      typePreset,
      paddingX,
      paddingY,
    } = buttonSizeStyleTokens[$size];

    const commonStyles = css`
      ${getButtonStylePreset(
        {$stylePreset, theme},
        {borderRadiusSize, withIconColor: !!icon},
      )}
      min-height: ${theme.sizing[minHeight]};
      ${getTypePresetFromTheme(typePreset)({theme})}
      padding: ${theme.sizing[paddingX]} ${theme.sizing[paddingY]};
    `;

    return commonStyles;
  }}

  :disabled {
    cursor: not-allowed;
  }
`;

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({
  children,
  icon: Icon,
  $size,
  $iconColor = 'buttonFill',
  iconPlacement = IconPlacement.Start,
  ...restOfProps
}) => {
  const iconWithProps = Icon && (
    <Icon
      $size={
        !$size || $size === ButtonSize.Small ? 'iconSize010' : 'iconSize020'
      }
      $color={$iconColor}
    />
  );
  const childrenList = [iconWithProps, children];

  return (
    <ButtonElement type="button" $size={$size} {...restOfProps} icon={Icon}>
      {Icon && children ? (
        <Stack
          flow={Flow.HorizontalCenter}
          space={spacing}
          stackDistribution={StackDistribution.Center}
        >
          {iconPlacement === IconPlacement.Start
            ? childrenList
            : childrenList.reverse()}
        </Stack>
      ) : (
        <Stack
          flow={Flow.HorizontalCenter}
          stackDistribution={StackDistribution.Center}
        >
          {(Icon && iconWithProps) || children}
        </Stack>
      )}
    </ButtonElement>
  );
};
