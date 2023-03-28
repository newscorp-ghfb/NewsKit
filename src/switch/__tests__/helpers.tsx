import React from 'react';
import {SwitchOverrides, SwitchState} from '../types';
import {
  BaseSwitchIconProps,
  BaseSwitchLabelPosition,
  BaseSwitchSize,
} from '../../base-switch/types';
import {
  IconFilledCheck,
  IconFilledClose,
  IconFilledDarkMode,
  IconFilledLightMode,
} from '../../icons';

export const states: [string, {checked?: boolean; state?: SwitchState}][] = [
  ['Base', {}],
  ['Checked', {checked: true}],
  ['Disabled', {state: 'disabled'}],
  ['Checked disabled', {checked: true, state: 'disabled'}],
];

export const sizes: BaseSwitchSize[] = ['small', 'medium', 'large'];

/* istanbul ignore next */
const DynamicThumbIcon = ({checked}: BaseSwitchIconProps) =>
  !checked ? <IconFilledDarkMode /> : <IconFilledLightMode />;

export const icons: [
  string,
  {overrides: SwitchOverrides; defaultChecked: boolean},
][] = [
  [
    'Thumb icon',
    {overrides: {thumbIcon: DynamicThumbIcon}, defaultChecked: true},
  ],
  ["'On' icon", {overrides: {onIcon: IconFilledCheck}, defaultChecked: true}],
  [
    "'Off' icon",
    {overrides: {offIcon: IconFilledClose}, defaultChecked: false},
  ],
  [
    "'On' and 'Off' icon",
    {
      overrides: {onIcon: IconFilledCheck, offIcon: IconFilledClose},
      defaultChecked: true,
    },
  ],
  [
    'Thumb and track icons',
    {
      overrides: {
        thumbIcon: DynamicThumbIcon,
        onIcon: IconFilledCheck,
        offIcon: IconFilledClose,
      },
      defaultChecked: true,
    },
  ],
];

export const StyledIconCheck = () => (
  <IconFilledCheck overrides={{stylePreset: 'customTrackIcon', size: '15px'}} />
);
export const StyledIconClose = () => (
  <IconFilledClose overrides={{stylePreset: 'customTrackIcon', size: '15px'}} />
);

export const overrideScenarios: [string, SwitchOverrides][] = [
  [
    'Narrow track',
    {
      input: {blockSize: '12px', paddingInline: '0px', marginBlock: '10px'},
      thumb: {stylePreset: 'borderedThumb', size: 'sizing060'},
    },
  ],
  [
    'Icon size',
    {
      onIcon: StyledIconCheck,
      offIcon: StyledIconClose,
    },
  ],
  [
    'Logical props',
    {
      marginInline: '20px',
    },
  ],
  [
    'Custom outline',
    {
      input: {
        stylePreset: 'outlinedInput',
      },
    },
  ],
];

export const labelPositions: BaseSwitchLabelPosition[] = ['end', 'start'];
