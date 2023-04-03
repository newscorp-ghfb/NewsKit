import {ReactNode} from 'react';
import {GridLayoutProps} from '../grid-layout/types';
import {ImageProps} from '../image';
import {MQ} from '../utils';

export type StylableGridLayout = GridLayoutProps & {
  overrides?: {
    stylePreset?: MQ<string>;
  };
};

export type CardComposableProps = StylableGridLayout;

export type CardMediaProps = {
  media?: ImageProps;
  children?: ReactNode;
};

export type CardContentProps = StylableGridLayout;

export type CardActionsProps = StylableGridLayout;

export type CardLinkProps = StylableGridLayout & {
  href?: string;
  expand?: boolean;
};
