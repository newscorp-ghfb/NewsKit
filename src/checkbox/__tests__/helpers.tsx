import {SwitchBaseSize, SwitchBaseState} from '../../switch-base/types';

export const states: [
  string,
  {checked?: boolean; state?: SwitchBaseState},
][] = [
  ['base', {}],
  ['checked', {checked: true}],
  ['disabled', {state: 'disabled'}],
  ['checked-disabled', {checked: true, state: 'disabled'}],
  ['invalid', {state: 'invalid'}],
  ['invalid-checked', {state: 'invalid', checked: true}],
  ['valid', {state: 'valid'}],
  ['valid-checked', {state: 'valid', checked: true}],
];

export const sizes: SwitchBaseSize[] = ['small', 'medium', 'large'];
