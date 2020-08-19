import {ImageProps} from '../image/types';
import {SizingKeys, PaddingPresetKeys} from '../theme';

export interface CardProps {
  href?: string;
  media?: ImageProps | React.ComponentType;
  actions?: React.ComponentType;
  overrides?: {
    stylePreset?: string;
    media?: {
      stylePreset?: string;
    };
    actionsContainer?: {
      paddingPreset?: PaddingPresetKeys;
      minHeight?: SizingKeys | string;
    };
  };
}
