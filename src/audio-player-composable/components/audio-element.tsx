/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import {AudioElementProps, AudioEvents} from '../types';

export const AudioElement: React.FC<AudioElementProps> = ({
  src,
  audioRef,
  audioEvents,
  autoPlay,
  ...props
}) => {
  const eventHandler = (eventName: AudioEvents) => (
    e: React.SyntheticEvent<HTMLAudioElement, Event>,
  ) => {
    const eventCallback = props[eventName];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    eventCallback
      ? /* istanbul ignore next */ eventCallback(e)
      : audioEvents![eventName](e);
  };

  return (
    <audio
      ref={audioRef}
      autoPlay={autoPlay}
      src={src}
      // override callback handlers
      onCanPlay={eventHandler(AudioEvents.CanPlay)}
      onWaiting={eventHandler(AudioEvents.Waiting)}
      onPlay={eventHandler(AudioEvents.Play)}
      onPause={eventHandler(AudioEvents.Pause)}
      onEnded={eventHandler(AudioEvents.Ended)}
      onDurationChange={eventHandler(AudioEvents.DurationChange)}
      onTimeUpdate={eventHandler(AudioEvents.TimeUpdate)}
      onProgress={eventHandler(AudioEvents.Progress)}
      data-testid="audio-element"
      {...props}
    />
  );
};
