import {MQ} from '../utils/style';

export interface StandfirstProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  overrides?: {
    styledText?: {
      typographyPreset?: MQ<string>;
      stylePreset?: MQ<string>;
    };
  };
}
