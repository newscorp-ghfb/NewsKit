/* eslint-disable jsx-a11y/media-has-caption */
import React, {useContext} from 'react';
import {AudioPlayerContext} from './context';

export const AudioElementPOC = React.forwardRef((props, ref) => {
  console.log(props);

  const {src, audioRef, audioEvents} = useContext(AudioPlayerContext);
  const {onCanPlay, onDurationChange, onTimeUpdate} = audioEvents!; // TODO: find a better TS type

  return (
    <audio
      // @ts-ignore TODO fix ref typescript
      ref={audioRef}
      // autoPlay={autoPlay}
      src={src}
      onCanPlay={onCanPlay}
      onDurationChange={onDurationChange}
      onTimeUpdate={onTimeUpdate}
      // onDurationChange={onDurationChange}
      // onTimeUpdate={onTimeUpdate}
      // ref={audioRef}
      // src={src}
      // data-testid="audio-element"
      // {...restProps}
      // // override callback handlers
      // onCanPlay={eventHandler(AudioEvents.CanPlay)}
      // onWaiting={eventHandler(AudioEvents.Waiting)}
      // onPlay={eventHandler(AudioEvents.Play)}
      // onPause={eventHandler(AudioEvents.Pause)}
      // onVolumeChange={eventHandler(AudioEvents.VolumeChange)}
      // onEnded={eventHandler(AudioEvents.Ended)}
      // onProgress={eventHandler(AudioEvents.Progress)}
    >
      {/* {captionSrc && <track kind="captions" src={captionSrc} />} */}
    </audio>
  );
});
