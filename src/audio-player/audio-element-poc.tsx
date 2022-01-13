import React from 'react'

//TODO Should extend HTML types
interface audioElementHTML {
  src: string;
  autoPlay: boolean;
  ref: any;
  onCanPlay: () => void;
}

export const AudioElementPOC = React.forwardRef(({
  autoPlay,
  onCanPlay,
  src
}: audioElementHTML, ref) => {
  console.log('audio ref', autoPlay)
  return (
    <audio 
      //@ts-ignore TODO fix ref typescript
      ref={ref}
      autoPlay={autoPlay}
      src={src}
      onCanPlay={onCanPlay}
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
      // onDurationChange={eventHandler(AudioEvents.DurationChange)}
      // onTimeUpdate={eventHandler(AudioEvents.TimeUpdate)}
      // onProgress={eventHandler(AudioEvents.Progress)}
    >
      {/* {captionSrc && <track kind="captions" src={captionSrc} />} */}
    </audio>
  )
})