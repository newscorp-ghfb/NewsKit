"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoPlayer = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var with_own_theme_1 = require("../utils/with-own-theme");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var styled_1 = require("./styled");
var getBrightcoveUrl = function (accountID, playerID) {
    return "https://players.brightcove.net/".concat(accountID, "/").concat(playerID, "_default/index.min.js");
};
var ThemelessVideoPlayer = react_1.default.forwardRef(function (_a, ref) {
    var config = _a.config, overrides = _a.overrides;
    var accountID = config["data-account"], playerID = config["data-player"], videoID = config["data-video-id"], playListID = config["data-playlist-id"];
    var id = playListID !== undefined && videoID === undefined
        ? "bc-video-".concat(playListID)
        : "bc-video-".concat(videoID);
    (0, react_1.useEffect)(function () {
        var src = getBrightcoveUrl(accountID, playerID);
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        document.head.appendChild(script);
        // To be ignored in coverage as jest does not execute the script tags or load scripts
        /* istanbul ignore next */
        script.onload = function () {
            /* istanbul ignore else */
            if (window.videojs) {
                window.videojs.getPlayer(id).ready(function () {
                    // @ts-ignore
                    var player = this;
                    /* istanbul ignore else */
                    if (ref && 'current' in ref) {
                        // eslint-disable-next-line no-param-reassign
                        ref.current = player;
                    }
                });
            }
        };
    }, [accountID, playerID, id, ref]);
    return (react_1.default.createElement(styled_1.VideoPlayerWrapper, { overrides: overrides },
        react_1.default.createElement("video", tslib_1.__assign({ id: id, className: "video-js vjs-fluid", "data-testid": "bc-video-player" }, config))));
});
exports.VideoPlayer = (0, with_own_theme_1.withOwnTheme)(ThemelessVideoPlayer)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=video-player.js.map