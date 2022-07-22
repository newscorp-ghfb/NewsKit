import {styled} from 'newskit';
import React from 'react';

export interface LineTruncationProps {
  lines: string;
  children?: React.ReactNode;
}

const StyledTextBlock = styled.span<LineTruncationProps>`
  ${({lines}) =>
    lines
      ? `display: -webkit-box;
     -webkit-line-clamp:${lines};
     -webkit-box-orient: vertical;
     overflow: hidden;`
      : ''};
`;

export const LineTruncation: React.FC<LineTruncationProps> = ({
  lines,
  children,
}) => <StyledTextBlock lines={lines}>{children}</StyledTextBlock>;
