import {MQ} from '../utils/style';
import {EventData} from '../instrumentation';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    EventData {
  // href is optional on AnchorHTMLAttributes, here we make it required.
  href: string;
  external?: boolean;
  noUnderline?: boolean;
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    spaceInline?: MQ<string>;
    externalIcon?: {
      size?: string;
    };
  };
}
