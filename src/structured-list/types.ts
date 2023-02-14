import React from 'react';
import {DividerProps} from '../divider';
import {CellProps} from '../grid';
import {EventData} from '../instrumentation';
import {MQ} from '../utils/style';
import {LogicalProps} from '../utils/logical-properties';

export interface StructuredListOverrides extends LogicalProps {
  divider?: DividerProps['overrides'];
  width?: MQ<string>;
}

export interface StructuredListProps {
  children:
    | React.ReactElement<StructuredListProps>
    | React.ReactElement<StructuredListProps>[];
  ariaLabel?: string;
  divider?: boolean;
  overrides?: StructuredListOverrides;
}

export type StructuredListCellAlign = 'start' | 'center' | 'end';

export interface StructuredListItemProps
  extends React.AnchorHTMLAttributes<HTMLElement>,
    EventData {
  children: React.ReactNode | React.ReactNode[];
  ariaLabel?: string;
  disabled?: boolean;
  href?: string;
  hideIcon?: boolean;
  linkIconAlign?: StructuredListCellAlign;
  overrides?: {
    stylePreset?: MQ<string>;
    minHeight?: MQ<string>;
    icon?: {
      stylePreset?: MQ<string>;
      size?: string;
    };
  } & LogicalProps;
}

export interface StructuredListCellProps extends CellProps {
  children: React.ReactNode;
  pullRight?: boolean;
  align?: StructuredListCellAlign;
}
