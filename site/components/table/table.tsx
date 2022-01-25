import React from 'react';
import {
  StyledHeader,
  StyledTable,
  StyledContainer,
  StyledTableRow,
  StyledIconContainer,
} from './styled';
import {TableProps} from './types';
import {columnMap} from './column-map';
import {renderCols} from './column-renderer';

export const Table: React.FC<TableProps> = ({rows, columns, columnsIcon}) => (
  <StyledContainer>
    <StyledTable>
      <thead>
        <tr>
          {columns.map(columnName => (
            <StyledHeader key={columnName} {...(columnMap[columnName] || {})}>
              {columnsIcon && (
                <StyledIconContainer>
                  {columnsIcon[columnName.toLowerCase()]}
                </StyledIconContainer>
              )}
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
