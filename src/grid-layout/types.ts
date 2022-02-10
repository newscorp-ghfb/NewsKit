import {MQ} from '../utils/style';

import {BlockProps} from '../block';

export type GridLayoutItemProps = BlockProps & {
  area?: string;
  order?: MQ<number>;
  justifySelf?: MQ<string>;
  alignSelf?: MQ<string>;
};

export type AreasMap = {
  [componentName: string]: React.FC<GridLayoutItemProps>;
};

type GridLayoutRenderProps = (areas: AreasMap) => React.ReactNode;

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
  overrides?: {
    width?: MQ<string>;
    minWidth?: MQ<string>;
    maxWidth?: MQ<string>;
    height?: MQ<string>;
    minHeight?: MQ<string>;
    maxHeight?: MQ<string>;
  };
};
