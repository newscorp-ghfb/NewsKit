import {ToastPosition} from './types';

export const getHorizontalPosition = (position: ToastPosition) => {
  if (position.includes('right')) return 'flex-end';
  if (position.includes('left')) return 'flex-start';
  return 'center';
};

export const getVerticalPosition = (position: ToastPosition) => {
  if (position.includes('top')) return 'top';
  return 'bottom';
};

export const getSpaceBetweenToasts = (position: ToastPosition) => (
  space: string,
) => {
  const padding =
    getVerticalPosition(position) === 'top' ? 'paddingBottom' : 'paddingTop';
  return {[padding]: space};
};
