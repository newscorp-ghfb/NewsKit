import { __assign } from "tslib";
import React, { useEffect } from 'react';
import { withOwnTheme } from '../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import { VideoPlayerWrapper } from './styled';
var getBrightcoveUrl = function (accountID, playerID) {
    return "https://players.brightcove.net/".concat(accountID, "/").concat(playerID, "_default/index.min.js");
};
var ThemelessVideoPlayer = React.forwardRef(function (_a, ref) {
    var config = _a.config, overrides = _a.overrides;
    var accountID = config["data-account"], playerID = config["data-player"], videoID = config["data-video-id"], playListID = config["data-playlist-id"];
    var id = playListID !== undefined && videoID === undefined
        ? "bc-video-".concat(playListID)
        : "bc-video-".concat(videoID);
    useEffect(function () {
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
    return (React.createElement(VideoPlayerWrapper, { overrides: overrides },
        React.createElement("video", __assign({ id: id, className: "video-js vjs-fluid", "data-testid": "bc-video-player" }, config))));
});
export var VideoPlayer = withOwnTheme(ThemelessVideoPlayer)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=video-player.js.map