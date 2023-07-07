import {FontConfig} from '../theme/foundations/fonts';
import {FontMetrics} from '../../src/utils/text-crop';

export const isFontConfigObject = (
  object: FontConfig | string | number,
): object is FontConfig =>
  typeof object !== 'number' &&
  typeof object !== 'string' &&
  typeof object === 'object' &&
  'fontFamily' in object;

export const isFontMetricsObject = (
  object: FontMetrics,
): object is FontMetrics =>
  typeof object === 'object' &&
  'capHeight' in object &&
  'ascent' in object &&
  'descent' in object &&
  'lineGap' in object &&
  'unitsPerEm' in object;
