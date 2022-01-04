import React from 'react';
import LinkNext from 'next/link';
import {Link as LinkNewskit} from 'newskit';
import {LinkProps} from './types';

export const Link: React.FC<LinkProps> = ({
  href,
  $noUnderline,
  children,
  ...rest
}) => (
  <LinkNext href={href}>
    <LinkNewskit href={href} $noUnderline={$noUnderline} {...rest}>
      {children}
    </LinkNewskit>
  </LinkNext>
);
