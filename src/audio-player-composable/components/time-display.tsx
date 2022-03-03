import React, {useContext} from 'react';
import {SliderProps} from '../..';
import {seekBarAriaValueText} from '../../audio-player/utils';
import { getLabelMargin } from '../../slider/styled';
import {MQ, styled} from '../../utils';
import {AudioPlayerContext} from '../context';

interface StyledLabelProps {
  length?: number;
  format?: object;
  currentTime?: number[];
  overrides?: {
      typographyPreset: MQ<string>;
      stylePreset: MQ<string>;
    };
}
const calculateTime = (secs: number) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${returnedMinutes}:${returnedSeconds}`;
};

const TimeDisplayLabel = styled.label<StyledLabelProps>``;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TimeDisplay = ({format, overrides}: StyledLabelProps) => {
  const {duration, trackPositionArr} = useContext(AudioPlayerContext);
  const currentTime = calculateTime((trackPositionArr as unknown) as number);
  const length = calculateTime((duration as unknown) as number);
  return (
    <TimeDisplayLabel >
      {currentTime} / {length}
    </TimeDisplayLabel>
  );
};
