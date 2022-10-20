import React from 'react';
import LinkNext from 'next/link';
import {LinkStandalone, LinkInline} from 'newskit';
import {LinkProps} from './types';

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  type = 'inline',
  eventContext = String(children),
  eventOriginator,
  ...rest
}) => (
  <>
    {type === 'standalone' && (
      <LinkNext href={href} passHref>
        <LinkStandalone
          href={href}
          eventContext={{value: eventContext}}
          {...rest}
        >
          {children}
        </LinkStandalone>
      </LinkNext>
    )}

    {type === 'inline' && (
      <LinkNext href={href} passHref>
        <LinkInline href={href} eventContext={{value: eventContext}} {...rest}>
          {children}
        </LinkInline>
      </LinkNext>
    )}
  </>
);

Link.displayName = 'Link';
