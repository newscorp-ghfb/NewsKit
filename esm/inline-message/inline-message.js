import { Toast } from '../toast';
import { withDefaultProps } from '../utils';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
var ThemelessInlineMessage = withDefaultProps(Toast, {
    role: 'region',
    ariaLive: 'off',
    'data-testid': 'inline-message',
}, 'inlineMessage', {
    maxWidth: '__delete',
    minWidth: '__delete',
    minHeight: '__delete',
    width: '100%',
});
export var InlineMessage = withOwnTheme(ThemelessInlineMessage)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=inline-message.js.map