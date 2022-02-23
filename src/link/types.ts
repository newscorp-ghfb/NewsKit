import {MQ} from '../utils/style';
import {EventData} from '../instrumentation';
import {LogicalProps} from '../utils/logical-properties';
import {TransitionToken} from '../theme/types';

export interface BaseLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    EventData {
  // href is optional on AnchorHTMLAttributes, here we make it required.
  href: string;
}

interface LinkOverrides extends LogicalProps {
  stylePreset?: MQ<string>;
  transitionPreset?: TransitionToken | TransitionToken[];
  typographyPreset?: MQ<string>;
  /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `marginInline` instead.
   */
  spaceInline?: MQ<string>;
  externalIcon?: {
    size?: string;
  };
}

export interface InternalLinkProps extends BaseLinkProps {
  external?: boolean;
  overrides?: LinkOverrides;
  noCrop?: boolean;
}

export interface LinkProps extends Omit<InternalLinkProps, 'noCrop'> {}
