import {CardOverridesProps, GridProps, MQ, ImageProps} from 'newskit';

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
  label: string;
  title?: string;
  description: string;
  media?: {
    src: string;
    alt: string;
    overrides?: ImageProps['overrides'];
  };
  href?: string;
  styles?: {
    card?: CardOverridesProps;
    label?: TextBlockPresets;
    title?: TextBlockPresets;
    description?: TextBlockPresets;
  };
}
