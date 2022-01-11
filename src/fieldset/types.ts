import React from 'react';
import {Override} from '../utils/overrides';
import {MQ} from '../utils/style';

export interface LegendProps {
  size?: 'small' | 'medium' | 'large';
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    spaceStack?: MQ<string>;
  };
}

export interface FieldsetProps
  extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend?: React.ReactNode;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  overrides?: {
    stylePreset?: MQ<string>;
    spaceInset?: MQ<string>;
    legend?: Override<Pick<LegendProps, 'size' | 'overrides'>>;
  };
}
