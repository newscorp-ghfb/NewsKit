import React from 'react';
import {MQ} from '../utils/style';

import {BlockProps} from '../block';
import {LogicalProps} from '../utils/logical-properties';

export type GridLayoutItemProps = BlockProps & {
  area?: string;
  order?: MQ<number>;
  justifySelf?: MQ<string>;
  alignSelf?: MQ<string>;
  column?: MQ<string>;
  row?: MQ<string>;
} & React.HTMLAttributes<HTMLElement>;

export type AreasMap = {
  [componentName: string]: React.FC<GridLayoutItemProps>;
};

export type GridLayoutRenderProps = (areas: AreasMap) => React.ReactNode;

export type GridLayoutProps = {
  rowGap?: MQ<string>;
  columnGap?: MQ<string>;
  rows?: MQ<string>;
  columns?: MQ<string>;
  justifyContent?: MQ<string>;
  alignContent?: MQ<string>;
  justifyItems?: MQ<string>;
  alignItems?: MQ<string>;

  areas?: MQ<string>;
  inline?: MQ<boolean>;
  children?: React.ReactNode | GridLayoutRenderProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: React.ElementType<any>;
  overrides?: {
    /**
     * @deprecated This property is deprecated and will be removed in the next major release. Use `paddingBlock` and `paddingInline` instead.
     */
    spaceInset?: MQ<string>;
    width?: MQ<string>;
    minWidth?: MQ<string>;
    maxWidth?: MQ<string>;
    height?: MQ<string>;
    minHeight?: MQ<string>;
    maxHeight?: MQ<string>;
  } & LogicalProps;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
