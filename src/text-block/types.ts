import React from 'react';
import {LogicalProps} from '../utils/logical-properties';
import {ResponsiveValue} from '../utils/style';

export interface TextBlockProps
  extends React.HTMLAttributes<HTMLElement>,
    LogicalProps {
  typographyPreset?: ResponsiveValue<string>;
  stylePreset?: ResponsiveValue<string>;
  noCrop?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
}
