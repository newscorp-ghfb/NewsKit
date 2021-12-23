import {styled} from 'newskit';
import React from 'react';

export interface SizeBoxProps {
  sideLength: string;
}

const StyledDiv = styled.div<{
  sideLength: string;
}>`
  ${({sideLength}) => `width: ${sideLength}; height: ${sideLength};`};
  background-color: ${({theme}) => theme.colors.interfaceBrand030};
  border-radius: ${({theme}) => theme.borders.borderWidth020};
`;

export const SizeBox: React.FC<SizeBoxProps> = ({sideLength}) => (
  <StyledDiv sideLength={sideLength} />
);
