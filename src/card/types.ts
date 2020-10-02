import {ImageProps} from '../image/types';
import {MQ} from '../utils/style';
import {
  SizingKeys,
  PaddingPresetKeys,
  StylePresetKeys,
  SpacePresetKeys,
} from '../theme';

export interface CardProps {
  href?: string;
  media?: ImageProps | React.ComponentType;
  children: Exclude<React.ReactNode, 'undefined'>;
  actions?: React.ComponentType;

  overrides?: {
    stylePreset?: MQ<StylePresetKeys>;
    mediaContainer?: {
      stylePreset?: MQ<StylePresetKeys>;
      spaceInline?: MQ<SpacePresetKeys>;
    };
    teaserContainer?: {
      stylePreset?: MQ<StylePresetKeys>;
      spaceInset?: MQ<PaddingPresetKeys>;
    };
    actionsContainer?: {
      stylePreset?: MQ<StylePresetKeys>;
      spaceInset?: MQ<PaddingPresetKeys>;
      minHeight?: SizingKeys | string;
    };
  };
}
