import {MQ} from '../utils/style';
import {StylePresetKeys, TypographyPresetKeys} from '../theme';

export interface StandfirstProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  overrides?: {
    styledText?: {
      typographyPreset?: MQ<TypographyPresetKeys>;
      stylePreset?: MQ<StylePresetKeys>;
    };
  };
}
