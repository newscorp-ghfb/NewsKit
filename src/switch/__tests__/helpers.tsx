import React from 'react';
import {SwitchOverrides, SwitchProps, SwitchState} from '../types';
import {BaseSwitchIconProps, BaseSwitchSize} from '../../base-switch/types';
import {
  IconFilledCheck,
  IconFilledClose,
  IconFilledDarkMode,
  IconFilledDragHandle,
  IconFilledLightMode,
} from '../../icons';

export const states: [string, {checked?: boolean; state?: SwitchState}][] = [
  ['base', {}],
  ['checked', {checked: true}],
  ['disabled', {state: 'disabled'}],
  ['checked-disabled', {checked: true, state: 'disabled'}],
];

export const sizes: BaseSwitchSize[] = ['small', 'medium', 'large'];

/* istanbul ignore next */
const DynamicThumbIcon = ({checked}: BaseSwitchIconProps) =>
  checked ? <IconFilledDarkMode /> : <IconFilledLightMode />;

export const icons: [
  string,
  Pick<SwitchOverrides, 'thumbIcon' | 'offIcon' | 'onIcon'>,
][] = [
  ['thumb-icon', {thumbIcon: DynamicThumbIcon}],
  ['on-icon', {onIcon: IconFilledCheck}],
  ['off-icon', {offIcon: IconFilledClose}],
  ['on-and-off-icon', {onIcon: IconFilledCheck, offIcon: IconFilledClose}],
  [
    'thumb-and-on-and-off-icon',
    {
      thumbIcon: DynamicThumbIcon,
      onIcon: IconFilledCheck,
      offIcon: IconFilledClose,
    },
  ],
];

export const sizeOverrides: [string, SwitchOverrides][] = [
  [
    'small-margin',
    {
      input: {spaceInline: '5px'},
      thumbIcon: IconFilledDragHandle,
      onIcon: IconFilledCheck,
      offIcon: IconFilledClose,
    },
  ],
  [
    'large-margin',
    {
      input: {spaceInline: '100px'},
      thumbIcon: IconFilledDragHandle,
      onIcon: IconFilledCheck,
      offIcon: IconFilledClose,
    },
  ],
  [
    'narrow-track-with-long-text-to-show-vertical-alignment',
    {
      input: {blockSize: '12px', paddingInline: '0px', marginBlock: '10px'},
      thumb: {stylePreset: 'borderedThumb', size: 'sizing060'},
      thumbIcon: IconFilledDragHandle,
      label: {stylePreset: 'controlLabel'},
    },
  ],
];

const shortLabel = 'Short label';
const longLabel =
  'Very long label... The array of dependencies is not passed as arguments to the effect function.';
export const labels: [string, SwitchProps][] = [
  ['start-short', {label: shortLabel, labelPosition: 'start'}],
  ['start-long', {label: longLabel, labelPosition: 'start'}],
  ['end-short', {label: shortLabel, labelPosition: 'end'}],
  ['end-long', {label: longLabel, labelPosition: 'end'}],
  [
    'narrow-track-short',
    {
      label: `${shortLabel} (narrow track)`,
      labelPosition: 'end',
      overrides: {
        input: {blockSize: '12px', marginBlock: '10px'},
        thumb: {stylePreset: 'borderedThumb'},
      },
    },
  ],
  [
    'narrow-track-long',
    {
      label: `${longLabel} (narrow track)`,
      labelPosition: 'end',
      overrides: {
        input: {blockSize: '12px', marginBlock: '10px'},
        thumb: {stylePreset: 'borderedThumb'},
      },
    },
  ],
];
