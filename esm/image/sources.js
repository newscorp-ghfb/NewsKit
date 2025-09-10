import { __assign, __rest } from "tslib";
import React from 'react';
import { useTheme } from '../theme';
import { getMediaQueryFromTheme } from '../utils';
import { getNextBreakpoint } from './utils';
export var Sources = function (_a) {
    var sources = _a.sources;
    var theme = useTheme();
    var breakpoints = theme.breakpoints;
    var breakpointKeys = Object.keys(breakpoints);
    var breakpointKeysFromAllSources = sources
        .reduce(function (bps, _a) {
        var media = _a.media;
        if (breakpointKeys.indexOf(media) >= 0 &&
            bps.indexOf(media) === -1) {
            bps.push(media);
        }
        return bps;
    }, [])
        .sort(function (a, b) { return breakpointKeys.indexOf(a) - breakpointKeys.indexOf(b); });
    return (React.createElement(React.Fragment, null, sources.map(function (_a) {
        var media = _a.media, sourceAttr = __rest(_a, ["media"]);
        var mediaQuery = media;
        var usesBreakpointKey = breakpointKeys.indexOf(media) >= 0;
        if (media && usesBreakpointKey) {
            var nextBreakpoint = getNextBreakpoint(media, breakpointKeysFromAllSources);
            mediaQuery = getMediaQueryFromTheme(media, nextBreakpoint)({
                theme: theme,
            }).replace('@media ', '');
        }
        return (React.createElement("source", __assign({ key: "".concat(media, "-").concat(sourceAttr.type, "-").concat(sourceAttr.srcSet), media: mediaQuery }, sourceAttr)));
    })));
};
//# sourceMappingURL=sources.js.map