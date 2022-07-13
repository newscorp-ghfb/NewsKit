import {BreakpointKeys, Theme} from '../../../theme';
import {deepMerge} from '../../../utils';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {mergeBreakpointObject} from '../../../utils/merge-breakpoint-object';
import {AudioPlayerPlaybackSpeedControlOverridesProps} from './types';

export const iconButtonOverrides = (
  theme: Theme,
  overrides: AudioPlayerPlaybackSpeedControlOverridesProps,
) => ({
  ...deepMerge(
    mergeBreakpointObject(Object.keys(theme.breakpoints) as BreakpointKeys[]),
    theme.componentDefaults.audioPlayerPlaybackSpeedControl.iconButton,
    filterOutFalsyProperties(overrides.iconButton),
  ),
});

export const popoverOverrides = (
  theme: Theme,
  overrides: AudioPlayerPlaybackSpeedControlOverridesProps,
) => ({
  ...deepMerge(
    mergeBreakpointObject(Object.keys(theme.breakpoints) as BreakpointKeys[]),
    theme.componentDefaults.audioPlayerPlaybackSpeedControl.popover,
    filterOutFalsyProperties(overrides.popover),
  ),
});

export const selectionListOverrides = (
  theme: Theme,
  overrides: AudioPlayerPlaybackSpeedControlOverridesProps,
) => ({
  ...deepMerge(
    mergeBreakpointObject(Object.keys(theme.breakpoints) as BreakpointKeys[]),
    theme.componentDefaults.audioPlayerPlaybackSpeedControl.selectionList,
    filterOutFalsyProperties(overrides.selectionList),
  ),
});

export const selectionListOptionOverrides = (
  theme: Theme,
  overrides: AudioPlayerPlaybackSpeedControlOverridesProps,
) => ({
  ...deepMerge(
    mergeBreakpointObject(Object.keys(theme.breakpoints) as BreakpointKeys[]),
    theme.componentDefaults.audioPlayerPlaybackSpeedControl.selectionListOption,
    filterOutFalsyProperties(overrides.selectionListOptions),
  ),
});

export const modalOverrides = (
  theme: Theme,
  overrides: AudioPlayerPlaybackSpeedControlOverridesProps,
) => ({
  ...deepMerge(
    mergeBreakpointObject(Object.keys(theme.breakpoints) as BreakpointKeys[]),
    theme.componentDefaults.audioPlayerPlaybackSpeedControl.modal,
    filterOutFalsyProperties(overrides.modal),
  ),
});
