import {ReactNode} from 'react';
import {GridLayoutProps} from '../grid-layout/types';
import {ImageProps} from '../image';
import {MQ} from '../utils';
import {LinkProps} from '../link';
import {TransitionToken} from '../theme';

export type StylableGridLayout = GridLayoutProps & {
  overrides?: {
    stylePreset?: MQ<string>;
    transitionPreset?: TransitionToken | TransitionToken[];
  };
};

export type ComponentWithOverrides = {
  overrides?: object;
};

export type CardComposableProps = StylableGridLayout;

export type CardMediaProps = GridLayoutProps & {
  media?: ImageProps;
  children?: ReactNode;
};

export type CardContentProps = StylableGridLayout;

export type CardActionsProps = StylableGridLayout;

export type CardLinkProps = LinkProps & {
  expand?: boolean;
};
