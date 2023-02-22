import React from 'react';
import {IconButtonProps} from '../../button/types';
import {Optional} from '../../utils/types';

export type PaginationIconButtonProps = Optional<IconButtonProps, 'aria-label'>;

export type PaginationIconButtonWithShortcuts = Omit<
  PaginationIconButtonProps,
  'onClick'
> & {
  keyboardShortcuts?: string[] | string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement> | KeyboardEvent,
  ) => void;
};
