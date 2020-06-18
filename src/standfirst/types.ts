import {MQ} from '../utils/style';
import {TypePresetKeys} from '../themes/mappers/type-presets';
import {StylePresetKeys} from '../themes/mappers/style-preset';

export interface StandfirstProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  overrides?: {
    styledText?: {
      typePreset?: MQ<TypePresetKeys>;
      stylePreset?: MQ<StylePresetKeys>;
    };
  };
}
