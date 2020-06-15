/* eslint-disable jsx-a11y/media-has-caption */
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  MutableRefObject,
} from 'react';
import {getTrackBackground} from 'react-range';
import {ControlPanel, PopoutButton} from './controls';
import {Slider, SliderProps} from '../slider';
import {Stack, StackDistribution, Flow} from '../stack';
import {PlayerGrid, ControlContainer, PlayerContainer} from './styled';
import {VolumeControl} from '../volume-control';
import {Cell} from '../grid/cell';
import {
  formatTrackTime,
  formatTrackData,
  formatDuration,
  seekBarAriaValueText,
} from './utils';
import {StyledTrack} from '../slider/styled';
import {useTheme} from '../themes/emotion';

import {getSingleStylePreset} from '../utils/style-preset';
import {getBuiId} from '../utils/get-bui-id';
import {LabelPosition} from '../slider/types';
import {AudioPlayerProps} from './types';
import {useAudioFunctions} from './audio-functions';
import {StackChild} from '../stack-child';
import {ScreenReaderOnly} from '../screen-reader-only/screen-reader-only';

export const AudioPlayer: React.FC<AudioPlayerProps> = props => {
  const {
    onNextTrack,
    disableNextTrack,
    onPreviousTrack,
    disablePreviousTrack = !onPreviousTrack,
    popoutHref,
    volumePresets,
    trackPresets,
    controlPresets,
    src,
    autoPlay,
    children,
    live = false,
    captionSrc,
    ...restProps
  } = props;

  const volumePresetObj: Required<AudioPlayerProps['volumePresets']> = {
    sliderIndicatorTrackStylePreset: 'volumeControlTrackIndicator',
    sliderThumbStylePreset: 'volumeControlThumb',
    sliderLabelsStylePreset: 'volumeControlButtons',
    sliderThumbLabelStylePreset: 'volumeControlLabels',
    sliderTrackStylePreset: 'volumeControlTrack',
    ...volumePresets,
  };
  const trackPresetObj: Required<AudioPlayerProps['trackPresets']> = {
    sliderIndicatorTrackStylePreset: 'audioPlayerSeekBarIndicator',
    sliderThumbStylePreset: 'audioPlayerThumb',
    sliderLabelsStylePreset: 'audioPlayerLabels',
    sliderThumbLabelStylePreset: 'audioPlayerLabels',
    sliderTrackStylePreset: 'audioPlayerSeekBarTrack',
    bufferingStylePreset: 'audioPlayerSeekBarBuffering',
    ...trackPresets,
  };
  const controlPresetObj: Required<AudioPlayerProps['controlPresets']> = {
    previous: 'audioPlayerControlButton',
    replay: 'audioPlayerControlButton',
    play: 'audioPlayerPlayPauseButton',
    forward: 'audioPlayerControlButton',
    next: 'audioPlayerControlButton',
    popout: 'audioPlayerControlButton',
    ...controlPresets,
  };

  const [volume, setVolume] = useState(0);
  const [duration, setDuration] = useState(0);
  const [displayDuration, setDisplayDuration] = useState(0);
  const [trackPositionArr, setTrackPosition] = useState([0]);
  const [isPlaying, setPlayState] = useState(false);
  const [buffered, setBuffered] = useState<TimeRanges>();
  const [isLoading, setIsLoading] = useState(true);

  const [isPrevTrackBtnDisabled, setIsPrevTrackBtnDisabled] = useState(
    Boolean(disablePreviousTrack),
  );

  const trackPositionRef = useRef(0);

  const showLoaderTimeoutRef: MutableRefObject<number> = useRef(0);

  useEffect(() => {
    [trackPositionRef.current] = trackPositionArr;
  });

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setTrackPosition([0]);
    setDisplayDuration(0);
  }, [src]);

  const {
    onClickPrevious,
    onClickNext,
    onClickBackward,
    onClickForward,
    onPopoutClick,
    togglePlay,
    onCanPlay,
    onWaiting,
    onPlay,
    onPause,
    onProgress,
    onDurationChange,
    onTimeUpdate,
    onVolumeChange,
    onEnded,
    onChangeSlider,
    onChangeVolumeSlider,
  } = useAudioFunctions({
    onPreviousTrack,
    onNextTrack,
    autoPlay,
    disablePreviousTrack,
    src,
    live,
    duration,
    isLoading,
    isPlaying,
    trackPositionRef,
    audioRef,
    showLoaderTimeoutRef,
    setIsLoading,
    setTrackPosition,
    setPlayState,
    setVolume,
    setDuration,
    setBuffered,
    setDisplayDuration,
    setIsPrevTrackBtnDisabled,
  });

  const theme = useTheme();
  const renderTrack: SliderProps['renderTrack'] = useCallback(
    ({props: trackProps, children: trackChildren, isDragged}) => {
      const {values, colors} = formatTrackData(
        getSingleStylePreset(
          theme,
          'base',
          'backgroundColor',
          trackPresetObj.sliderTrackStylePreset,
        ),
        getSingleStylePreset(
          theme,
          'base',
          'backgroundColor',
          trackPresetObj.sliderIndicatorTrackStylePreset,
        ),
        getSingleStylePreset(
          theme,
          'base',
          'backgroundColor',
          trackPresetObj.bufferingStylePreset,
        ),
        trackPositionArr,
        buffered,
      );

      return (
        <StyledTrack
          {...trackProps}
          values={trackPositionArr}
          isDragged={isDragged}
          stylePreset={trackPresetObj.sliderTrackStylePreset}
          trackSize="sizing020"
          thumbSize="sizing040"
          style={{
            background: getTrackBackground({
              values,
              colors,
              min: 0,
              max: Math.floor(duration),
            }),
          }}
          data-testid="audio-slider-track"
        >
          {trackChildren}
        </StyledTrack>
      );
    },
    [
      buffered,
      duration,
      theme,
      trackPositionArr,
      trackPresetObj.bufferingStylePreset,
      trackPresetObj.sliderIndicatorTrackStylePreset,
      trackPresetObj.sliderTrackStylePreset,
    ],
  );

  const showControls = !live;
  const formattedDuration = showControls ? formatDuration(displayDuration) : '';
  const formattedTime = showControls
    ? formatTrackTime(trackPositionArr[0], duration)
    : '';

  const srOnlyForwardRewind = getBuiId();

  return (
    <PlayerContainer aria-label="audio player">
      <PlayerGrid
        xsMargin="sizing000"
        xsColumnGutter="sizing000"
        xsRowGutter="sizing000"
      >
        <audio
          ref={audioRef}
          src={src}
          onCanPlay={onCanPlay}
          onWaiting={onWaiting}
          onPlay={onPlay}
          onPause={onPause}
          onVolumeChange={onVolumeChange}
          onDurationChange={onDurationChange}
          onTimeUpdate={onTimeUpdate}
          onProgress={onProgress}
          onEnded={onEnded}
          data-testid="audio-element"
          autoPlay={autoPlay}
          {...restProps}
        >
          {captionSrc && <track kind="captions" src={captionSrc} />}
        </audio>

        {children && <Cell xs={12}>{children}</Cell>}

        <Cell xsOrder={2} xs={12}>
          <Stack
            flow={Flow.HorizontalCenter}
            stackDistribution={StackDistribution.SpaceBetween}
          >
            <StackChild order={2}>
              <ControlPanel
                onNextTrack={onNextTrack ? onClickNext : undefined}
                disableNextTrack={disableNextTrack}
                onPreviousTrack={onClickPrevious}
                disablePreviousTrack={isPrevTrackBtnDisabled}
                live={live}
                showControls={showControls}
                isLoading={isLoading}
                isPlaying={isPlaying}
                onClickBackward={onClickBackward}
                onClickForward={onClickForward}
                togglePlay={togglePlay}
                controlPresets={controlPresetObj}
              />
            </StackChild>
            <StackChild order={1}>
              <ControlContainer playerTrackSize="sizing050" xs sm>
                <VolumeControl
                  volume={volume}
                  onChange={onChangeVolumeSlider}
                  trackSize="sizing010"
                  thumbSize="sizing040"
                  {...volumePresetObj}
                />
              </ControlContainer>
            </StackChild>
            <StackChild order={3}>
              <ControlContainer playerTrackSize="sizing050" xs sm>
                <Stack
                  flow={Flow.VerticalRight}
                  stackDistribution={StackDistribution.End}
                >
                  {popoutHref && (
                    <PopoutButton
                      onClick={onPopoutClick}
                      href={popoutHref}
                      stylePreset={controlPresetObj.popout}
                    />
                  )}
                </Stack>
              </ControlContainer>
            </StackChild>
          </Stack>
        </Cell>

        {showControls && (
          <Cell xsOrder={1} xs={12}>
            <Slider
              min={0}
              minLabel={formattedTime}
              max={Math.floor(duration) || 1}
              maxLabel={formattedDuration}
              values={trackPositionArr}
              step={1}
              ariaLabel="seek bar"
              ariaValueText={`Playback time: ${seekBarAriaValueText(
                trackPositionArr,
              )} of ${seekBarAriaValueText([duration])}`}
              thumbSize="sizing040"
              trackSize="sizing020"
              onChange={onChangeSlider}
              renderTrack={renderTrack}
              labelPosition={LabelPosition.After}
              dataTestId="audio-slider"
              ariaDescribedBy={srOnlyForwardRewind}
              {...trackPresets}
            />
            <ScreenReaderOnly id={srOnlyForwardRewind}>
              Use the arrow keys to fast forward or rewind
            </ScreenReaderOnly>
          </Cell>
        )}
      </PlayerGrid>
    </PlayerContainer>
  );
};
