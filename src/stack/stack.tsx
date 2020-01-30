import React from 'react';
import {StackProps} from './types';
import {StyledMasterContainer, StyledChildContainer} from './styled';

export const Stack: React.FC<StackProps> = ({
  flow,
  stackDistribution,
  space,
  children,
  wrap,
}) => {
  const wrapChild = (child: React.ReactNode, index: number) => (
    <StyledChildContainer key={index} space={space!} flow={flow}>
      {child}
    </StyledChildContainer>
  );
  return (
    <StyledMasterContainer
      flow={flow}
      stackDistribution={stackDistribution}
      space={space}
      wrap={wrap}
    >
      {children && space ? React.Children.map(children, wrapChild) : children}
    </StyledMasterContainer>
  );
};
