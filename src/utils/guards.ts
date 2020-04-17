import {FontConfig} from '../themes/newskit-light/fonts';

export const isFontConfigObject = (
  object: FontConfig | string | number,
): object is FontConfig =>
  typeof object !== 'number' &&
  typeof object !== 'string' &&
  typeof object === 'object' &&
  'fontFamily' in object;
