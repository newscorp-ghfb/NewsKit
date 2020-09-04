import {
  TypographyPresetKeys,
  IconSizeKeys,
  SizingKeys,
  StylePresetKeys,
} from '../theme';
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
    stylePreset?: MQ<StylePresetKeys>;
    typographyPreset?: MQ<TypographyPresetKeys>;
    space?: SizingKeys;
    externalIcon?: {
      size?: IconSizeKeys;
    };
  };
}
