import React from 'react';
import {Flag, getSSRId, IconFilledCheckCircle} from 'newskit';
import {
  StyledHeader,
  StyledTable,
  StyledContainer,
  StyledTableRow,
  StyledDataCell,
} from './styled';
import {TableProps} from './types';

export const Table: React.FC<TableProps> = ({rows, columns}) => {
  const StyledFlag: React.FC = ({children}) => (
    <Flag
      overrides={{
        stylePreset: 'flagSolidNeutral',
        typographyPreset: 'editorialParagraph010',
        spaceInset: 'spaceInsetSquish020',
      }}
    >
      {children}
    </Flag>
  );

  const renderHeaders = () =>
    columns.map(columnName => (
      <StyledHeader key={columnName}>{columnName}</StyledHeader>
    ));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCols = (row: any) =>
    columns.map(columnName => {
      let cellContent = row[columnName.toLowerCase()];
      if (
        columnName === 'Name' ||
        columnName === 'Type' ||
        columnName === 'Default'
      ) {
        cellContent = cellContent && <StyledFlag>{cellContent}</StyledFlag>;
      }
      if (columnName === 'Required') {
        cellContent = (
          <IconFilledCheckCircle
            overrides={{
              size: 'iconSize020',
              stylePreset: 'iconPositive',
            }}
          />
        );
      }

      return <StyledDataCell key={getSSRId()}>{cellContent}</StyledDataCell>;
    });

  const renderRows = () =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rows.map((row: any) => (
      <StyledTableRow key={getSSRId()}>{renderCols(row)}</StyledTableRow>
    ));

  return (
    <StyledContainer>
      <StyledTable>
        <thead>
          <tr>{renderHeaders()}</tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </StyledTable>
    </StyledContainer>
  );
};
