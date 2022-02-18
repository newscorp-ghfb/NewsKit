import React from 'react';
import {
  StyledHeader,
  StyledTable,
  StyledContainer,
  StyledTableRow,
} from './styled';
import {TableProps} from './types';
import {columnMap} from './column-map';
import {renderCols} from './column-renderer';
import {useTabIndexWhenScroll} from '../hooks';
import {useReactKeys} from '../../../src/utils/hooks';

export const Table: React.FC<TableProps> = ({rows, columns, columnsIcon}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const tabIndex = useTabIndexWhenScroll(containerRef);

  const ids = useReactKeys(rows.length);

  return (
    <StyledContainer ref={containerRef}>
      <StyledTable tabIndex={tabIndex}>
        <thead>
          <tr>
            {columns.map(columnName => (
              <StyledHeader key={columnName} {...(columnMap[columnName] || {})}>
                {columnsIcon && (
                  <div>{columnsIcon[columnName.toLowerCase()]}</div>
                )}
                {columnMap[columnName]?.cellHeader || columnName}
              </StyledHeader>
            ))}
          </tr>
        </thead>
        {ids.length && rows.length ? (
          <tbody>
            {rows.map((row, i) => (
              <StyledTableRow last={i === rows.length - 1} key={ids[i]}>
                {renderCols(columns, row, i)}
              </StyledTableRow>
            ))}
          </tbody>
        ) : null}
      </StyledTable>
    </StyledContainer>
  );
};
