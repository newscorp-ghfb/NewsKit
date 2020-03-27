/* eslint-disable jsx-a11y/media-has-caption */
import React, {useRef, useEffect} from 'react';

const getValueInRange = (value: number, [start, end]: [number, number]) =>
  Math.max(start, Math.min(end, value));

export interface AudioElementProps
  extends React.AudioHTMLAttributes<HTMLAudioElement> {
  captionSrc?: string;
  playing: boolean;
  volume?: number;
  newTime?: number;
}

let rendered = false;

export const AudioElement: React.FC<AudioElementProps> = ({
  captionSrc,
  playing,
  volume = 1,
  newTime = 0,
  autoPlay = false,
  src,
  ...props
}) => {
  const localRef = useRef<HTMLAudioElement>(null);

  // Used in the cases where the audio loading events are not being able to capture.
  const ue = useEffect;
  ue(() => {
    const player = localRef.current;
    /* istanbul ignore else */
    if (player) {
      player.load();
      // Needed for the tracked player
      if (!autoPlay) {
        if (playing) {
          player.play();
        } else {
          player.pause();
        }
      }
    }
  }, [src]);

  useEffect(() => {
    const player = localRef.current;
    /* istanbul ignore else */
    if (player) {
      if (!rendered && autoPlay) {
        rendered = true;
      } else if (playing) {
        player.play();
      } else {
        player.pause();
      }
    }
  }, [playing, autoPlay]);

  useEffect(() => {
    const player = localRef.current;
    /* istanbul ignore else */
    if (player && newTime !== -1) {
      const timeRange = player.seekable;
      if (timeRange.length > 0) {
        const value = getValueInRange(newTime, [
          timeRange.start(0),
          timeRange.end(timeRange.length - 1),
        ]);
        player.currentTime = value;
      }
    }
  }, [newTime]);

  useEffect(() => {
    const player = localRef.current;
    /* istanbul ignore else */
    if (player) {
      const value = getValueInRange(volume, [0, 1]);
      player.volume = value;
    }
  }, [volume]);

  return (
    <audio ref={localRef} src={src} autoPlay {...props}>
      {captionSrc && <track kind="captions" src={captionSrc} />}
    </audio>
  );
};
