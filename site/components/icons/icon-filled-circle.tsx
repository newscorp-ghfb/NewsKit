import React from 'react';
import {Svg, SvgProps, toNewsKitIcon, withDefaultProps} from 'newskit';

const FilledCircle: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="12" />
  </Svg>
);

export const IconFilledCircle = withDefaultProps(
  toNewsKitIcon(FilledCircle),
  {},
);

IconFilledCircle.displayName = 'IconFilledCircle';
