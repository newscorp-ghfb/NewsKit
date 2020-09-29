import {SizingKeys} from '../theme';

export interface GridProps {
  xsMargin?: SizingKeys;
  smMargin?: SizingKeys;
  mdMargin?: SizingKeys;
  lgMargin?: SizingKeys;
  xlMargin?: SizingKeys;

  xsColumnGutter?: SizingKeys;
  smColumnGutter?: SizingKeys;
  mdColumnGutter?: SizingKeys;
  lgColumnGutter?: SizingKeys;
  xlColumnGutter?: SizingKeys;

  xsRowGutter?: SizingKeys;
  smRowGutter?: SizingKeys;
  mdRowGutter?: SizingKeys;
  lgRowGutter?: SizingKeys;
  xlRowGutter?: SizingKeys;
}

export interface CellProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;

  xsHidden?: boolean;
  smHidden?: boolean;
  mdHidden?: boolean;
  lgHidden?: boolean;
  xlHidden?: boolean;

  xsOrder?: number;
  smOrder?: number;
  mdOrder?: number;
  lgOrder?: number;
  xlOrder?: number;

  xsOffset?: number;
  smOffset?: number;
  mdOffset?: number;
  lgOffset?: number;
  xlOffset?: number;
}
