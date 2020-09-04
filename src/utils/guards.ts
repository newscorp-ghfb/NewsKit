import {FontConfig} from '../theme/foundations/fonts';

export const isFontConfigObject = (
  object: FontConfig | string | number,
): object is FontConfig =>
  typeof object !== 'number' &&
  typeof object !== 'string' &&
  typeof object === 'object' &&
  'fontFamily' in object;
