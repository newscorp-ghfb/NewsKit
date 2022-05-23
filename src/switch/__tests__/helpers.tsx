import {SwitchOverrides, SwitchProps, SwitchState} from '../types';
import {BaseSwitchSize} from '../../base-switch/types';
import {
  IconFilledCheck,
  IconFilledClose,
  IconFilledDragHandle,
  TransitionToken,
} from '../..';

export const states: [string, {checked?: boolean; state?: SwitchState}][] = [
  ['base', {}],
  ['checked', {checked: true}],
  ['disabled', {state: 'disabled'}],
  ['checked-disabled', {checked: true, state: 'disabled'}],
];

export const sizes: BaseSwitchSize[] = ['small', 'medium', 'large'];

export const icons: [
  string,
  Pick<SwitchOverrides, 'thumbIcon' | 'offIcon' | 'onIcon'>,
][] = [
  ['thumb-icon', {thumbIcon: IconFilledDragHandle}],
  ['on-icon', {onIcon: IconFilledCheck}],
  ['off-icon', {offIcon: IconFilledClose}],
  ['on-and-off-icon', {onIcon: IconFilledCheck, offIcon: IconFilledClose}],
  [
    'thumb-and-on-and-off-icon',
    {
      thumbIcon: IconFilledDragHandle,
      onIcon: IconFilledCheck,
      offIcon: IconFilledClose,
    },
  ],
];

const slowTransition: TransitionToken = {
  extend: 'shiftAbsolute',
  base: {
    transitionDuration: '1000ms',
  },
};

export const sizeOverrides: [string, SwitchOverrides][] = [
  ['small-margin', {input: {spaceInline: '5px'}}],
  ['large-margin', {input: {spaceInline: '100px'}}],
  [
    'narrow-track-with-long-text-to-show-vertical-alignment',
    {
      input: {blockSize: '12px', paddingInline: '0px', marginBlock: '10px'},
      thumb: {stylePreset: 'borderedThumb'},
    },
  ],
  ['wide-track', {input: {blockSize: '120px'}}],
  ['long-track', {input: {inlineSize: '200px'}}],
  ['small-thumb', {thumb: {size: '10px'}}],
  ['large-thumb', {thumb: {size: '32px'}}],
  [
    'small-feedback',
    {
      feedback: {size: '27px'},
      input: {blockSize: '12px', marginBlock: '10px', paddingInline: '0px'},
      thumb: {stylePreset: 'borderedThumb'},
    },
  ],
  ['large-feedback', {feedback: {size: '100px'}}],
  [
    'slow-transition',
    {
      feedback: {transitionPreset: [slowTransition, 'opacityChange']},
      thumb: {transitionPreset: [slowTransition]},
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
