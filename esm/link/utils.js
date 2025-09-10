import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
export var isLinkExternal = function (href) {
    var hostName = href && href.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
    if (hostName && typeof window !== 'undefined') {
        var hostLocation = window.location.host;
        if (hostName[1] !== hostLocation.replace('www.', '')) {
            return true;
        }
    }
    return false;
};
export var withLinkTheme = function (BaseComponent) { return withOwnTheme(BaseComponent)({ defaults: defaults, stylePresets: stylePresets }); };
//# sourceMappingURL=utils.js.map