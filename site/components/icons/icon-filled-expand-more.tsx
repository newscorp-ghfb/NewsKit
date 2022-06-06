import React from 'react';
import {Svg, SvgProps, toNewsKitIcon, withDefaultProps} from 'newskit';

const ExpandMore: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 24 24" height="24px" width="24px">
    <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
  </Svg>
);

export const IconExpandMore = withDefaultProps(toNewsKitIcon(ExpandMore), {});

IconExpandMore.displayName = 'IconExpandMore';
