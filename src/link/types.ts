import {ColorKeys, TypePresetKeys} from '../themes';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  // href is optional on AnchorHTMLAttributes, here we make it required.
  href: string;
  $noUnderline?: boolean;
  $font?: TypePresetKeys;
  $color?: ColorKeys;
  $stylePreset?: string;
}
