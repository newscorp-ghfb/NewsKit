import React from 'react';
import {LinkProps} from './types';
import {InternalLink} from './internal-link';
import {withLinkTheme} from './utils';

/**
 * @deprecated This component has been deprecated and will be removed in a future release, use LinkStandalone or LinkInline instead;
 */
export const Link = withLinkTheme(
  React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
    <InternalLink {...props} ref={ref} />
  )),
);

export const A = Link;
