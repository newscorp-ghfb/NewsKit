import {TagSize} from './utils';
import {BorderRadiusShape, ColorKeys} from '../themes';

export type TagProps = {
  href?: string;
  disabled?: boolean;
  $size?: TagSize;
  $shape?: BorderRadiusShape;
  $backgroundColor?: ColorKeys;
};
