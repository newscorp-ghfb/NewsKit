import {Toast} from '../toast';
import {withDefaultProps} from '../utils';
import {InlineMessageProps} from './types';

export const InlineMessage = withDefaultProps<InlineMessageProps>(
  Toast,
  ({
    role: 'region',
    ariaLive: 'off',
    'data-testid': 'inline-message',
  } as unknown) as InlineMessageProps,
  'inlineMessage',
  {
    maxWidth: '__delete',
    minWidth: '__delete',
    minHeight: '__delete',
    width: '100%',
  },
);
