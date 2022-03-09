import {SwitchBaseSize, SwitchBaseState} from '../../switch-base/types';

export const states: [
  string,
  {checked?: boolean; state?: SwitchBaseState},
][] = [
  ['default', {checked: false}],
  ['checked', {checked: true}],
  ['disabled', {state: 'disabled'}],
  ['checked-disabled', {checked: true, state: 'disabled'}],
  ['invalid', {checked: false, state: 'invalid'}],
  ['invalid-checked', {checked: true, state: 'invalid'}],
  ['valid', {checked: false, state: 'valid'}],
  ['valid-checked', {checked: true, state: 'valid'}],
];

export const sizes: SwitchBaseSize[] = ['small', 'medium', 'large'];
