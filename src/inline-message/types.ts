import {ToastProps} from '../toast';
import {ToastOverrides} from '../toast/types';

type InlineMessageOverrides = Omit<
  ToastOverrides,
  'contentAndActions' | 'divider' | 'width' | 'maxWidth' | 'minWidth'
>;

export type InlineMessageProps = Omit<ToastProps, 'overrides' | 'actions'> & {
  overrides?: InlineMessageOverrides;
};
