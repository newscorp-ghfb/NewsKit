export interface MediaListProps {
  cards: Array<MediaItem>;
  xsCard?: number;
  smCard?: number;
  mdCard?: number;
  lgCard?: number;
  xlCard?: number;
  spaceStack?: string;
}

export interface MediaItem {
  title: string;
  description: string;
  media: {
    src: string;
    alt: string;
  };
  href?: string;
}
