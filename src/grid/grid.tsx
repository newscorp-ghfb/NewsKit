import React from 'react';
import {styled, css} from '../utils/style';
import {getMediaQueryFromTheme} from '../utils/responsive-helpers';
import {BreakpointKeys, componentDefaults} from '../theme';
import {GridContextProvider} from './context';
import {GridProps} from './types';
import {getOverridableProp, OverrideProp} from './utils';
import {ThemeProp} from '../utils/style-types';

const generateBreakpointConfig = (breakpoint: BreakpointKeys) => ({
  theme,
  ...props
}: GridProps & ThemeProp) => {
  const halfColumnGutter =
    getOverridableProp(OverrideProp.ColumnGutter, breakpoint, {
      theme,
      ...props,
    }) / 2;
  const rowGutter = getOverridableProp(OverrideProp.RowGutter, breakpoint, {
    theme,
    ...props,
  });
  const containerMargin = getOverridableProp(OverrideProp.Margin, breakpoint, {
    theme,
    ...props,
  });
  const sideMargin = containerMargin - halfColumnGutter;

  return css`
    ${getMediaQueryFromTheme(breakpoint)({theme})} {
      margin: -${rowGutter}px ${sideMargin}px 0 ${sideMargin}px;
    }
  `;
};

const StyledGridContainer = styled.div<GridProps>`
  width: 100%;
  max-width: ${componentDefaults.grid.maxWidth}px;
  margin: 0 auto;
`;

const StyledGrid = styled.div<GridProps>`
  box-sizing: border-box;
  background-clip: padding-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  ${generateBreakpointConfig('xs')};
  ${generateBreakpointConfig('sm')};
  ${generateBreakpointConfig('md')};
  ${generateBreakpointConfig('lg')};
`;

export const Grid: React.FC<GridProps> = ({children, ...props}) => (
  <GridContextProvider value={props}>
    <StyledGridContainer>
      <StyledGrid {...props}>{children}</StyledGrid>
    </StyledGridContainer>
  </GridContextProvider>
);
