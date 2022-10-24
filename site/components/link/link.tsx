import React, {useEffect} from 'react';
import LinkNext from 'next/link';
import {LinkStandalone, LinkInline} from 'newskit';
import {LinkProps} from './types';
import {
  childIsString,
  deepMap,
} from '../../../src/utils/react-children-utilities';

let linkLabel: React.ReactNode | string;

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  type = 'inline',
  eventContext,
  eventOriginator,
  ...rest
}) => {
  useEffect(() => {
    // This is traversing the children of the Link component
    // to find the string label which is used for tracking
    deepMap(children, child => {
      if (childIsString(child)) {
        linkLabel = child;
      }
      return child;
    });
  }, [children]);

  return (
    <>
      {type === 'standalone' && (
        <LinkNext href={href} passHref>
          <LinkStandalone
            href={href}
            eventContext={{value: linkLabel}}
            {...rest}
          >
            {children}
          </LinkStandalone>
        </LinkNext>
      )}

      {type === 'inline' && (
        <LinkNext href={href} passHref>
          <LinkInline href={href} eventContext={{value: linkLabel}} {...rest}>
            {children}
          </LinkInline>
        </LinkNext>
      )}
    </>
  );
};

Link.displayName = 'Link';
