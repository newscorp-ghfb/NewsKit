"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMediaQuery = void 0;
var react_1 = require("react");
function useMediaQuery(query) {
    var getInitialState = function () {
        return typeof window !== 'undefined' && window.matchMedia(query).matches;
    };
    var _a = (0, react_1.useState)(getInitialState), isMatched = _a[0], setIsMatched = _a[1];
    (0, react_1.useEffect)(function () {
        var mediaQueryList = typeof window !== 'undefined' && window.matchMedia(query);
        var listener = function (event) {
            setIsMatched(event.matches);
        };
        if (mediaQueryList) {
            mediaQueryList.addEventListener('change', listener);
        }
        return function () {
            if (mediaQueryList) {
                mediaQueryList.removeEventListener('change', listener);
            }
        };
    }, [query]);
    return isMatched;
}
exports.useMediaQuery = useMediaQuery;
//# sourceMappingURL=use-media-query.js.map