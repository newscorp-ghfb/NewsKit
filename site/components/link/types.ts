import {ColorKeys, TypePresetKeys} from 'newskit/themes';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  $noUnderline?: boolean;
  $font?: TypePresetKeys;
  $color?: ColorKeys;
}
