import {MQ} from '../utils/style';
import {EventData} from '../instrumentation';
import {TransitionToken} from '../theme/types';

export interface BaseLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    EventData {
  // href is optional on AnchorHTMLAttributes, here we make it required.
  href: string;
}

export interface InternalLinkProps extends BaseLinkProps {
  external?: boolean;
  overrides?: {
    stylePreset?: MQ<string>;
    transitionPreset?: TransitionToken | TransitionToken[];
    typographyPreset?: MQ<string>;
    spaceInline?: MQ<string>;
    externalIcon?: {
      size?: string;
    };
  };
  noCrop?: boolean;
}

export interface LinkProps extends Omit<InternalLinkProps, 'noCrop'> {}
