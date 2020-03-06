export interface CenterProp {
  center?: boolean;
}

export interface DescriptionMetaProps {
  title?: string;
  time?: string;
  description?: string;
  live?: boolean;
  flag?: React.ComponentType | string;
  tags?: string[];
}

export interface PlayerImageProps {
  imgSrc: string;
  imgAlt: string;
}
