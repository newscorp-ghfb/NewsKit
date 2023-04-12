import {BaseSwitchSize, BaseSwitchState} from '../../base-switch/types';

export const states: [
  string,
  {checked?: boolean; state?: BaseSwitchState},
][] = [
  ['Base', {checked: false}],
  ['Checked', {checked: true}],
  ['Invalid', {checked: false, state: 'invalid'}],
  ['Invalid checked', {checked: true, state: 'invalid'}],
  ['Valid', {checked: false, state: 'valid'}],
  ['Valid checked', {checked: true, state: 'valid'}],
  ['Checked disabled', {checked: true, state: 'disabled'}],
  ['Disabled', {state: 'disabled'}],
];

export const sizes: BaseSwitchSize[] = ['small', 'medium', 'large'];
