import React from 'react';
import LinkNext from 'next/link';
import {Link as LinkNewskit} from 'newskit';
import {LinkProps} from './types';

export const Link: React.FC<LinkProps> = ({href, children, ...rest}) => (
  <LinkNext href={href}>
    <LinkNewskit href={href} {...rest}>
      {children}
    </LinkNewskit>
  </LinkNext>
);
