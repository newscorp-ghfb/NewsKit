import React, {
  useRef,
  useState,
  ChangeEvent,
  useCallback,
  useEffect,
} from 'react';
import {getTrackBackground} from 'react-range';
import {
  TrackControlProps,
  ControlPanel,
  ControlPresets,
  PopoutButton,
} from './controls';
import {AudioElement} from './audio-element';
import {SliderStylePresets, Slider, SliderProps} from '../slider';
import {Stack, StackDistribution, Flow} from '../stack';
import {PlayerContainer, ControlContainer} from './styled';
import {VolumeControl} from '../volume-control';
import {Cell} from '../grid/cell';
import {formatTrackTime, formatTrackData} from './utils';
import {StyledTrack} from '../slider/styled';
import {useTheme} from '../themes/emotion';
import {getSingleStylePreset} from '../utils/style-preset';
import {useInstrumentation, EventTrigger} from '../instrumentation';
import {LabelPosition} from '../slider/types';

type EventListener = (event: ChangeEvent<HTMLAudioElement>) => void;

export interface AudioPlayerProps
  extends React.AudioHTMLAttributes<HTMLAudioElement>,
    TrackControlProps {
  captionSrc?: string;
  popoutHref?: string;
  $volumePresets?: SliderStylePresets;
  $trackPresets?: SliderStylePresets & {$bufferingStylePreset?: string};
  $controlPresets?: Partial<ControlPresets>;
  live?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = props => {
  const {
    title,
    onNextTrack,
    disableNextTrack,
    onPreviousTrack,
    disablePreviousTrack,
    popoutHref,
    $volumePresets,
    $trackPresets,
    $controlPresets,
    src,
    children,
    live = false,
    ...restProps
  } = props;

  const {fireEvent} = useInstrumentation();

  const volumePresets: Required<AudioPlayerProps['$volumePresets']> = {
    $sliderIndicatorTrackStylePreset: 'volumeControlTrackIndicator',
    $sliderThumbStylePreset: 'volumeControlThumb',
    $sliderLabelsStylePreset: 'volumeControlButtons',
    $sliderThumbLabelStylePreset: 'volumeControlLabels',
    $sliderTrackStylePreset: 'volumeControlTrack',
    ...$volumePresets,
  };
  const trackPresets: Required<AudioPlayerProps['$trackPresets']> = {
    $sliderIndicatorTrackStylePreset: 'audioPlayerSeekBarIndicator',
    $sliderThumbStylePreset: 'audioPlayerThumb',
    $sliderLabelsStylePreset: 'audioPlayerLabels',
    $sliderThumbLabelStylePreset: 'audioPlayerLabels',
    $sliderTrackStylePreset: 'audioPlayerSeekBarTrack',
    $bufferingStylePreset: 'audioPlayerSeekBarBuffering',
    ...$trackPresets,
  };
  const controlPresets: Required<AudioPlayerProps['$controlPresets']> = {
    previous: 'audioPlayerControlButton',
    replay: 'audioPlayerControlButton',
    play: 'audioPlayerPlayPauseButton',
    forward: 'audioPlayerControlButton',
    next: 'audioPlayerControlButton',
    popout: 'audioPlayerControlButton',
    ...$controlPresets,
  };

  /**
   * audio player volume controls
   */
  const [volume, setVolume] = useState(1);
  const onVolumeChange: EventListener = event => setVolume(event.target.volume);

  /**
   * audio src duration handler
   */
  const [duration, setDuration] = useState(0);
  const onDurationChange: EventListener = event =>
    setDuration(event.target.duration);

  // When the src changes, clear the old duration (will be set again when data loads).
  useEffect(() => {
    setDuration(0);
  }, [src]);

  /**
   * audio playback handlers
   */
  const [isPlaying, setPlayState] = useState(false);
  const play = () => {
    if (!isPlaying) {
      setPlayState(true);

      fireEvent({
        originator: 'audio-player',
        trigger: EventTrigger.Start,
        data: {
          src,
          title,
        },
      });
    }
  };

  const pause = () => {
    if (isPlaying) {
      setPlayState(false);

      fireEvent({
        originator: 'audio-player',
        trigger: EventTrigger.Stop,
        data: {
          src,
          title,
        },
      });
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }

    fireEvent({
      originator: 'audio-player-play-button',
      trigger: EventTrigger.Click,
      data: {
        src,
        title,
      },
    });
  };

  /**
   * audio time management callbacks
   *
   * this is to prevent recreation of all the event handlers on every audio time update
   * see https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
   */
  const [trackPositionArr, setTrackPosition] = useState([0]);
  const [trackPosition] = trackPositionArr;
  const trackPositionRef = useRef(0);
  useEffect(() => {
    trackPositionRef.current = trackPosition;
  });

  const [buffered, setBuffered] = useState<TimeRanges>();
  const onProgress: EventListener = event => {
    setBuffered(event.target.buffered);
  };

  // newTime is a prop used to force the player to change time (used to change via slider)
  // it does not maintain the audio element current time
  const [newTime, setNewPlayerTime] = useState(-1);

  const onTimeUpdate: EventListener = event => {
    const eventTime = Math.round(event.target.currentTime);
    if (trackPositionRef.current !== eventTime) {
      setTrackPosition([eventTime]);
    }
    // Used to reset newTime after the player changes time. Used to fix issues regarding consecutive audio time change to the same value
    if (newTime !== -1) {
      setNewPlayerTime(-1);
    }
  };

  const onChangeAudioTime = useCallback(
    (playerTime: number) => {
      let newPlayerTime = playerTime;

      if (newPlayerTime < 0) {
        newPlayerTime = 0;
      }
      if (newPlayerTime > duration) {
        newPlayerTime = duration;
      }

      setTrackPosition([newPlayerTime]);
      // This sets a prop on the audio element, forcing it to a new time
      // We let player maintain its play time state, we just control the new time to set to when changing it via slider.
      setNewPlayerTime(newPlayerTime);
    },
    [setTrackPosition, duration],
  );

  const onChangeSlider = useCallback(
    ([value]: number[]) => {
      onChangeAudioTime(value);
    },
    [onChangeAudioTime],
  );

  const onClickPrevious = useCallback(() => {
    fireEvent({
      originator: 'audio-player-skip-previous-button',
      trigger: EventTrigger.Click,
      data: {
        src,
        title,
      },
    });
    if (trackPositionRef.current > 5) {
      onChangeAudioTime(0);
    } else {
      onPreviousTrack!();
    }
  }, [
    onPreviousTrack,
    fireEvent,
    src,
    title,
    trackPositionRef,
    onChangeAudioTime,
  ]);

  const onClickNext = useCallback(() => {
    fireEvent({
      originator: 'audio-player-skip-next-button',
      trigger: EventTrigger.Click,
      data: {
        src,
        title,
      },
    });
    onNextTrack!();
  }, [onNextTrack, fireEvent, src, title]);

  const onClickReplay = useCallback(() => {
    fireEvent({
      originator: 'audio-player-replay-button',
      trigger: EventTrigger.Click,
      data: {
        src,
        title,
      },
    });
    onChangeAudioTime(trackPositionRef.current - 10);
  }, [fireEvent, onChangeAudioTime, src, title, trackPositionRef]);

  const onClickForward = useCallback(() => {
    fireEvent({
      originator: 'audio-player-forward-button',
      trigger: EventTrigger.Click,
      data: {
        src,
        title,
      },
    });
    onChangeAudioTime(trackPositionRef.current + 10);
  }, [fireEvent, onChangeAudioTime, src, title, trackPositionRef]);

  const onEnded = useCallback(() => {
    fireEvent({
      originator: 'audio-player',
      trigger: EventTrigger.End,
      data: {
        src,
        title,
      },
    });
  }, [fireEvent, src, title]);

  /**
   * audio playback handlers
   */
  const theme = useTheme();
  const renderTrack: SliderProps['renderTrack'] = ({
    props: trackProps,
    children: trackChildren,
    isDragged,
  }) => {
    const {values, colors} = formatTrackData(
      getSingleStylePreset(
        theme,
        'base',
        'backgroundColor',
        trackPresets.$sliderTrackStylePreset,
      ),
      getSingleStylePreset(
        theme,
        'base',
        'backgroundColor',
        trackPresets.$sliderIndicatorTrackStylePreset,
      ),
      getSingleStylePreset(
        theme,
        'base',
        'backgroundColor',
        trackPresets.$bufferingStylePreset,
      ),
      trackPositionArr,
      buffered,
    );

    return (
      <StyledTrack
        {...trackProps}
        values={trackPositionArr}
        isDragged={isDragged}
        $stylePreset={trackPresets.$sliderTrackStylePreset}
        $trackSize="sizing020"
        $thumbSize="sizing040"
        style={{
          background: getTrackBackground({
            values,
            colors,
            min: 0,
            max: duration,
          }),
        }}
        data-testid="audio-slider-track"
      >
        {trackChildren}
      </StyledTrack>
    );
  };

  const showControls = !live;
  const formattedDuration = showControls ? formatTrackTime(duration) : '';
  const formattedTime = showControls
    ? formatTrackTime(trackPosition, duration)
    : '';

  return (
    <PlayerContainer
      xsMargin="sizing000"
      xsColumnGutter="sizing000"
      xsRowGutter="sizing000"
    >
      <AudioElement
        src={src}
        title={title}
        playing={isPlaying}
        onPlay={play}
        onPause={pause}
        onDurationChange={onDurationChange}
        onTimeUpdate={onTimeUpdate}
        onProgress={onProgress}
        onVolumeChange={onVolumeChange}
        onEnded={onEnded}
        data-testid="audio-player"
        volume={volume}
        newTime={newTime}
        {...restProps}
      />

      {children && <Cell xs={12}>{children}</Cell>}

      {showControls && (
        <Cell xs={12}>
          <Slider
            min={0}
            minLabel={formattedTime}
            max={duration || 1}
            maxLabel={formattedDuration}
            values={trackPositionArr}
            step={1}
            $thumbSize="sizing040"
            $trackSize="sizing020"
            onChange={onChangeSlider}
            renderTrack={renderTrack}
            labelPosition={LabelPosition.After}
            dataTestId="audio-slider"
            {...trackPresets}
          />
        </Cell>
      )}

      <Cell xs={12}>
        <Stack
          flow={Flow.HorizontalCenter}
          stackDistribution={StackDistribution.SpaceBetween}
        >
          <ControlContainer $playerTrackSize="sizing050" xs sm>
            <VolumeControl
              volume={volume}
              onChange={setVolume}
              $trackSize="sizing010"
              $thumbSize="sizing040"
              {...volumePresets}
            />
          </ControlContainer>
          <ControlPanel
            onNextTrack={onNextTrack ? onClickNext : undefined}
            disableNextTrack={disableNextTrack}
            onPreviousTrack={onPreviousTrack ? onClickPrevious : undefined}
            disablePreviousTrack={disablePreviousTrack}
            showControls={showControls}
            isPlaying={isPlaying}
            onClickReplay={onClickReplay}
            onClickForward={onClickForward}
            togglePlay={togglePlay}
            $controlPresets={controlPresets}
          />
          <ControlContainer $playerTrackSize="sizing050" xs sm>
            <Stack
              flow={Flow.VerticalRight}
              stackDistribution={StackDistribution.End}
            >
              {popoutHref && (
                <PopoutButton
                  onClick={pause}
                  href={popoutHref}
                  $stylePreset={controlPresets.popout}
                />
              )}
            </Stack>
          </ControlContainer>
        </Stack>
      </Cell>
    </PlayerContainer>
  );
};
