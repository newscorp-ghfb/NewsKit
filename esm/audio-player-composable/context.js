import { createContext, useContext } from 'react';
export var AudioPlayerContext = createContext({});
export var AudioPlayerProvider = AudioPlayerContext.Provider;
export var useAudioPlayerContext = function () {
    var context = useContext(AudioPlayerContext);
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' &&
        Object.keys(context).length === 0) {
        // eslint-disable-next-line no-console
        console.error('You are using a component which needs to be a child of <AudioPlayerComposable />');
    }
    return context;
};
//# sourceMappingURL=context.js.map