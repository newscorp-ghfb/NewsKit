import React from 'react';
import {styled} from '../utils/style';

export interface ScrollProps {
  flow?: ScrollFlow | 'vertical' | 'horizontal';
}

export enum ScrollFlow {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

const StyledScrollFlow = styled.div<ScrollProps>`
  overflow-x: ${({flow}) =>
    flow && flow !== ScrollFlow.horizontal ? 'hidden' : 'auto'};
  overflow-y: ${({flow}) =>
    !flow || flow === ScrollFlow.horizontal ? 'hidden' : 'auto'};
  height: 100%;
`;

const StyledScrollChildContainer = styled.div`
  height: 100%;
`;

export const Scroll: React.FC<ScrollProps> = ({
  flow = ScrollFlow.horizontal,
  children,
}) => (
  <StyledScrollFlow flow={flow} aria-orientation={flow} tabIndex={0}>
    <StyledScrollChildContainer>{children}</StyledScrollChildContainer>
  </StyledScrollFlow>
);
