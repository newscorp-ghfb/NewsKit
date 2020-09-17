import React from 'react';
import {getTrackBackground, Direction} from 'react-range';
import {Theme} from '../theme';
import {getSingleStylePreset} from '../utils/style';

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
  sliderTrackToken: string,
  indicatorFillToken: string,
  values: number[],
  min: number,
  max: number,
  vertical: boolean | undefined,
) => {
  const trackFill = getSingleStylePreset(
    theme,
    'base',
    'backgroundColor',
    sliderTrackToken,
  );

  const indicatorFill = getSingleStylePreset(
    theme,
    'base',
    'backgroundColor',
    indicatorFillToken,
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
