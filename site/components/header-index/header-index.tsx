import {Cell, Grid, TextBlock, Image, styled, Block, getColorFromTheme} from 'newskit';
import React from 'react';
import {HeaderIndexProps} from './types';

export const HeaderIndex: React.FC<HeaderIndexProps> = ({
  title,
  children,
  media,
}) => {

  const StyledGrid = styled(Grid)`
    align-items: center;
    background-color: ${getColorFromTheme('interface020')};
  `;

  return (
    <StyledGrid xsRowGutter="space020" mdRowGutter="space030">
      <Cell lgOrder={2} xs={12} md={6} lg={5} mdOffset={6} lgOffset={0}>
        <Image src={media.src} alt=""/>
      </Cell>
      <Cell xs={12} md={8} lg={6} mdOffset={1}>
        <Block spaceStack={{xs: 'space060', md: 'space070'}}>
          <TextBlock
            as="h1"
            stylePreset="inkContrast"
            typographyPreset={{
              xs: 'editorialHeadline060',
              md: 'editorialHeadline080',
            }}
          >
            {title}
          </TextBlock>
        </Block>
        <TextBlock
          stylePreset="inkBase"
          typographyPreset={{
            xs: 'editorialSubheadline010',
            md: 'editorialSubheadline020',
          }}
        >
          {children}
        </TextBlock>
      </Cell>
    </StyledGrid>
  );
};
