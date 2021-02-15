import {Cell, Grid, TextBlock, Image} from 'newskit';
import React from 'react';
import {HeaderIndexProps} from './types';
// import {LinkStandalone as LinkNewskit} from 'newskit';
// import {LinkProps} from './types';

// TODO remove header-index.svg ?

export const HeaderIndex: React.FC<HeaderIndexProps> = ({title, children, media}) => {
  
  return(
    <Grid xsRowGutter={'space020'} mdRowGutter={'space030'}>
      <Cell xs={12} md={8} lg={6} mdOffset={1}>
        <TextBlock>
          {title}
        </TextBlock>
        <TextBlock>
          {children}
        </TextBlock>
      </Cell>
      <Cell xs={12} md={6} lg={5} mdOffset={6} lgOffset={0}>
        <Image src={media.src} alt={''}/>
      </Cell>
    </Grid>
  )
}