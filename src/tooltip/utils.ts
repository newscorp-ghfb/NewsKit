import {Axis, Placement, Side} from '@floating-ui/react-dom-interactions';

export function getSide(placement: Placement): Side {
  return placement.split('-')[0] as Side;
}

export function getOffsetAxis(side: Side): Axis {
  return !['top', 'bottom'].includes(side) ? 'x' : 'y';
}

export function getOffsetAxisDirection(side: Side): 1 | -1 {
  return ['left', 'top'].includes(side) ? -1 : 1;
}

export function calculateInset(
  insetValue: number | undefined | null,
  insetSide: Side,
  offsetValue: string | undefined,
  tooltipPlacement: Placement,
): string {
  if (insetValue === null || insetValue === undefined) {
    return '';
  }
  const offsetSide = getSide(tooltipPlacement);
  const insetAxis = getOffsetAxis(insetSide);
  const offsetAxis = getOffsetAxis(offsetSide);
  if (!offsetValue || offsetAxis !== insetAxis) {
    return `${insetValue}px`;
  }
  const dir = getOffsetAxisDirection(offsetSide);
  return `calc(${insetValue}px + (${offsetValue} * ${dir}))`;
}
