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
import {useTheme, Devices} from '../theme';
import {getSingleStylePreset} from '../utils/style-preset';
import {getBuiId} from '../utils/get-bui-id';
import {LabelPosition} from '../slider/types';
import {AudioPlayerProps} from './types';
import {useAudioFunctions} from './audio-functions';
import {StackChild} from '../stack-child';
import {ScreenReaderOnly} from '../screen-reader-only/screen-reader-only';
import {getToken} from '../utils/get-token';
import {filterOutFalsyProperties} from '../utils/filter-object';

export const AudioPlayer: React.FC<AudioPlayerProps> = props => {
  const {
    onNextTrack,
    disableNextTrack,
    onPreviousTrack,
    disablePreviousTrack = !onPreviousTrack,
    popoutHref,
    overrides = {},
    src,
    ariaLandmark = 'audio player',
    autoPlay,
    children,
    live = false,
    captionSrc,
    onPlay: onPlayProp,
    ...restProps
  } = props;

  const {
    seekBar: {slider: seekBarSliderOverrides} = {},
    controls: {
      popoutButton: popoutButtonOverrides,
      ...controlButtonsOverrides
    } = {},
    volumeControl: volumeControlOverrides,
  } = overrides;

  const theme = useTheme();
  const {
    seekBar: {slider: seekBarSliderDefaults},
    controls: {popoutButton: popoutButtonDefaults, ...controlButtonsDefaults},
    volumeControl: volumeControlDefaults,
  } = theme.componentDefaults.audioPlayer;

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

  const handleOnPlay = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    if (onPlayProp) {
      onPlayProp(e);
    }
    onPlay();
  };

  const renderTrack: SliderProps['renderTrack'] = useCallback(
    ({props: trackProps, children: trackChildren, isDragged}) => {
      const sliderTrackStylePreset = getToken(
        {theme, overrides},
        'audioPlayer.seekBar.slider.track',
        'seekBar.slider.track',
        'stylePreset',
      );
      const sliderIndicatorTrackStylePreset = getToken(
        {theme, overrides},
        'audioPlayer.seekBar.slider.indicator',
        'seekBar.slider.indicator',
        'stylePreset',
      );
      const bufferingStylePreset = getToken(
        {theme, overrides},
        'audioPlayer.seekBar.buffering',
        'seekBar.buffering',
        'stylePreset',
      );

      const {values, colors} = formatTrackData(
        getSingleStylePreset(
          theme,
          'base',
          'backgroundColor',
          sliderTrackStylePreset,
        ),
        getSingleStylePreset(
          theme,
          'base',
          'backgroundColor',
          sliderIndicatorTrackStylePreset,
        ),
        getSingleStylePreset(
          theme,
          'base',
          'backgroundColor',
          bufferingStylePreset,
        ),
        trackPositionArr,
        buffered,
      );

      return (
        <StyledTrack
          {...trackProps}
          values={trackPositionArr}
          isDragged={isDragged}
          onKeyDown={e => {
            const spaceKeyCode = 32;
            /* istanbul ignore next */
            if (e.keyCode === spaceKeyCode) e.preventDefault();
          }}
          style={{
            background: getTrackBackground({
              values,
              colors,
              min: 0,
              max: Math.floor(duration),
            }),
          }}
          data-testid="audio-slider-track"
          overrides={{
            ...seekBarSliderDefaults,
            ...filterOutFalsyProperties(seekBarSliderOverrides),
          }}
        >
          {trackChildren}
        </StyledTrack>
      );
    },
    [
      buffered,
      duration,
      overrides,
      seekBarSliderDefaults,
      seekBarSliderOverrides,
      theme,
      trackPositionArr,
    ],
  );

  const showControls = !live;
  const formattedDuration = showControls ? formatDuration(displayDuration) : '';
  const formattedTime = showControls
    ? formatTrackTime(trackPositionArr[0], duration)
    : '';

  const srOnlyForwardRewind = getBuiId();

  return (
    <PlayerContainer aria-label={ariaLandmark}>
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
          onPlay={handleOnPlay}
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
                overrides={{
                  ...controlButtonsDefaults,
                  ...filterOutFalsyProperties(controlButtonsOverrides),
                }}
              />
            </StackChild>
            <StackChild order={1}>
              <ControlContainer
                playerTrackSize="sizing050"
                xs
                sm
                targetDevices={[Devices.iPadPro, Devices.iPad]}
              >
                <VolumeControl
                  volume={volume}
                  onChange={onChangeVolumeSlider}
                  overrides={{
                    ...volumeControlDefaults,
                    ...filterOutFalsyProperties(volumeControlOverrides),
                  }}
                />
              </ControlContainer>
            </StackChild>
            <StackChild order={3}>
              <ControlContainer
                playerTrackSize="sizing050"
                xs
                sm
                targetDevices={[Devices.iPadPro, Devices.iPad]}
              >
                <Stack
                  flow={Flow.VerticalRight}
                  stackDistribution={StackDistribution.End}
                >
                  {popoutHref && (
                    <PopoutButton
                      onClick={onPopoutClick}
                      href={popoutHref}
                      overrides={{
                        ...popoutButtonDefaults,
                        ...filterOutFalsyProperties(popoutButtonOverrides),
                      }}
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
              onChange={onChangeSlider}
              renderTrack={renderTrack}
              labelPosition={LabelPosition.After}
              dataTestId="audio-slider"
              ariaDescribedBy={srOnlyForwardRewind}
              overrides={{
                ...seekBarSliderDefaults,
                ...filterOutFalsyProperties(seekBarSliderOverrides),
              }}
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
