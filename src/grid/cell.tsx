import React, {useContext} from 'react';
import {styled, ThemeProp, css} from '../utils/style';
import {BreakpointKeys} from '../themes';
import {getMediaQueryFromTheme} from '../utils/responsive-helpers';
import {GridContext} from './context';
import {GridProps, CellProps} from './types';
import {getOverridableProp, OverrideProp} from './utils';

const generateBreakpointConfig = (breakpoint: BreakpointKeys) => ({
  theme,
  ...props
}: CellProps & GridProps & ThemeProp) => {
  // Props for the breakpoint we're generating for.
  const hidden = Boolean(props[`${breakpoint}Hidden` as keyof CellProps]);
  const order =
    (props[`${breakpoint}Order` as keyof CellProps] as CellProps['xsOrder']) ||
    undefined;
  const colOffset =
    Number(props[`${breakpoint}Offset` as keyof CellProps] as CellProps) || 0;

  // Calculations
  const colSpan = props[breakpoint] || (breakpoint === 'xs' ? 1 : 0);
  const colWidth = 100 / theme.grid.columns;
  const width = colSpan * colWidth;
  const offsetColumnGutter = colOffset * colWidth;
  const halfColumnGutter =
    getOverridableProp(OverrideProp.ColumnGutter, breakpoint, {
      theme,
      ...props,
    }) / 2;
  const rowGutter = getOverridableProp(OverrideProp.RowGutter, breakpoint, {
    theme,
    ...props,
  });

  return css`
    ${getMediaQueryFromTheme(breakpoint)({theme})} {
      padding: 0 ${halfColumnGutter}px;
      ${offsetColumnGutter > 0 ? `margin-left: ${offsetColumnGutter}%;` : ''}
      margin-top: ${rowGutter}px;
      flex-basis: ${width ? `${width}%` : undefined};
      max-width: ${width ? `${width}%` : undefined};
      display: ${hidden ? 'none' : 'block'};
      order: ${order};
    }
  `;
};

const StyledCell = styled.div<CellProps & GridProps>`
  box-sizing: border-box;
  background-clip: padding-box;
  flex: 1 0 auto;

  ${generateBreakpointConfig('xs')};
  ${generateBreakpointConfig('sm')};
  ${generateBreakpointConfig('md')};
  ${generateBreakpointConfig('lg')};
`;

const filterGridOverrides = (
  gridOverrides: GridProps & React.ComponentProps<'div'>,
) => {
  const overrides = {...gridOverrides};
  delete overrides.className;
  return overrides;
};

export const Cell: React.FC<CellProps> = props => {
  const gridOverrides = useContext(GridContext);
  return <StyledCell {...filterGridOverrides(gridOverrides)} {...props} />;
};
