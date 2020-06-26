import React from 'react';
import {DisplayProperty} from 'csstype';
import {styled} from '../utils/style';

interface InteralUlProps {
  $display?: DisplayProperty;
  flexGrow?: number;
}

interface StyledUlProps {
  display?: DisplayProperty;
  flexGrow?: number;
}

const InternalUl = styled.ul<InteralUlProps>`
  margin: 0;
  padding: 0;
  display: ${({$display}) => $display || 'inline-flex'};
  flex-grow: ${({flexGrow}) => flexGrow};
`;

export const StyledUl: React.FC<StyledUlProps> = ({display, ...props}) => (
  <InternalUl $display={display} {...props} />
);

const InternalOl = styled.ol<InteralUlProps>`
  margin: 0;
  padding: 0;
  display: ${({$display}) => $display || 'inline-flex'};
  flex-grow: ${({flexGrow}) => flexGrow};
`;

export const StyledOl: React.FC<StyledUlProps> = ({display, ...props}) => (
  <InternalOl $display={display} {...props} />
);

export const StyledLi = styled.li`
  list-style: none;
`;
