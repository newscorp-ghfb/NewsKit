import React from 'react';
import NextLink from 'next/link';
import {LinkStandalone, LinkInline} from 'newskit';
import {LinkProps} from './types';
import {
  childIsString,
  deepMap,
} from '../../../src/utils/react-children-utilities';

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  type = 'inline',
  eventContext,
  eventOriginator,
  ...rest
}) => {
  // This is traversing the children of the Link component
  // to find the string label which is used for tracking
  let linkLabel: React.ReactNode | string;
  deepMap(children, child => {
    if (childIsString(child)) {
      linkLabel = child;
    }
    return child;
  });

  return (
    <>
      {type === 'standalone' && (
        <NextLink legacyBehavior href={href} passHref>
          <LinkStandalone
            href={href}
            eventContext={{value: linkLabel}}
            {...rest}
          >
            {children}
          </LinkStandalone>
        </NextLink>
      )}

      {type === 'inline' && (
        <NextLink legacyBehavior href={href} passHref>
          <LinkInline href={href} eventContext={{value: linkLabel}} {...rest}>
            {children}
          </LinkInline>
        </NextLink>
      )}
    </>
  );
};

Link.displayName = 'Link';
