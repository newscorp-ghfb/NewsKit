import React from 'react';
import {getTrackBackground, Direction} from 'react-range';
import {SliderProps} from './types';
import {ThemeProp} from '../utils/style';

export const renderLabel = (Label: string | React.ComponentType) => {
  if (typeof Label === 'string') {
    return Label;
  }
  return <Label />;
};

export const getTrackBackgroundStyle = ({
  theme: {colors},
  values,
  min,
  max,
  vertical,
}: SliderProps & ThemeProp) => ({
  background: getTrackBackground({
    values,
    colors:
      values.length > 1
        ? Array.from({length: values.length + 1}, (v, i) =>
            i % 2 ? colors.interactive010 : colors.interface030,
          )
        : [colors.interactive010, colors.interface030],
    min,
    max,
    direction: vertical ? Direction.Up : undefined,
  }),
});
