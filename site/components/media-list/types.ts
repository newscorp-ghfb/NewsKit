import {CardOverridesProps, GridProps, MQ} from 'newskit';

export interface MediaListProps {
  cards: Array<MediaItem>;
  xsCard?: number;
  smCard?: number;
  mdCard?: number;
  lgCard?: number;
  xlCard?: number;
  spaceStack?: string;
  gridProps?: GridProps;
}

interface TextBlockPresets {
  stylePreset: MQ<string>;
  typographyPreset: MQ<string>;
}

export interface MediaItem {
  title: string;
  subtitle?: string;
  description: string;
  media?: {
    src: string;
    alt: string;
  };
  href?: string;
  styles?: {
    card?: CardOverridesProps;
    title?: TextBlockPresets;
    subtitle?: TextBlockPresets;
    description?: TextBlockPresets;
  };
}
