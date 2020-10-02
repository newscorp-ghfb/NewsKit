import {
  StylePresetKeys,
  TypographyPresetKeys,
  MQ,
  SizingKeys,
  IconSizeKeys,
  EventContext,
} from 'newskit';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  eventContext?: EventContext;
  external?: boolean;
  noUnderline?: boolean;
  overrides?: {
    stylePreset?: MQ<StylePresetKeys>;
    typographyPreset?: MQ<TypographyPresetKeys>;
    space?: MQ<SizingKeys>;
    externalIcon?: {
      size?: IconSizeKeys;
    };
  };
}
