import {SwitchOverrides, SwitchProps, SwitchState} from '../types';
import {BaseSwitchSize} from '../../base-switch/types';
import {IconFilledCheck, IconFilledClose, IconFilledError} from '../..';

export const states: [string, {checked?: boolean; state?: SwitchState}][] = [
  ['base', {}],
  ['checked', {checked: true}],
  ['disabled', {state: 'disabled'}],
  ['checked-disabled', {checked: true, state: 'disabled'}],
];

export const sizes: BaseSwitchSize[] = ['small', 'medium', 'large'];

export const icons: [
  string,
  Pick<SwitchOverrides, 'icon' | 'offIcon' | 'onIcon'>,
][] = [
  ['thumb-icon', {icon: IconFilledError}],
  ['on-icon', {onIcon: IconFilledCheck}],
  ['off-icon', {offIcon: IconFilledClose}],
  ['on-and-off-icon', {onIcon: IconFilledCheck, offIcon: IconFilledClose}],
  [
    'thumb-and-on-and-off-icon',
    {icon: IconFilledError, onIcon: IconFilledCheck, offIcon: IconFilledClose},
  ],
];

export const sizeOverrides: [string, SwitchOverrides][] = [
  ['small-margin', {input: {spaceInline: '5px'}}],
  ['large-margin', {input: {spaceInline: '100px'}}],
  ['narrow-track-no-padding', {input: {blockSize: '12px', spaceInset: '0px'}}],
  ['wide-track', {input: {blockSize: '120px'}}],
  ['long-track', {input: {inlineSize: '200px'}}],
  ['small-thumb', {thumb: {size: '10px'}}],
  ['large-thumb', {thumb: {size: '32px'}}],
  [
    'small-feedback',
    {feedback: {size: '27px'}, input: {blockSize: '12px', spaceInset: '0px'}},
  ],
  ['large-feedback', {feedback: {size: '100px'}}],
];

const shortLabel = 'Short label';
const longLabel =
  'Very long label... The array of dependencies is not passed as arguments to the effect function.';
export const labels: [
  string,
  {label: string; labelPosition: SwitchProps['labelPosition']},
][] = [
  ['start-short', {label: shortLabel, labelPosition: 'start'}],
  ['start-long', {label: longLabel, labelPosition: 'start'}],
  ['end-short', {label: shortLabel, labelPosition: 'end'}],
  ['end-long', {label: longLabel, labelPosition: 'end'}],
];
