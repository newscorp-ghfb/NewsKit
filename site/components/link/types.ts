import {
  StylePresetKeys,
  TypePresetKeys,
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
    typePreset?: MQ<TypePresetKeys>;
    space?: SizingKeys;
    externalIcon?: {
      size?: IconSizeKeys;
    };
  };
}
