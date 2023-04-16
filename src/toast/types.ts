import {ReactElement} from 'react';
import {NewsKitIcon} from '../icons';
import {MQ} from '../utils';
import {LogicalProps} from '../utils/logical-properties';

export type ToastID = string;

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export type ToastProviderProps = {
  autoHideDuration?: number;
  horizontalOffset?: MQ<string>;
  verticalOffset?: MQ<string>;
  position?: ToastPosition;
  zIndex?: number;
};

export type ToastOptions = Pick<ToastProviderProps, 'autoHideDuration'>;

export type Renderable = JSX.Element | string | number | null;

export type ToastAsFunction = (props: {
  onClose: Function;
  id: ToastID;
}) => Renderable;

export interface ToastOverrides extends LogicalProps {
  stylePreset?: MQ<string>;
  minHeight?: MQ<string>;
  maxWidth?: MQ<string>;
  minWidth?: MQ<string>;
  width?: MQ<string>;
  icon?: {
    spaceInline?: MQ<string>;
  };
  divider?: {
    stylePreset?: MQ<string>;
  };
  content?: {
    title?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
      spaceStack?: MQ<string>;
    };
    message?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    };
  };
  contentAndActions?: {
    spaceInline: MQ<string>;
  };
}

export interface ToastProps extends React.HTMLAttributes<HTMLElement> {
  role?: string;
  ariaLive?: 'assertive' | 'off' | 'polite';
  children: Exclude<React.ReactNode, 'undefined'>;
  icon?: ReactElement<NewsKitIcon>;
  actions?: React.ComponentType;
  title?: string;
  overrides?: ToastOverrides;
}
