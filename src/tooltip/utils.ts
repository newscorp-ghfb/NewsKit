import {Axis, Placement, Side} from '@floating-ui/react-dom-interactions';

export function getSide(placement: Placement): Side {
  return placement.split('-')[0] as Side;
}

export function getOffsetAxis(placement: Placement): Axis {
  return !['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
}

export function getOffsetAxisDirection(placement: Placement): 1 | -1 {
  return ['left', 'top'].includes(getSide(placement)) ? -1 : 1;
}

export function calculateInset(
  value: number | undefined,
  axis: 'x' | 'y',
  offset: string | undefined,
  placement: Placement,
): string {
  if (value === null) {
    return '';
  }
  const offsetAxis = getOffsetAxis(placement);
  if (!offset || offsetAxis !== axis) {
    return `${value}px`;
  }
  const dir = getOffsetAxisDirection(placement);
  return `calc(${value}px + (${offset} * ${dir}))`;
}
