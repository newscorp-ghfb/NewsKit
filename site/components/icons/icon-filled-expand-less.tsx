import React from 'react';
import {Svg, SvgProps, toNewsKitIcon, withDefaultProps} from 'newskit';

const ExpandLess: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 24 24" height="24px" width="24px">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
  </Svg>
);

export const IconExpandLess = withDefaultProps(toNewsKitIcon(ExpandLess), {});

IconExpandLess.displayName = 'IconExpandLess';
