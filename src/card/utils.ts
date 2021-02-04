import {getStylePreset} from '../utils/style';

export const isHorizontal = (layout?: string) =>
  layout && layout.includes('horizontal');

export const isReverse = (layout?: string) =>
  layout && layout.includes('reverse');

export const filterInteractiveStates = (path: string, hasHref?: boolean) =>
  getStylePreset(
    `card${path ? `.${path}` : ''}`,
    path,
    hasHref ? {} : {omitStates: ['hover', 'active']},
  );
