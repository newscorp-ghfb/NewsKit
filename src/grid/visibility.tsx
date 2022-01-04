import {DisplayProperty} from 'csstype';
import {styled, ThemeProp, css} from '../utils/style';
import {BreakpointKeys} from '../themes/newskit-light/breakpoints';
import {getMediaQueryFromTheme} from '../utils/responsive-helpers';

export interface VisibilityProps {
  $display?: DisplayProperty;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}

const generateBreakpointConfig = (
  visibleOnTrue: boolean,
  breakpoint: BreakpointKeys,
) => ({$display = 'block', ...props}: VisibilityProps & ThemeProp) => {
  const onTrue = visibleOnTrue ? $display : 'none';
  const onFalse = visibleOnTrue ? 'none' : $display;
  return css`
    ${getMediaQueryFromTheme(breakpoint)(props)} {
      display: ${props[breakpoint] ? onTrue : onFalse};
    }
  `;
};

export const Visible = styled.div<VisibilityProps>`
  ${generateBreakpointConfig(true, 'xs')};
  ${generateBreakpointConfig(true, 'sm')};
  ${generateBreakpointConfig(true, 'md')};
  ${generateBreakpointConfig(true, 'lg')};
`;

export const Hidden = styled.div<VisibilityProps>`
  ${generateBreakpointConfig(false, 'xs')};
  ${generateBreakpointConfig(false, 'sm')};
  ${generateBreakpointConfig(false, 'md')};
  ${generateBreakpointConfig(false, 'lg')};
`;
