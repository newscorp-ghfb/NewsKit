import React from 'react';
import {ButtonProps, ButtonSizing, ButtonSize} from './types';
import {BaseButton} from './base-button';

const buttonStylePresetDefault = 'buttonSolidPrimary';
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
    paddingX: 'sizing030',
    paddingY: 'sizing040',
  },
  [ButtonSize.Large]: {
    paddingX: 'sizing040',
    paddingY: 'sizing050',
  },
};

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({children, $size = ButtonSize.Small, ...restOfProps}) => (
  <BaseButton
    $stylePreset="buttonSolidPrimary"
    $size={$size}
    {...buttonSizing[$size]}
    {...restOfProps}
  >
    {children}
  </BaseButton>
);
