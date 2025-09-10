import { useState, useEffect } from 'react';
export function useMediaQuery(query) {
    var getInitialState = function () {
        return typeof window !== 'undefined' && window.matchMedia(query).matches;
    };
    var _a = useState(getInitialState), isMatched = _a[0], setIsMatched = _a[1];
    useEffect(function () {
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
//# sourceMappingURL=use-media-query.js.map