import React from 'react';
import {Cell, Grid} from 'newskit';
import {A11yTable} from '../a11y-table';
import {AccessibilityTablesProps} from './types';

export const AccessibilityTables: React.FC<AccessibilityTablesProps> = ({
  focusOrder,
  aria,
  interaction,
}) => (
  <Cell xs={12}>
    <Grid xsRowGutter="space100" xsMargin="space000">
      {focusOrder && focusOrder && <A11yTable {...focusOrder} />}
      {interaction && interaction && <A11yTable {...interaction} />}
      {aria && <A11yTable {...aria} />}
    </Grid>
  </Cell>
);
