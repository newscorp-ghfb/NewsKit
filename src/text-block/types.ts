import React from 'react';
import {LogicalProps} from '../utils/logical-properties';
import {MQ} from '../utils/style';

export interface TextBlockProps
  extends React.HTMLAttributes<HTMLElement>,
    LogicalProps {
  children?: React.ReactNode;
  typographyPreset?: MQ<string>;
  stylePreset?: MQ<string>;
  noCrop?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
}
