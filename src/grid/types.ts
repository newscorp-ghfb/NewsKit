export interface GridProps {
  xsMargin?: string;
  smMargin?: string;
  mdMargin?: string;
  lgMargin?: string;
  xlMargin?: string;

  xsColumnGutter?: string;
  smColumnGutter?: string;
  mdColumnGutter?: string;
  lgColumnGutter?: string;
  xlColumnGutter?: string;

  xsRowGutter?: string;
  smRowGutter?: string;
  mdRowGutter?: string;
  lgRowGutter?: string;
  xlRowGutter?: string;
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
