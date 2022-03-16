import {CheckboxState, CheckboxSize} from '../types';

export const states: [string, {checked?: boolean; state?: CheckboxState}][] = [
  ['default', {}],
  ['checked', {checked: true}],
  ['disabled', {state: 'disabled'}],
  ['checked-disabled', {checked: true, state: 'disabled'}],
  ['invalid', {state: 'invalid'}],
  ['invalid-checked', {state: 'invalid', checked: true}],
  ['valid', {state: 'valid'}],
  ['valid-checked', {state: 'valid', checked: true}],
];

export const sizes: CheckboxSize[] = ['small', 'medium', 'large'];
