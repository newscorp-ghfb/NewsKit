/* eslint-disable jsx-a11y/media-has-caption */
import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  RefObject,
  Ref,
} from 'react';

const getValueInRange = (value: number, [start, end]: [number, number]) =>
  Math.max(start, Math.min(end, value));

export interface AudioHandler {
  play: () => void;
  pause: () => void;
  setVolume: (newVolume: number) => number;
  setCurrentTime: (newTime: number) => number;
}

export const useAudioHandler = (
  localRef: RefObject<HTMLAudioElement>,
  parentRef: Ref<AudioHandler>,
) => {
  useImperativeHandle(parentRef, () => ({
    play: () => {
      const playerNode = localRef.current;
      if (playerNode) {
        playerNode.play();
      }
    },
    pause: () => {
      const playerNode = localRef.current;
      if (playerNode) {
        playerNode.pause();
      }
    },
    setCurrentTime: newTime => {
      const playerNode = localRef.current!;
      const timeRange = playerNode.seekable;
      if (timeRange.length > 0) {
        const value = getValueInRange(newTime, [
          timeRange.start(0),
          timeRange.end(timeRange.length - 1),
        ]);
        playerNode.currentTime = value;
        return value;
      }
      return playerNode.currentTime;
    },
    setVolume: newVolume => {
      const playerNode = localRef.current!;
      const value = getValueInRange(newVolume, [0, 1]);
      playerNode.volume = value;
      return value;
    },
  }));
};

export interface AudioElementProps
  extends React.AudioHTMLAttributes<HTMLAudioElement> {
  captionSrc?: string;
}

export const AudioElement = forwardRef<AudioHandler, AudioElementProps>(
  ({captionSrc, ...props}, parentRef) => {
    const localRef = useRef<HTMLAudioElement>(null);
    useAudioHandler(localRef, parentRef);
    return (
      <audio ref={localRef} {...props}>
        {captionSrc && <track kind="captions" src={captionSrc} />}
      </audio>
    );
  },
);
