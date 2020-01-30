import React, {
  useRef,
  useState,
  useEffect,
  ChangeEvent,
  useCallback,
} from 'react';
import {PlayerContainer, MetaArea as ControlPanel} from './styled';
import {Slider} from '../slider';
import {PlayerButton, ForwardButton, ReplayButton} from './controls';
import {
  PlayerMeta,
  PlayerMetaProps,
  AudioElement,
  AudioHandler,
  AudioElementProps,
} from './meta';

type EventListener = (event: ChangeEvent<HTMLAudioElement>) => void;
export type AudioPlayerProps = AudioElementProps & PlayerMetaProps;

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  imgSrc,
  imgAlt,
  time,
  title,
  description,
  tags = [],
  live = false,
  ...props
}) => {
  const playerRef = useRef<AudioHandler>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeArr, setCurrentTime] = useState([0]);
  const [duration, setDuration] = useState(0);
  const [currentTime] = timeArr;

  const showControls = !live && !Number.isNaN(duration) && duration > 0;
  const maxTime = showControls
    ? new Date(duration * 1000).toISOString().substr(11, 8)
    : '0.00';

  const onPlay: EventListener = () => setIsPlaying(true);
  const onPause: EventListener = () => setIsPlaying(false);
  const onDurationChange: EventListener = event =>
    setDuration(event.target.duration);
  const onTimeUpdate: EventListener = event => {
    const eventTime = Number(event.target.currentTime.toFixed(2));
    if (currentTime !== eventTime) {
      setCurrentTime([eventTime]);
    }
  };

  const togglePlay = useCallback(() => {
    const playerNode = playerRef.current;
    if (playerNode) {
      setIsPlaying(playerNode.togglePlay(isPlaying));
    }
  }, [isPlaying, playerRef, setIsPlaying]);

  /**
   * audio time management callbacks
   *
   * this is to prevent recreation of all the event handlers on every audio time update
   * see https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
   */
  const timeRef = useRef(0);
  useEffect(() => {
    timeRef.current = currentTime;
  });
  const onChangeAudioTime = useCallback(
    (newTime: number) => {
      const playerNode = playerRef.current;
      if (playerNode) {
        setCurrentTime([playerNode.setCurrentTime(newTime)]);
      }
    },
    [playerRef, setCurrentTime],
  );
  const onChangeSlider = useCallback(
    ([value]: number[]) => onChangeAudioTime(value),
    [onChangeAudioTime],
  );
  const onClickReplay = useCallback(
    () => onChangeAudioTime(timeRef.current - 10),
    [onChangeAudioTime, timeRef],
  );
  const onClickForward = useCallback(
    () => onChangeAudioTime(timeRef.current + 10),
    [onChangeAudioTime, timeRef],
  );

  return (
    <PlayerContainer>
      <AudioElement
        ref={playerRef}
        title={title}
        onPlay={onPlay}
        onPause={onPause}
        onDurationChange={onDurationChange}
        onTimeUpdate={onTimeUpdate}
        data-testid="audio-player"
        {...props}
      />
      <PlayerMeta
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        live={live}
        time={time}
        title={title}
        description={description}
        tags={tags}
      />
      {showControls && (
        <Slider
          min={0}
          minLabel="0.00"
          max={duration}
          maxLabel={maxTime}
          values={timeArr}
          step={1}
          onChange={onChangeSlider}
        />
      )}
      <ControlPanel>
        {showControls && <ReplayButton onClick={onClickReplay} />}
        <PlayerButton isPlaying={isPlaying} onClick={togglePlay} />
        {showControls && <ForwardButton onClick={onClickForward} />}
      </ControlPanel>
    </PlayerContainer>
  );
};
