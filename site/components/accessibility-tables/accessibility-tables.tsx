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
  const focusOrderWithKeyCombo = focusOrder.table.data.map(row => ({
    ...row,
    order: renderKeyCombo(row.order),
  }));
  const interactionsWithKeyCombo = interaction.table.data.map(row => ({
    ...row,
    command: renderKeyCombo(row.command),
  }));

  const focusOrderTable = {
    ...focusOrder,
    table: {...focusOrder.table, data: focusOrderWithKeyCombo},
  };
  const interactionTable = {
    ...interaction,
    table: {...interaction.table, data: interactionsWithKeyCombo},
  };

  return (
    <Cell xs={12}>
      <Grid xsRowGutter="space100" xsMargin="space000">
        {focusOrder && <A11yTable {...focusOrderTable} />}
        {interaction && <A11yTable {...interactionTable} />}
        {aria && <A11yTable {...aria} />}
      </Grid>
    </Cell>
  );
};
