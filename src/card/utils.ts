import {getStylePreset} from '../utils/style';
import {CardOverridesProps} from './types';

export const isHorizontal = (layout?: string) =>
  layout && layout.includes('horizontal');

export const isReverse = (layout?: string): boolean =>
  Boolean(layout && layout.includes('reverse'));

export const filterInteractiveStates = (path: string, hasHref?: boolean) =>
  getStylePreset(
    `card${path ? `.${path}` : ''}`,
    path,
    hasHref ? {} : {omitStates: ['hover', 'active']},
  );
// We are checking if we have invalid ratio passed. Invalid would be anything that is not integer:integer
const validateRatios = (ratios: string) =>
  ratios
    .split(':', 2)
    .some((ratio: string) => !Number.isNaN(parseInt(ratio, 10)));

export const getHorizontalRatio = (
  layout: string,
  cardDefaults: {horizontalRatio: string},
  overrides: CardOverridesProps,
) => {
  // We are checking if horizontalRatio override is none, and if it is, we don't apply the flex property
  if (isHorizontal(layout) && overrides.horizontalRatio !== 'none') {
    const {horizontalRatio: horizontalRatioDefault} = cardDefaults;
    const ratio =
      overrides.horizontalRatio && validateRatios(overrides.horizontalRatio)
        ? overrides.horizontalRatio
        : horizontalRatioDefault;
    // In the event that the default horizontalRatio is not set or set to 'none', we don't apply the flex property.
    /* istanbul ignore else */
    if (ratio && ratio !== 'none') {
      const ratios = ratio.split(':', 2);
      return isReverse(layout) ? ratios.reverse() : ratios;
    }
  }
  // If we don't want to apply the flex property, we return an array of empty strings.
  return ['', ''];
};
