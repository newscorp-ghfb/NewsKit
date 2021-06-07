import {ToastProps} from '../toast';

type ToastOverrides = ToastProps['overrides'];

type InlineMessageOverrides = Omit<
  ToastOverrides,
  'contentAndActions' | 'divider'
>;

export type InlineMessageProps = Omit<ToastProps, 'overrides' | 'actions'> & {
  overrides?: InlineMessageOverrides;
};
