import {Cell, withDefaultProps} from 'newskit';

export const ComponentPageCell = withDefaultProps(Cell, {
  xs: 12,
  md: 10,
  lg: 8,
  mdOffset: 1,
});

export const ComponentPageCellCompact = withDefaultProps(Cell, {
  xs: 12,
  md: 8,
  lg: 6,
  mdOffset: 1,
});
