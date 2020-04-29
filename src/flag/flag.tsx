import React from 'react';
import {FlagProps, FlagSize} from './types';
import {SizingKeys, TypePresetKeys} from '../themes';
import {PaddingPresetKeys} from '../themes/mappers/spacing';
import {BaseFlag} from '../base-flag';

const flagSizeStyleTokens: Record<
  FlagSize,
  {
    typePreset: TypePresetKeys;
    minHeight: SizingKeys;
    padding: PaddingPresetKeys;
  }
> = {
  [FlagSize.Large]: {
    typePreset: 'flag020',
    minHeight: 'sizing060',
    padding: 'spaceInset020Squish',
  },
  [FlagSize.Small]: {
    typePreset: 'flag010',
    minHeight: 'sizing050',
    padding: 'spaceInset010Squish',
  },
};

export const Flag: React.FC<FlagProps> = ({
  size = FlagSize.Small,
  spacing,
  ...props
}) => (
  <BaseFlag
    data-testid="flag"
    stylePreset="flagSolid"
    iconSize="iconSize010"
    {...flagSizeStyleTokens[size]}
    padding={spacing || flagSizeStyleTokens[size].padding}
    {...props}
  />
);
