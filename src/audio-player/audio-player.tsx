import React, {
  useRef,
  useState,
  ChangeEvent,
  useCallback,
  useEffect,
} from 'react';
import {getTrackBackground} from 'react-range';
import {
  PlayerButton,
  ForwardButton,
  ReplayButton,
  SkipPreviousButton,
  SkipNextButton,
  PopoutLink,
} from './controls';
import {
  PlayerMeta,
  PlayerMetaProps,
  AudioElement,
  AudioHandler,
  AudioElementProps,
} from './meta';
import {Slider, SliderProps} from '../slider';
import {StyledTrack} from '../slider/styled';
import {useTheme} from '../themes/emotion';
import {formatTrackData} from './utils';
import {getSingleStylePreset} from '../utils/style-preset';
import {Stack, StackDistribution, Flow} from '../stack';
import {PlayerContainer, ControlContainer} from './styled';
import {VolumeControl} from '../volume-control';

type EventListener = (event: ChangeEvent<HTMLAudioElement>) => void;

export interface AudioPlayerProps extends AudioElementProps, PlayerMetaProps {
  onNextTrack?: () => void;
  disableNextTrack?: boolean;
  onPreviousTrack?: () => void;
  disablePreviousTrack?: boolean;
  href?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  imgSrc,
  imgAlt,
  time,
  title,
  description,
  tags = [],
  live = false,
  onNextTrack,
  disableNextTrack,
  onPreviousTrack,
  disablePreviousTrack,
  href,
  ...props
}) => {
  const playerRef = useRef<AudioHandler>(null);

  /**
   * audio player volume controls
   */
  const [volume, setVolume] = useState(1);
  const onVolumeChange: EventListener = event => setVolume(event.target.volume);
  const onChangeVolume = useCallback(
    (newVolume: number) => {
      const playerNode = playerRef.current;
      if (playerNode) {
        setVolume(playerNode.setVolume(newVolume));
      }
    },
    [playerRef, setVolume],
  );

  /**
   * audio src duration handler
   */
  const [duration, setDuration] = useState(0);
  const onDurationChange: EventListener = event =>
    setDuration(event.target.duration);
  const showControls = !live;
  const maxTime = showControls
    ? new Date(duration * 1000).toISOString().substr(11, 8)
    : '0:00';

  /**
   * audio playback handlers
   */
  const [isPlaying, setIsPlaying] = useState(false);
  const onPlay = () => setIsPlaying(true);
  const onPause = () => setIsPlaying(false);
  const togglePlay = useCallback(() => {
    const playerNode = playerRef.current;
    if (playerNode) {
      setIsPlaying(playerNode.togglePlay(isPlaying));
    }
  }, [isPlaying, setIsPlaying, playerRef]);

  /**
   * audio time management callbacks
   *
   * this is to prevent recreation of all the event handlers on every audio time update
   * see https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
   */
  const [timeArr, setCurrentTime] = useState([0]);
  const [currentTime] = timeArr;
  const timeRef = useRef(0);
  useEffect(() => {
    timeRef.current = currentTime;
  });

  const [buffered, setBuffered] = useState<TimeRanges>();
  const onProgress: EventListener = event => {
    setBuffered(event.target.buffered);
  };

  const onTimeUpdate: EventListener = event => {
    const eventTime = Number(event.target.currentTime.toFixed(2));
    if (timeRef.current !== eventTime) {
      setCurrentTime([eventTime]);
    }
  };
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
  const onClickPrevious = useCallback(() => {
    if (timeRef.current > 5) {
      onChangeAudioTime(0);
    } else if (onPreviousTrack) {
      onPreviousTrack();
    }
  }, [onPreviousTrack, timeRef, onChangeAudioTime]);
  const onClickReplay = useCallback(
    () => onChangeAudioTime(timeRef.current - 10),
    [onChangeAudioTime, timeRef],
  );
  const onClickForward = useCallback(
    () => onChangeAudioTime(timeRef.current + 10),
    [onChangeAudioTime, timeRef],
  );

  /**
   * audio playback handlers
   */
  const theme = useTheme();
  const renderTrack: SliderProps['renderTrack'] = ({
    props: p,
    children,
    isDragged,
  }) => {
    const {values, colors} = formatTrackData(
      getSingleStylePreset(
        theme,
        'base',
        'backgroundColor',
        'audioPlayerTrack',
      ),
      getSingleStylePreset(
        theme,
        'base',
        'backgroundColor',
        'audioPlayerTrackIndicator',
      ),
      getSingleStylePreset(
        theme,
        'base',
        'backgroundColor',
        'audioPlayerTrackBuffering',
      ),
      timeArr,
      buffered,
    );

    return (
      <StyledTrack
        {...p}
        values={timeArr}
        isDragged={isDragged}
        $trackStylePreset="audioPlayerTrack"
        style={{
          background: getTrackBackground({
            values,
            colors,
            min: 0,
            max: duration,
          }),
        }}
        data-testid="slider-track"
      >
        {children}
      </StyledTrack>
    );
  };

  return (
    <PlayerContainer>
      <AudioElement
        ref={playerRef}
        title={title}
        onPlay={onPlay}
        onPause={onPause}
        onDurationChange={onDurationChange}
        onTimeUpdate={onTimeUpdate}
        onProgress={onProgress}
        onVolumeChange={onVolumeChange}
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
          minLabel="0:00"
          max={duration || 1}
          maxLabel={maxTime}
          values={timeArr}
          step={1}
          onChange={onChangeSlider}
          renderTrack={renderTrack}
        />
      )}
      <Stack
        flow={Flow.HorizontalCenter}
        stackDistribution={StackDistribution.SpaceBetween}
      >
        <ControlContainer>
          <VolumeControl volume={volume} onChange={onChangeVolume} />
        </ControlContainer>
        <div>
          <Stack
            flow={Flow.HorizontalCenter}
            stackDistribution={StackDistribution.Center}
          >
            {onPreviousTrack && (
              <SkipPreviousButton
                onClick={onClickPrevious}
                disabled={disablePreviousTrack}
              />
            )}
            {showControls && <ReplayButton onClick={onClickReplay} />}
            <PlayerButton isPlaying={isPlaying} onClick={togglePlay} />
            {showControls && <ForwardButton onClick={onClickForward} />}
            {onNextTrack && (
              <SkipNextButton
                onClick={onNextTrack}
                disabled={disableNextTrack}
              />
            )}
          </Stack>
        </div>
        <ControlContainer>
          <Stack
            flow={Flow.HorizontalCenter}
            stackDistribution={StackDistribution.End}
          >
            {href && <PopoutLink href={href} />}
          </Stack>
        </ControlContainer>
      </Stack>
    </PlayerContainer>
  );
};
