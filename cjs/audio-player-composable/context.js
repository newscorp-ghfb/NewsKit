"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAudioPlayerContext = exports.AudioPlayerProvider = exports.AudioPlayerContext = void 0;
var react_1 = require("react");
exports.AudioPlayerContext = (0, react_1.createContext)({});
exports.AudioPlayerProvider = exports.AudioPlayerContext.Provider;
var useAudioPlayerContext = function () {
    var context = (0, react_1.useContext)(exports.AudioPlayerContext);
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' &&
        Object.keys(context).length === 0) {
        // eslint-disable-next-line no-console
        console.error('You are using a component which needs to be a child of <AudioPlayerComposable />');
    }
    return context;
};
exports.useAudioPlayerContext = useAudioPlayerContext;
//# sourceMappingURL=context.js.map