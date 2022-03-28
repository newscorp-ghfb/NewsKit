import {Toast} from '../toast';
import {withDefaultProps} from '../utils';
import {InlineMessageProps} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

const ThemelessInlineMessage = withDefaultProps<InlineMessageProps>(
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

export const InlineMessage = withOwnTheme(ThemelessInlineMessage)({
  defaults,
  stylePresets,
});
