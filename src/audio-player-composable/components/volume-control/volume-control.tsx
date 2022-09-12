import React, {useCallback, useEffect, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import {ScreenReaderOnly} from '../../../screen-reader-only';
import {Slider} from '../../../slider';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {getPopoverOverrides, useInitialVolume} from './utils';
import {useAudioPlayerContext} from '../../context';
import defaults from './defaults';
import {MuteButton} from './mute-button';
import {BreakpointKeys, useTheme} from '../../../theme';
import stylePresets from './style-presets';
import {AudioPlayerVolumeControlProps} from './types';
import {GridLayoutItem} from '../../../grid-layout';
import {
  StyledBlock,
  StyledGridLayout,
  StyledVolumeSliderContainer,
  StyledVolumeSliderPopupContainer,
} from './styled';
import {useReactKeys} from '../../../utils/hooks';
import {deepMerge} from '../../../utils/deep-merge';
import {mergeBreakpointObject} from '../../../utils/merge-breakpoint-object';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {getTransitionDuration} from '../../../utils';
import {getTransitionClassName} from '../../../utils/get-transition-class-name';
import {Popover} from '../../../popover';

const ThemelessAudioPlayerVolumeControl = React.forwardRef<
  HTMLDivElement,
  AudioPlayerVolumeControlProps
>((props, ref) => {
  const {getVolumeControlProps} = useAudioPlayerContext();
  const {
    volume,
    onChange,
    layout = 'horizontal-expanded',
    keyboardShortcuts,
    overrides,
    initialVolume,
    muteButtonSize,
  } = getVolumeControlProps!(props);

  const [unMutedVolume, setUnMutedVolume] = useState(volume);

  useEffect(() => {
    // Saves the volume into a state,
    // for re-using it when clicking the mute unmute button.
    if (unMutedVolume !== volume && volume > 0) {
      setUnMutedVolume(volume);
    }
  }, [unMutedVolume, volume]);

  const theme = useTheme();

  const buttonOverrides = {
    ...deepMerge(
      mergeBreakpointObject(Object.keys(theme.breakpoints) as BreakpointKeys[]),
      theme.componentDefaults.audioPlayerVolumeControl.button,
      filterOutFalsyProperties(overrides.button),
    ),
  };

  const sliderOverrides = {
    ...deepMerge(
      mergeBreakpointObject(Object.keys(theme.breakpoints) as BreakpointKeys[]),
      theme.componentDefaults.audioPlayerVolumeControl.slider,
      filterOutFalsyProperties(overrides.slider),
    ),
  };

  const onSliderChange = useCallback(
    ([newVolume]: number[]) => onChange(newVolume),
    [onChange],
  );

  // useInitialVolume Sets the initial volume on page load
  useInitialVolume({onChange, initialVolume});

  const [volumeSliderInstructionId] = useReactKeys(1);
  // opens volume control on hover/focus when layout = horizontalExpandable.
  const [open, setOpen] = useState(false);
  const setOpenHandler = useCallback<(state: boolean) => void>(
    state => {
      if (layout === 'horizontal' || layout === 'vertical') {
        setOpen(state);
      }
    },
    [setOpen, layout],
  );

  // makes sure feedback element is fully visible and not cropped when slider is open and user hover/focus on it.
  const [isVisible, setIsVisible] = React.useState(false);
  const setIsVisibleHandler = useCallback<(state: boolean) => void>(
    state => {
      if (layout === 'horizontal') {
        setIsVisible(state);
      }
    },
    [setIsVisible, layout],
  );

  const useSliderContainer =
    layout === 'horizontal' || layout === 'horizontal-expanded';

  // used for collapsed and vertical
  const gridSingleAreas = 'muteButton';
  // used for horizontal and horizontal expanded
  const gridMultipleAreas = 'muteButton slider';
  // used for collapsed and vertical
  const gridColumnsSingle = '1fr';
  // used for horizontal and horizontal expanded
  const gridColumnsMultiple = 'auto 1fr';
  const gridAreas = useSliderContainer ? gridMultipleAreas : gridSingleAreas;
  const gridColumns = useSliderContainer
    ? gridColumnsMultiple
    : gridColumnsSingle;

  const sliderComponent = (
    <Slider
      vertical={layout === 'vertical'}
      min={0}
      max={1}
      step={0.1}
      values={[volume]}
      onChange={onSliderChange}
      ariaLabel="Volume Control"
      ariaValueText={`volume level ${[volume][0] * 10} of 10`}
      dataTestId="volume-control-slider"
      ariaDescribedBy={volumeSliderInstructionId}
      overrides={sliderOverrides}
    />
  );

  const verticalMuteButton = (
    <StyledBlock overrides={overrides}>
      <MuteButton
        volume={volume}
        unMutedVolume={unMutedVolume}
        onChange={onChange}
        size={muteButtonSize || 'medium'}
        muteKeyboardShortcuts={keyboardShortcuts?.muteToggle}
        overrides={buttonOverrides}
      />
    </StyledBlock>
  );
  const horizontalMuteButton = (
    <MuteButton
      volume={volume}
      unMutedVolume={unMutedVolume}
      onChange={onChange}
      size={muteButtonSize || 'medium'}
      muteKeyboardShortcuts={keyboardShortcuts?.muteToggle}
      overrides={buttonOverrides}
    />
  );

  const popoverOverrides = getPopoverOverrides(theme, overrides);

  return (
    <StyledGridLayout
      ref={ref}
      onFocus={() => setOpenHandler(true)}
      onBlur={() => setOpenHandler(false)}
      onMouseEnter={() => setOpenHandler(true)}
      onMouseLeave={() => setOpenHandler(false)}
      columns={gridColumns}
      areas={gridAreas}
      justifyItems="start"
      alignItems="center"
      overrides={overrides}
    >
      <GridLayoutItem area="muteButton">
        <Popover
          hidePointer
          open={layout === 'vertical' && open}
          content={
            <StyledVolumeSliderPopupContainer overrides={overrides}>
              {sliderComponent}
            </StyledVolumeSliderPopupContainer>
          }
          id="volume-control-slider-popup"
          header={undefined}
          closePosition="none"
          disableFocusManagement
          overrides={popoverOverrides}
        >
          {layout === 'vertical' ? verticalMuteButton : horizontalMuteButton}
        </Popover>
      </GridLayoutItem>
      {useSliderContainer && (
        <GridLayoutItem area="slider">
          <CSSTransition
            in={open}
            timeout={getTransitionDuration(
              `audioPlayerVolumeControl`,
              '',
            )({theme, overrides})}
            classNames="nk-vc"
            appear
            onEnter={() => setIsVisibleHandler(true)}
            onExited={() => setIsVisibleHandler(false)}
          >
            {(state: string) => (
              <StyledVolumeSliderContainer
                className={getTransitionClassName('nk-vc', state)}
                layout={layout}
                overrides={overrides}
                open={open}
                visible={isVisible}
              >
                {sliderComponent}
              </StyledVolumeSliderContainer>
            )}
          </CSSTransition>
          <ScreenReaderOnly id={volumeSliderInstructionId} aria-hidden="true">
            Use the arrow keys to adjust volume
          </ScreenReaderOnly>
        </GridLayoutItem>
      )}
    </StyledGridLayout>
  );
});

export const AudioPlayerVolumeControl = withOwnTheme(
  ThemelessAudioPlayerVolumeControl,
)({defaults, stylePresets});
