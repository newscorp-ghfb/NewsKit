import React from 'react';
import LinkNext from 'next/link';
import {LinkStandalone as LinkNewskit} from 'newskit';
import {LinkProps} from './types';

export const Link: React.FC<LinkProps> = ({href, children, ...rest}) => (
  <LinkNext href={href} passHref>
    <LinkNewskit href={href} {...rest}>
      {children}
    </LinkNewskit>
  </LinkNext>
);
