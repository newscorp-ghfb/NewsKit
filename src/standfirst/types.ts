import {MQ} from '../utils/style';
import {StylePresetKeys, TypePresetKeys} from '../theme';

export interface StandfirstProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  overrides?: {
    styledText?: {
      typePreset?: MQ<TypePresetKeys>;
      stylePreset?: MQ<StylePresetKeys>;
    };
  };
}
