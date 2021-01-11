import React from 'react';
import {Cell, Grid, Flag, FlagSize} from 'newskit';
import {A11yTable} from '../a11y-table';
import {AccessibilityTablesProps} from './types';

const renderKeyCombo = (combination: string[]) =>
  combination.map((cb, index) => (
    <>
      <Flag
        overrides={{
          stylePreset: 'flagBrand',
        }}
        size={FlagSize.Large}
      >
        {cb}
      </Flag>
      {index < combination.length - 1 && ' + '}
    </>
  ));

export const AccessibilityTables: React.FC<AccessibilityTablesProps> = ({
  focusOrder,
  aria,
  interaction,
}) => {
  const focusOrderWithKeyCombo =
    focusOrder &&
    focusOrder.table.rows.map(row => ({
      ...row,
      order: renderKeyCombo(row.order),
    }));
  const interactionsWithKeyCombo =
    interaction &&
    interaction.table.rows.map(row => ({
      ...row,
      command: renderKeyCombo(row.command),
    }));

  const focusOrderTable = focusOrder && {
    ...focusOrder,
    table: {...focusOrder.table, rows: focusOrderWithKeyCombo},
  };
  const interactionTable = interaction && {
    ...interaction,
    table: interaction && {
      ...interaction.table,
      rows: interactionsWithKeyCombo,
    },
  };

  return (
    <Cell xs={12}>
      <Grid xsRowGutter="space100" xsMargin="space000">
        {focusOrderTable && <A11yTable {...focusOrderTable} />}
        {interactionTable && <A11yTable {...interactionTable} />}
        {aria && <A11yTable {...aria} />}
      </Grid>
    </Cell>
  );
};
