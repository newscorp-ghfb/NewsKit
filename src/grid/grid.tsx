import React from 'react';
import {styled, getGridSettingFromTheme, css, ThemeProp} from '../utils/style';
import {getMediaQueryFromTheme} from '../utils/responsive-helpers';
import {BreakpointKeys} from '../themes/newskit-light/breakpoints';
import {withTheme} from '../themes';
import {GridContextProvider} from './context';
import {GridProps} from './types';
import {getOverridableProp, OverrideProp} from './utils';

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
  max-width: ${getGridSettingFromTheme('maxWidth')}px;
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

export const Grid = withTheme<GridProps>(({theme, children, ...props}) => (
  <GridContextProvider value={props}>
    <StyledGridContainer>
      <StyledGrid {...props}>{children}</StyledGrid>
    </StyledGridContainer>
  </GridContextProvider>
));
