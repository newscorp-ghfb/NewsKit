import React from 'react';
import {as} from '../utils/component';
import {TagProps, TagSize} from './types';
import {Flag, FlagProps} from '../flag';

const tagSizeStyleTokens: Record<TagSize, Partial<FlagProps>> = {
  [TagSize.Large]: {
    typePreset: 'tag030',
    minHeight: 'sizing070',
    padding: 'spaceInset020Squish',
    iconSize: 'iconSize020',
  },
  [TagSize.Medium]: {
    typePreset: 'tag020',
    minHeight: 'sizing060',
    padding: 'spaceInset020Squish',
    iconSize: 'iconSize010',
  },
  [TagSize.Small]: {
    typePreset: 'tag010',
    minHeight: 'sizing050',
    padding: 'spaceInset010Squish',
    iconSize: 'iconSize010',
  },
};

export const Tag: React.FC<TagProps> = ({
  disabled,
  size = TagSize.Medium,
  href,
  ...props
}) => (
  <Flag
    data-testid="tag"
    stylePreset="tagDefault"
    disabled={disabled}
    href={disabled ? undefined : href}
    {...as(href && !disabled ? 'a' : 'div')}
    {...tagSizeStyleTokens[size]}
    {...props}
  />
);
