import {SizingKeys} from '../themes';

export interface GridProps {
  xsMargin?: SizingKeys;
  smMargin?: SizingKeys;
  mdMargin?: SizingKeys;
  lgMargin?: SizingKeys;

  xsColumnGutter?: SizingKeys;
  smColumnGutter?: SizingKeys;
  mdColumnGutter?: SizingKeys;
  lgColumnGutter?: SizingKeys;

  xsRowGutter?: SizingKeys;
  smRowGutter?: SizingKeys;
  mdRowGutter?: SizingKeys;
  lgRowGutter?: SizingKeys;
}

export interface CellProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;

  xsHidden?: boolean;
  smHidden?: boolean;
  mdHidden?: boolean;
  lgHidden?: boolean;

  xsOrder?: number;
  smOrder?: number;
  mdOrder?: number;
  lgOrder?: number;
}
