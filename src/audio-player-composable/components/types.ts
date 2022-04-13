import React from 'react';
import {IconButtonProps} from '../../button/types';
import {Optional} from '../../utils/types';

export type AudioPlayerIconButtonProps = Optional<
  IconButtonProps,
  'aria-label'
>;

export type AudioPlayerIconButtonWithShortcuts = Omit<
  AudioPlayerIconButtonProps,
  'onClick'
> & {
  keyboardShortcuts?: string[] | string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement> | KeyboardEvent,
  ) => void;
};
