import React, {SyntheticEvent} from 'react';

// TODO Should extend HTML types
interface audioElementHTML {
  src: string;
  autoPlay: boolean;
  ref: any;
  onCanPlay: () => void;
  onDurationChange: ({target}: SyntheticEvent<HTMLAudioElement, Event>) => void;
  onTimeUpdate?: ({target}: SyntheticEvent<HTMLAudioElement, Event>) => void;
}

export const AudioElementPOC = React.forwardRef(
  (
    {
      onTimeUpdate,
      onDurationChange,
      autoPlay,
      onCanPlay,
      src,
    }: audioElementHTML,
    ref,
  ) => {
    console.log('audio ref', autoPlay);
    return (
      <audio
        // @ts-ignore TODO fix ref typescript
        ref={ref}
        autoPlay={autoPlay}
        src={src}
        onCanPlay={onCanPlay}
        onDurationChange={onDurationChange}
        onTimeUpdate={onTimeUpdate}
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
  },
);
