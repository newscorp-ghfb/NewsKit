import React from 'react';
import {Cell, Grid} from 'newskit';
import {UsageProps} from './types';
import {CardUsage} from './card-usage';

export const Usage: React.FC<UsageProps> = ({cards}) => (
  <Cell xs={12} md={10} lg={8} mdOffset={1}>
    <Grid xsMargin="space000">
      {cards.map(card => (
        <Cell xs={12} md={6}>
          <CardUsage card={card} />
        </Cell>
      ))}
    </Grid>
  </Cell>
);
