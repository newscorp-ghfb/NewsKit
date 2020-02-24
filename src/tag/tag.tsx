import React from 'react';
import {as} from '../utils/component';
import {TagProps, TagSize} from './types';
import {SizingKeys, TypePresetKeys, IconSizeKeys} from '../themes';
import {PaddingPresetKeys} from '../themes/mappers/spacing';
import {BaseFlag} from '../base-flag';

const tagSizeStyleTokens: Record<
  TagSize,
  {
    $typePreset: TypePresetKeys;
    minHeight: SizingKeys;
    borderRadiusSize: SizingKeys;
    padding: PaddingPresetKeys;
    iconSize: IconSizeKeys;
  }
> = {
  [TagSize.Large]: {
    $typePreset: 'tag030',
    minHeight: 'sizing070',
    borderRadiusSize: 'sizing070',
    padding: 'spaceInset020Squish',
    iconSize: 'iconSize020',
  },
  [TagSize.Medium]: {
    $typePreset: 'tag020',
    minHeight: 'sizing060',
    borderRadiusSize: 'sizing060',
    padding: 'spaceInset020Squish',
    iconSize: 'iconSize010',
  },
  [TagSize.Small]: {
    $typePreset: 'tag010',
    minHeight: 'sizing050',
    borderRadiusSize: 'sizing050',
    padding: 'spaceInset010Squish',
    iconSize: 'iconSize010',
  },
};

export const Tag: React.FC<TagProps> = ({
  disabled,
  $size = TagSize.Medium,
  href,
  ...props
}) => (
  <BaseFlag
    isDisabled={disabled}
    href={disabled ? undefined : href}
    $stylePreset="tagPrimary"
    {...as(href && !disabled ? 'a' : 'div')}
    {...tagSizeStyleTokens[$size]}
    {...props}
  />
);
