import React from 'react';
import {getSSRId} from 'newskit';
import {
  StyledHeader,
  StyledTable,
  StyledContainer,
  StyledTableRow,
} from './styled';
import {TableProps} from './types';
import {columnMap} from './column-map';
import {renderCols} from './column-renderer';

export const Table: React.FC<TableProps> = ({rows, columns}) => (
  <StyledContainer>
    <StyledTable>
      <thead>
        <tr>
          {columns.map(columnName => (
            <StyledHeader key={columnName} {...(columnMap[columnName] || {})}>
              {columnName}
            </StyledHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <StyledTableRow key={getSSRId()}>
            {renderCols(columns, row, i)}
          </StyledTableRow>
        ))}
      </tbody>
    </StyledTable>
  </StyledContainer>
);
