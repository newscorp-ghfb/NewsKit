import React, {useCallback, useEffect, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import {ScreenReaderOnly} from '../../../screen-reader-only';
import {Slider} from '../../../slider';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useInitialVolume} from './utils';
import {useAudioPlayerContext} from '../../context';
import defaults from './defaults';
import {MuteButton} from './mute-button';
import {BreakpointKeys, useTheme} from '../../../theme';
import stylePresets from './style-presets';
import {AudioPlayerVolumeControlProps} from './types';
import {GridLayoutItem} from '../../../grid-layout';
import {
  StyledGridLayout,
  StyledVolumeSliderContainer,
  VolumeControlContainer,
} from './styled';
import {useReactKeys} from '../../../utils/hooks';
import {deepMerge} from '../../../utils/deep-merge';
import {mergeBreakpointObject} from '../../../utils/merge-breakpoint-object';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {ButtonSize} from '../../../button/types';
import {getTransitionDuration} from '../../../utils';
import {getTransitionClassName} from '../../../utils/get-transition-class-name';

const ThemelessAudioPlayerVolumeControl = React.forwardRef<
  HTMLDivElement,
  AudioPlayerVolumeControlProps
>((props, ref) => {
  const {getVolumeControlProps} = useAudioPlayerContext();
  const {
    volume,
    onChange,
    layout = 'horizontalExpandable',
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

  const verticalAreas = `slider
                         muteButton`;
  const gridAreas = layout === 'vertical' ? verticalAreas : `muteButton slider`;
  const gridColumns = layout === 'vertical' ? '1fr' : 'auto 1fr';
  const [volumeSliderInstructionId] = useReactKeys(1);
  // opens volume control on hover/focus when layout = horizontalExpandable.
  const [open, setOpen] = useState(false);
  // makes sure feedback element is fully visible and not cropped when slider is open and user hover/focus on it.
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <VolumeControlContainer
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      layout={layout}
    >
      <StyledGridLayout
        ref={ref}
        columns={gridColumns}
        areas={gridAreas}
        justifyItems={layout === 'vertical' ? 'center' : 'start'}
        alignItems="center"
        layout={layout}
        overrides={overrides}
      >
        <GridLayoutItem area="muteButton">
          <MuteButton
            volume={volume}
            unMutedVolume={unMutedVolume}
            onChange={onChange}
            size={muteButtonSize || ButtonSize.Medium}
            muteKeyboardShortcuts={keyboardShortcuts?.muteToggle}
            overrides={buttonOverrides}
          />
        </GridLayoutItem>
        <GridLayoutItem area="slider">
          <CSSTransition
            in={open}
            timeout={getTransitionDuration(
              `audioPlayerVolumeControl`,
              '',
            )({theme, overrides})}
            classNames="nk-vc"
            appear
            onEnter={() => setIsVisible(true)}
            onExited={() => setIsVisible(false)}
          >
            {(state: string) => (
              <StyledVolumeSliderContainer
                className={getTransitionClassName('nk-vc', state)}
                layout={layout}
                overrides={overrides}
                open={open}
                visible={isVisible}
              >
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
              </StyledVolumeSliderContainer>
            )}
          </CSSTransition>
          <ScreenReaderOnly id={volumeSliderInstructionId} aria-hidden="true">
            Use the arrow keys to adjust volume
          </ScreenReaderOnly>
        </GridLayoutItem>
      </StyledGridLayout>
    </VolumeControlContainer>
  );
});

export const AudioPlayerVolumeControl = withOwnTheme(
  ThemelessAudioPlayerVolumeControl,
)({defaults, stylePresets});
