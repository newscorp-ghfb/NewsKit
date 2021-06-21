import React from 'react';
import {CellProps} from '../grid';
import {MQ} from '../utils/style';

export interface StructuredListItemProps {
  children: React.ReactNode | React.ReactNode[];
  ariaLabel?: string;
  role?: string;
  disabled?: boolean;
  href?: string;
  overrides?: {
    stylePreset?: MQ<string>;
    spaceInset?: MQ<string>;
    minHeight?: MQ<string>;
  };
}

export interface StructuredListCellProps extends CellProps {
  children: React.ReactNode;
  pullRight?: boolean;
}
