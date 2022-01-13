import * as React from 'react';
import {StyledLegend} from './styled';
import {LegendProps} from './types';

export const Legend: React.FC<LegendProps> = ({children, ...props}) => (
  <StyledLegend {...props} noCrop={typeof children !== 'string'}>
    {children}
  </StyledLegend>
);
