"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sources = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../theme");
var utils_1 = require("../utils");
var utils_2 = require("./utils");
var Sources = function (_a) {
    var sources = _a.sources;
    var theme = (0, theme_1.useTheme)();
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
    return (react_1.default.createElement(react_1.default.Fragment, null, sources.map(function (_a) {
        var media = _a.media, sourceAttr = tslib_1.__rest(_a, ["media"]);
        var mediaQuery = media;
        var usesBreakpointKey = breakpointKeys.indexOf(media) >= 0;
        if (media && usesBreakpointKey) {
            var nextBreakpoint = (0, utils_2.getNextBreakpoint)(media, breakpointKeysFromAllSources);
            mediaQuery = (0, utils_1.getMediaQueryFromTheme)(media, nextBreakpoint)({
                theme: theme,
            }).replace('@media ', '');
        }
        return (react_1.default.createElement("source", tslib_1.__assign({ key: "".concat(media, "-").concat(sourceAttr.type, "-").concat(sourceAttr.srcSet), media: mediaQuery }, sourceAttr)));
    })));
};
exports.Sources = Sources;
//# sourceMappingURL=sources.js.map