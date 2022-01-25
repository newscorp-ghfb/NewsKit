import React, {useEffect} from 'react';
import {
  StyledHeader,
  StyledTable,
  StyledContainer,
  StyledTableRow,
} from './styled';
import {TableProps} from './types';
import {columnMap} from './column-map';
import {renderCols} from './column-renderer';
import {useResizeObserver} from '../../../src/utils/hooks';

export const Table: React.FC<TableProps> = ({rows, columns}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [hasScroll, setHasScroll] = React.useState(false);
  const [width] = useResizeObserver(containerRef);

  useEffect(() => {
    if (containerRef.current) {
      const {scrollWidth, clientWidth} = containerRef.current;
      setHasScroll(scrollWidth > clientWidth);
    }
  }, [width]);

  return (
    <StyledContainer ref={containerRef}>
      <StyledTable tabIndex={hasScroll ? 0 : undefined}>
        <thead>
          <tr>
            {columns.map(columnName => (
              <StyledHeader key={columnName} {...(columnMap[columnName] || {})}>
                {columnMap[columnName]?.cellHeader || columnName}
              </StyledHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <StyledTableRow last={i === rows.length - 1}>
              {renderCols(columns, row, i)}
            </StyledTableRow>
          ))}
        </tbody>
      </StyledTable>
    </StyledContainer>
  );
};
