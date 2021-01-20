import React, {useContext} from 'react';
import {styled, css, CSSObject} from '../utils/style';
import {getMediaQueryFromTheme} from '../utils/responsive-helpers';
import {GridContext} from './context';
import {GridProps, CellProps} from './types';
import {
  breakpointKeys,
  getInheritedValue,
  getOverridableProp,
  OverrideProp,
  reverseBreakpointKeys,
} from './utils';
import {ThemeProp} from '../utils/style-types';
import {BreakpointKeys} from '../theme';

const cleanCss = (
  acc: Record<BreakpointKeys, CSSObject>,
  breakpoint: BreakpointKeys,
  i: number,
): Record<BreakpointKeys, CSSObject> => {
  const cellCss = acc[breakpoint];
  // If we are on XS breakpoint then remove unneeded 0's etc
  if (breakpoint === 'xs') {
    if (cellCss.display === 'block') {
      delete cellCss.display;
    }
    ['padding', 'margin-top', 'margin-left'].forEach(k => {
      if (cellCss[k] === 0) {
        delete cellCss[k];
      }
    });
    return acc;
  }

  // On XL to SM, remove properties which will be inherited
  // e.g. if padding css is rendered at MD, we dont need to render it out at LG and XL if unchanged.
  const prevCellCss = acc[reverseBreakpointKeys[i + 1]];
  [
    'display',
    'order',
    'padding',
    'flex-basis',
    'max-width',
    'margin-top',
    'margin-left',
  ].forEach(k => {
    if (cellCss[k] === prevCellCss[k]) {
      delete cellCss[k];
    }
  });

  return acc;
};

const generateBreakpointConfig = (props: CellProps & GridProps & ThemeProp) => {
  const {theme} = props;
  // Generate the CSS for each breakpoint
  const cssObjects = breakpointKeys.reduce(
    (acc, breakpoint) => {
      const cellCss: CSSObject = {};
      if (props[`${breakpoint}Hidden` as keyof CellProps]) {
        cellCss.display = 'none';
      } else {
        // Get props/default values we need
        const halfColumnGutter =
          getOverridableProp(OverrideProp.ColumnGutter, breakpoint, props) / 2;
        const rowGutter = getOverridableProp(
          OverrideProp.RowGutter,
          breakpoint,
          props,
        );

        const colOffset = parseInt(
          getInheritedValue(OverrideProp.Offset, breakpoint, props) || '0',
          10,
        );
        const colSpan =
          getInheritedValue(OverrideProp.Span, breakpoint, props) || 1;

        // Common CSS
        cellCss.display = 'block';
        cellCss.order =
          (props[
            `${breakpoint}Order` as keyof CellProps
          ] as CellProps['xsOrder']) || undefined;
        cellCss.padding = halfColumnGutter ? `0 ${halfColumnGutter}px` : 0;
        cellCss['margin-top'] = rowGutter ? `${rowGutter}px` : 0;

        // Specific CSS to either numeric span or full-width
        if (colSpan === 'full-width') {
          // Full width (12 span and breaks out of margin) Cell
          const margin = getOverridableProp(
            OverrideProp.Margin,
            breakpoint,
            props,
          );
          cellCss['flex-basis'] = `calc(100% + ${margin * 2}px)`;
          cellCss['max-width'] = `calc(100% + ${margin * 2}px)`;
          cellCss['margin-left'] = margin ? `-${margin}px` : 0;
        } else {
          // Standard 1-12 column spanning Cell
          const colWidth = 100 / theme.componentDefaults.grid.columns;
          const width = +colSpan * colWidth;
          const offsetColumnGutter = colOffset * colWidth;
          cellCss['margin-left'] =
            offsetColumnGutter > 0 ? `${offsetColumnGutter}%;` : undefined;
          cellCss['flex-basis'] = `${width}%`;
          cellCss['max-width'] = `${width}%`;
        }
      }
      acc[breakpoint] = cellCss;
      return acc;
    },
    {} as Record<BreakpointKeys, CSSObject>,
  );

  // Filter out unneeded CSS, working down from XL
  reverseBreakpointKeys.reduce(cleanCss, cssObjects);

  // Render out each breakpoints (cleaned) CSS
  return css`
    ${breakpointKeys.reduce(
      (acc, k) => {
        acc[getMediaQueryFromTheme(k)({theme})] = cssObjects[k];
        return acc;
      },
      {} as Record<string, CSSObject>,
    )};
  `;
};

const StyledCell = styled.div<CellProps & GridProps>`
  box-sizing: border-box;
  background-clip: padding-box;
  flex: 1 0 auto;
  ${generateBreakpointConfig};
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
