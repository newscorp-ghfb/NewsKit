import {ToastProps} from '../toast';

type ToastOverrides = ToastProps['overrides'];

type InlineMessageOverrides = Omit<
  ToastOverrides,
  'contentAndActions' | 'divider' | 'width' | 'maxWidth' | 'minWidth'
>;

export type InlineMessageProps = Omit<ToastProps, 'overrides' | 'actions'> & {
  overrides?: InlineMessageOverrides;
};
