import React from 'react';
import {DisplayProperty} from 'csstype';
import {styled, css} from '../utils/style';
import {BreakpointKeys} from '../themes/newskit-light/breakpoints';
import {getMediaQueryFromTheme} from '../utils/responsive-helpers';
import {ThemeProp} from '../utils/style-types';

interface CommonProps {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}

interface InternalProps extends CommonProps {
  $display?: DisplayProperty;
}

export interface VisibilityProps extends CommonProps {
  display?: DisplayProperty;
}

const generateBreakpointConfig = (
  visibleOnTrue: boolean,
  breakpoint: BreakpointKeys,
) => ({$display = 'block', ...props}: InternalProps & ThemeProp) => {
  const onTrue = visibleOnTrue ? $display : 'none';
  const onFalse = visibleOnTrue ? 'none' : $display;
  return css`
    ${getMediaQueryFromTheme(breakpoint)(props)} {
      display: ${props[breakpoint] ? onTrue : onFalse};
    }
  `;
};

const StyledVisible = styled.div<InternalProps>`
  ${generateBreakpointConfig(true, 'xs')};
  ${generateBreakpointConfig(true, 'sm')};
  ${generateBreakpointConfig(true, 'md')};
  ${generateBreakpointConfig(true, 'lg')};
`;

export const Visible: React.FC<VisibilityProps> = ({display, ...props}) => (
  <StyledVisible {...props} $display={display} />
);

const StyledHidden = styled.div<InternalProps>`
  ${generateBreakpointConfig(false, 'xs')};
  ${generateBreakpointConfig(false, 'sm')};
  ${generateBreakpointConfig(false, 'md')};
  ${generateBreakpointConfig(false, 'lg')};
`;

export const Hidden: React.FC<VisibilityProps> = ({display, ...props}) => (
  <StyledHidden {...props} $display={display} />
);
