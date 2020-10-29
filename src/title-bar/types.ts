import {MQ} from '../utils/style';

export type TitleBarOverrides = {
  spaceInset?: MQ<string>;
  stylePreset?: MQ<string>;
  heading?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
  };
};

export type ContainerProps = {
  overrides?: TitleBarOverrides;
};

export type TitleBarProps = {
  children: string;
  actionItem?: React.ComponentType;
  headingAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  overrides?: TitleBarOverrides;
};
