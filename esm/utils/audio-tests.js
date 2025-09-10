/* istanbul ignore file */
import { __assign, __rest } from "tslib";
import * as React from 'react';
import { useEffect, useCallback, useState } from 'react';
import { isVisualTest } from '../test/test-utils';
// TODO Check if this limitation still applies to Percy:
// We need a way to make sure all Audio Players are no longer in loading state
// before taking the snaphot. One way is to conditionally show / hide an invisible
// element on the page based on loading state, and pass this to the waitBeforeCapture
// config for the test. But because Applitools only supports one selector in
// waitBeforeCapture (and because runBefore doesn't work as documented), we cannot
// have an element for each Player in a story. Instead, we need to count the number
// of players in a story, and conditionally render the element when all are loaded.
export var useAllPlayersCanPlayCheck = function (nbPlayers) {
    var _a = useState(0), nbLoaded = _a[0], setNbLoaded = _a[1];
    //const [allPlayersCanPlay, allPlayersCanPlay] => useState<boolean>(false);
    var onCanPlay = useCallback(function () { return setNbLoaded(function (latest) { return latest + 1; }); }, [
        setNbLoaded,
    ]);
    return {
        allPlayersCanPlay: nbLoaded >= nbPlayers || !isVisualTest,
        onCanPlay: onCanPlay,
    };
};
// The length of the buffer bar is controlled by the browser. The behaviour
// is inconsistent, which makes tests flaky. As a solution, we prefetch src for
// all Audio Players when running in visual tests so that the progress bar is
// always full. There are separate visual tests for the loading / unbuffered state.
var AudioPlayerBuffered = function (_a) {
    var Comp = _a.comp, _b = _a.props, src = _b.src, children = _b.children, rest = __rest(_b, ["src", "children"]);
    var _c = useState(), prefetchedSrc = _c[0], setPrefetchedSrc = _c[1];
    useEffect(function () {
        fetch(src)
            .then(function (response) { return response.blob(); })
            .then(function (b) { return URL.createObjectURL(b); })
            .then(function (url) { return setPrefetchedSrc(url); });
    }, [src]);
    if (!prefetchedSrc) {
        return null;
    }
    return (React.createElement(Comp, __assign({ src: prefetchedSrc }, rest), children));
};
// This is a wrapper component that allows us to use the prefetching logic in
// the AudioPlayer and AudioPlayerComposable tests.
export var VisualTestAudioPlayer = function (_a) {
    var Comp = _a.comp, _b = _a.props, src = _b.src, live = _b.live, children = _b.children, rest = __rest(_b, ["src", "live", "children"]);
    if (src && !live && isVisualTest) {
        return (React.createElement(AudioPlayerBuffered, { comp: Comp, props: __assign({ src: src, live: live, children: children }, rest) }));
    }
    return (React.createElement(Comp, __assign({ src: src, live: live }, rest), children));
};
//# sourceMappingURL=audio-tests.js.map