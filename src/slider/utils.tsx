import React from 'react';
import {getTrackBackground, Direction} from 'react-range';
import {SliderProps} from './types';
import {ThemeProp} from '../utils/style';
import {Theme} from '../themes/creator';
import {trackStylePresetDefault, indicatorStylePresetDefault} from './styled';

export const renderLabel = (Label: string | React.ComponentType) => {
  if (typeof Label === 'string') {
    return Label;
  }
  return <Label />;
};

export const getFillColor = (
  {stylePresets}: Theme,
  fallback: string,
  token?: string,
) => {
  const preset = (token && stylePresets[token]) || stylePresets[fallback];
  return (preset.base || {}).backgroundColor || '';
};

export const getTrackBackgroundStyle = ({
  theme,
  values,
  min,
  max,
  vertical,
  $trackStylePreset,
  $indicatorStylePreset,
}: SliderProps & ThemeProp) => {
  const trackFill = getFillColor(
    theme,
    trackStylePresetDefault,
    $trackStylePreset,
  );
  const indicatorFill = getFillColor(
    theme,
    indicatorStylePresetDefault,
    $indicatorStylePreset,
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
