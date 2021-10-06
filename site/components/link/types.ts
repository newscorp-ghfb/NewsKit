import {MQ, EventContext} from 'newskit';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  type?: 'standalone' | 'inline';
  eventContext?: EventContext;
  external?: boolean;
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    space?: MQ<string>;
    externalIcon?: {
      size?: string;
    };
  };
}
