import {MQ} from '../utils';

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
};

export type ToastOptions = Pick<ToastProviderProps, 'autoHideDuration'>;

export type ToastAsFunction = (props: {
  onClose: Function;
  id: ToastID;
}) => React.ReactNode;

export type ToastProps = {
  role: 'status' | 'alert';
  ariaLive: 'assertive' | 'off' | 'polite';
  overrides?: {};
};
