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
    stylePreset?: StylePresetKeys;
    mediaContainer?: {
      stylePreset?: StylePresetKeys;
      spaceInline?: MQ<SpacePresetKeys>;
    };
    teaserContainer?: {
      stylePreset?: StylePresetKeys;
      spaceInset?: MQ<PaddingPresetKeys>;
    };
    actionsContainer?: {
      stylePreset?: StylePresetKeys;
      spaceInset?: MQ<PaddingPresetKeys>;
      minHeight?: SizingKeys | string;
    };
  };
}
