import React from 'react';
import LinkNext from 'next/link';
import {LinkStandalone, LinkInline} from 'newskit';
import {LinkProps} from './types';

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  type = 'inline',
  ...rest
}) => (
  <>
    {type === 'standalone' && (
      <LinkNext href={href} passHref>
        <LinkStandalone href={href} {...rest}>
          {children}
        </LinkStandalone>
      </LinkNext>
    )}

    {type === 'inline' && (
      <LinkNext href={href} passHref>
        <LinkInline href={href} {...rest}>
          {children}
        </LinkInline>
      </LinkNext>
    )}
  </>
);
