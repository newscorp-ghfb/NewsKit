import React from 'react';
import {MQ} from '../../../utils';

export type AudioPlayerTimeFormatFn = ({
  currentTime,
  duration,
}: {
  currentTime: number;
  duration: number;
}) => string;

export type AudioPlayerTimeDisplayProps = {
  format?: AudioPlayerTimeFormatFn;
  overrides?: {
    typographyPreset?: MQ<string>;
    stylePreset?: MQ<string>;
  };
} & React.HTMLAttributes<HTMLSpanElement>;
