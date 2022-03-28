import React from 'react';
import {MQ} from '../../../utils';

export type FormatFn = ({
  currentTime,
  duration,
}: {
  currentTime: number;
  duration: number;
}) => string;
export type StyledLabelProps = {
  format?: FormatFn;
  overrides?: {
    typographyPreset?: MQ<string>;
    stylePreset?: MQ<string>;
  };
} & React.HTMLAttributes<HTMLSpanElement>;
