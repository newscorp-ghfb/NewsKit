import {useEffect} from 'react';
import {BreakpointKeys, Theme} from '../../../theme/types';
import {deepMerge} from '../../../utils/deep-merge';
import {mergeBreakpointObject} from '../../../utils/merge-breakpoint-object';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {AudioPlayerVolumeControlOverridesProps} from './types';

// This hook sets the initial volume. If `newskit-audioplayer-volume` is present
// it's value will be used. If not, the initialVolume will.
export const useInitialVolume = ({
  onChange,
  initialVolume,
}: {
  onChange: (value: number) => void;
  initialVolume: number;
}) => {
  useEffect(() => {
    const storedVolume = parseFloat(
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('newskit-audioplayer-volume')) ||
        '',
    );
    onChange(Number.isNaN(storedVolume) ? initialVolume : storedVolume);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export const getPopoverOverrides = (
  theme: Theme,
  overrides: AudioPlayerVolumeControlOverridesProps,
) => ({
  ...deepMerge(
    mergeBreakpointObject(Object.keys(theme.breakpoints) as BreakpointKeys[]),
    theme.componentDefaults.audioPlayerVolumeControl.popover,
    filterOutFalsyProperties(overrides.popover),
  ),
});
