import {Cell, Grid, TextBlock, Image} from 'newskit';
import React from 'react';
import {HeaderIndexProps} from './types';
// import {LinkStandalone as LinkNewskit} from 'newskit';
// import {LinkProps} from './types';

// TODO remove header-index.svg ?

export const HeaderIndex: React.FC<HeaderIndexProps> = ({
  title,
  children,
  media,
}) => (
  <Grid>
    <Cell xs={12} md={6} lg={5} mdOffset={6}>
      <Image src={media.src} alt="" />
    </Cell>
    <Cell xs={12} md={8} lg={6} mdOffset={1} lgOffset={1}>
      <TextBlock>{title}</TextBlock>
      <TextBlock>{children}</TextBlock>
    </Cell>
  </Grid>
);
