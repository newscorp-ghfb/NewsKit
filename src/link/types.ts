import {
  TypographyPresetKeys,
  IconSizeKeys,
  StylePresetKeys,
  SpacePresetKeys,
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
    spaceInline?: MQ<SpacePresetKeys>;
    externalIcon?: {
      size?: IconSizeKeys;
    };
  };
}
