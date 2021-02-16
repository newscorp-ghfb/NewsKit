import {Cell, Grid, TextBlock, Image, Stack, styled} from 'newskit';
import React from 'react';
import {HeaderIndexProps} from './types';
// import {LinkStandalone as LinkNewskit} from 'newskit';
// import {LinkProps} from './types';

// TODO remove header-index.svg ?

export const HeaderIndex: React.FC<HeaderIndexProps> = ({
  title,
  children,
  media,
}) => {
  const StyledGrid = styled(Grid)`
    align-items: center;
  `;
  return (
    <StyledGrid xsRowGutter={'space020'} mdRowGutter={'space030'}>
      <Cell lgOrder={2} xs={12} md={6} lg={5} mdOffset={6} lgOffset={0}>
        <Image src={media.src} alt={''} />
      </Cell>
      <Cell xs={12} md={8} lg={6} mdOffset={1}>
        <TextBlock as = 'h1' stylePreset = 'inkContrast' typographyPreset = { { xs: 'editorialHeadline060', md: 'editorialHeadline080'}} >{title}</TextBlock>
        <TextBlock stylePreset = 'inkNegative' typographyPreset = { { xs: 'editorialSubheadline010', md: 'editorialSubheadline020'}}>{children}</TextBlock>
      </Cell>
    </StyledGrid>
  );
};
