import {EventContext, LinkProps as NewskitLinkProps} from 'newskit';

export interface LinkProps extends NewskitLinkProps {
  href: string;
  type?: 'standalone' | 'inline';
  eventContext?: EventContext;
  external?: boolean;
  // overrides?: {
  //   stylePreset?: MQ<string>;
  //   typographyPreset?: MQ<string>;
  //   space?: MQ<string>;
  //   externalIcon?: {
  //     size?: string;
  //   };
  // };
}
