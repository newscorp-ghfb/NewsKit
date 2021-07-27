import React from 'react';
import {DividerProps} from '../divider';
import {CellProps} from '../grid';
import {MQ} from '../utils/style';

export interface StructuredListProps {
  children:
    | React.ReactElement<StructuredListProps>
    | React.ReactElement<StructuredListProps>[];
  ariaLabel?: string;
  divider?: boolean;
  overrides?: {
    divider?: DividerProps['overrides'];
  };
}

export type StructuredListCellAlign = 'start' | 'center' | 'end';

export interface StructuredListItemProps {
  children: React.ReactNode | React.ReactNode[];
  ariaLabel?: string;
  disabled?: boolean;
  href?: string;
  linkIconAlign?: StructuredListCellAlign;
  overrides?: {
    stylePreset?: MQ<string>;
    spaceInset?: MQ<string>;
    minHeight?: MQ<string>;
    icon?: {
      stylePreset?: MQ<string>;
      size?: string;
    };
  };
}

export interface StructuredListCellProps extends CellProps {
  children: React.ReactNode;
  pullRight?: boolean;
  align?: StructuredListCellAlign;
}
