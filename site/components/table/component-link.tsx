import {Link, LinkProps} from 'newskit';
import React from 'react';

export const ComponentLink: React.FC<LinkProps> = props => (
  <Link overrides={{typographyPreset: 'utilityButton020'}} {...props} />
);
