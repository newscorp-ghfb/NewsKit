import {styled} from 'newskit';
import React from 'react';

export interface LineTruncationProps {
  line: string;
}

const StyledTextBlock = styled.span<LineTruncationProps>`
  ${({line}) =>
    line
      ? `display: -webkit-box;-webkit-line-clamp:${line};-webkit-box-orient: vertical;overflow: hidden;`
      : ''};
`;

export const LineTruncation: React.FC<LineTruncationProps> = ({
  line,
  children,
}) => <StyledTextBlock line={line}>{children}</StyledTextBlock>;
