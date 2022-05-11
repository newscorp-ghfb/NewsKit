import React, {useState, useEffect} from 'react';
import {usePopper} from 'react-popper';
import {get} from '../utils/get';

export interface UseTooltipProps {
  closeOnClick?: boolean;
  /**
   * If `true`, the tooltip will hide while the mouse
   * is down
   */
  closeOnMouseDown?: boolean;
  /**
   * If `true`, the tooltip will hide on pressing Esc key
   */
  onOpen?(): void;
  /**
   * Callback to run when the tooltip hides
   */
  onClose?(): void;
  /**
   * Custom `id` to use in place of `uuid`
   */
  id?: string;
  /**
   * If `true`, the tooltip will be shown (in controlled mode)
   */
  open?: boolean;
}

export function useTooltip(props: UseTooltipProps = {}) {}
