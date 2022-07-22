import {MQ} from '../utils/style';
import {LogicalProps} from '../utils/logical-properties';

export interface StandfirstProps {
  children?: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  overrides?: {
    styledText?: {
      typographyPreset?: MQ<string>;
      stylePreset?: MQ<string>;
    } & LogicalProps;
  };
}
