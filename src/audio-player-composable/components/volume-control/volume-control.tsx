import React, {useCallback, useEffect, useState} from 'react';
import {ScreenReaderOnly} from '../../../screen-reader-only';
import {Slider} from '../../../slider';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {getTokensForVolumeControl, useInitialVolume} from './utils';
import {useAudioPlayerContext} from '../../context';
import defaults from './defaults';
import {MuteButton} from './mute-button';
import {BreakpointKeys, useTheme} from '../../../theme';
import stylePresets from './style-presets';
import {AudioPlayerVolumeControlProps} from './types';
import {GridLayoutItem} from '../../../grid-layout';
import {
  StyledGridLayout,
  StyledGridLayoutItem,
  VolumeSliderContainer,
} from './styled';
import {useReactKeys} from '../../../utils/hooks';
import { deepMerge } from '../../../utils/deep-merge';
import { mergeBreakpointObject } from '../../../utils/merge-breakpoint-object';
import { filterOutFalsyProperties } from '../../../utils/filter-object';
import { ButtonSize } from '../../../button/types';

const ThemelessAudioPlayerVolumeControl: React.FC<AudioPlayerVolumeControlProps> = props => {
  const {getVolumeControlProps} = useAudioPlayerContext();
  const {
    volume,
    onChange,
    vertical,
    collapsed = false,
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
  },[unMutedVolume, volume])

  const theme = useTheme();
  const {
    volumeControlButtonStylePreset,
    iconSize,
  } = getTokensForVolumeControl(theme, overrides);


  const sliderOverrides =  {
    ...deepMerge(
      mergeBreakpointObject(Object.keys(theme.breakpoints) as BreakpointKeys[]),
      theme.componentDefaults.audioPlayerVolumeControl.slider,
      /* istanbul ignore next */
      filterOutFalsyProperties(overrides?.slider),
    ),
  };

  const onSliderChange = useCallback(([newVolume]) => onChange(newVolume), [
    onChange,
  ]);

  // useInitialVolume Sets the initial volume on page load
  useInitialVolume({onChange, initialVolume});

  const verticalAreas = `slider
                         muteButton`;
  const gridAreas = vertical ? verticalAreas : `muteButton slider`;
  const gridColumns = vertical ? '1fr' : 'auto 1fr';
  const [volumeSliderInstructionId] = useReactKeys(1);

  return (
    <StyledGridLayout
      columns={gridColumns}
      areas={gridAreas}
      justifyItems={vertical ? 'center' : 'start'}
      alignItems="center"
      vertical={vertical}
    >
      <GridLayoutItem area="muteButton">
        <MuteButton
          volume={volume}
          unMutedVolume={unMutedVolume}
          volumeControlButtonStylePreset={volumeControlButtonStylePreset}
          onChange={onChange}
          size={muteButtonSize || ButtonSize.Small}
          iconSize={iconSize}
          muteKeyboardShortcuts={keyboardShortcuts?.muteButton}
        />
      </GridLayoutItem>
      {!collapsed && (
        <StyledGridLayoutItem area="slider" vertical={vertical}>
          <VolumeSliderContainer vertical={vertical}>
            <Slider
              vertical={vertical}
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
            <ScreenReaderOnly id={volumeSliderInstructionId} aria-hidden="true">
              Use the arrow keys to adjust volume
            </ScreenReaderOnly>
          </VolumeSliderContainer>
        </StyledGridLayoutItem>
      )}
    </StyledGridLayout>
  );
};

export const AudioPlayerVolumeControl = withOwnTheme(
  ThemelessAudioPlayerVolumeControl,
)({defaults, stylePresets});
