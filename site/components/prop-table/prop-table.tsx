import React from 'react';

import {IconFilledCheckCircle} from 'newskit';

import {PropProps} from './types';

import {
  StyledContainer,
  StyledTable,
  StyledHeader,
  StyledDataCell,
  StyledTableRow,
} from './styled';

const COLUMNS = ['Name', 'Type', 'Default', 'Description', 'Required?'];

export const Prop: React.FC<PropProps> = ({
  name,
  type,
  enum: enumType,
  default: defaultVal = '',
  required,
  children,
}) => (
  <StyledTableRow>
    <StyledDataCell>{name}</StyledDataCell>
    <StyledDataCell>{type}</StyledDataCell>
    <StyledDataCell>
      {defaultVal && enumType ? `${type}.${defaultVal}` : defaultVal}
    </StyledDataCell>
    <StyledDataCell>{children}</StyledDataCell>
    <StyledDataCell>
      {required && (
        <IconFilledCheckCircle
          overrides={{
            size: 'iconSize020',
            stylePreset: 'iconPositive',
          }}
        />
      )}
    </StyledDataCell>
  </StyledTableRow>
);

export const PropTable: React.FC = ({children}) => (
  <StyledContainer>
    <StyledTable>
      <thead>
        <tr>
          {COLUMNS.map(columnName => (
            <StyledHeader key={columnName}>{columnName}</StyledHeader>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </StyledTable>
  </StyledContainer>
);

PropTable.displayName = 'PropTable';
