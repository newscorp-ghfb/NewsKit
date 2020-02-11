import React from 'react';
import {getTrackBackground, Direction} from 'react-range';
import {Theme} from '../themes/creator';
import {trackStylePresetDefault, indicatorStylePresetDefault} from './styled';
import {getSingleStylePreset} from '../utils/style-preset';

export const renderLabel = (Label: string | React.ComponentType) => {
  if (typeof Label === 'string') {
    return Label;
  }
  return <Label />;
};

export const getFillColor = (theme: Theme, fallback: string, token?: string) =>
  getSingleStylePreset(theme, 'base', 'backgroundColor', fallback, token);

export const getTrackBackgroundStyle = (
  theme: Theme,
  trackStylePreset: string | undefined,
  indicatorStylePreset: string | undefined,
  values: number[],
  min: number,
  max: number,
  vertical: boolean | undefined,
) => {
  const trackFill = getSingleStylePreset(
    theme,
    'base',
    'backgroundColor',
    trackStylePresetDefault,
    trackStylePreset,
  );
  const indicatorFill = getSingleStylePreset(
    theme,
    'base',
    'backgroundColor',
    indicatorStylePresetDefault,
    indicatorStylePreset,
  );
  return {
    background: getTrackBackground({
      values,
      colors:
        values.length > 1
          ? Array.from({length: values.length + 1}, (v, i) =>
              i % 2 ? indicatorFill : trackFill,
            )
          : [indicatorFill, trackFill],
      min,
      max,
      direction: vertical ? Direction.Up : undefined,
    }),
  };
};
