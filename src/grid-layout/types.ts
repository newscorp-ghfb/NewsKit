import React from 'react';
import {ContainerQueryProps, MQ, ResponsiveValue} from '../utils/style';

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
  rowGap?: ResponsiveValue<string>;
  columnGap?: ResponsiveValue<string>;
  rows?: ResponsiveValue<string>;
  columns?: ResponsiveValue<string>;
  justifyContent?: ResponsiveValue<string>;
  alignContent?: ResponsiveValue<string>;
  justifyItems?: ResponsiveValue<string>;
  alignItems?: ResponsiveValue<string>;
  areas?: ResponsiveValue<string>;
  inline?: ResponsiveValue<boolean>;
  autoColumns?: ResponsiveValue<string>;
  autoRows?: ResponsiveValue<string>;
  autoFlow?: ResponsiveValue<string>;
  children?: React.ReactNode | GridLayoutRenderProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: React.ElementType<any>;
  overrides?: {
    width?: ResponsiveValue<string>;
    minWidth?: ResponsiveValue<string>;
    maxWidth?: ResponsiveValue<string>;
    height?: ResponsiveValue<string>;
    minHeight?: ResponsiveValue<string>;
    maxHeight?: ResponsiveValue<string>;
  } & LogicalProps &
    ContainerQueryProps;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
