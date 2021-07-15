import {HTMLAttributes} from 'react';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
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

  maxWidth?: string;
}

export interface CellProps extends HTMLAttributes<HTMLDivElement> {
  xs?: number | 'full-width';
  sm?: number | 'full-width';
  md?: number | 'full-width';
  lg?: number | 'full-width';
  xl?: number | 'full-width';

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
