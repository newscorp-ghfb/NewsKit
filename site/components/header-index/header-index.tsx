import {
  Cell,
  Grid,
  TextBlock,
  Image,
  styled,
  getSpacingFromTheme,
  getMediaQueryFromTheme,
} from 'newskit';
import React from 'react';
import {HeaderIndexProps} from './types';

export const HeaderIndex: React.FC<HeaderIndexProps> = ({
  title,
  children,
  media,
}) => {
  // TODO remove padding top and bottom in pages layout
  // TODO buddy cell on full-width
  const StyledGrid = styled(Grid)`
    ${getMediaQueryFromTheme('lg')} {
      min-height: 440px;
    }
    align-items: center;
  `;

  const StyledDescriptionTextBlock = styled(TextBlock)`
    ${getSpacingFromTheme(
      {xs: 'space080', lg: 'space000'},
      undefined,
      'marginBottom',
    )}
  `;

  const StyledTitleTextBlock = styled(TextBlock)`
    ${getSpacingFromTheme(
      {xs: 'space060', md: 'space070'},
      undefined,
      'marginBottom',
    )}
  `;

  return (
    <StyledGrid
      xsRowGutter="space020"
      mdRowGutter="space030"
      xsColumnGutter="space050"
    >
      <Cell
        lgOrder={2}
        xs={10}
        sm={8}
        md={6}
        lg={5}
        xsOffset={1}
        smOffset={4}
        mdOffset={6}
        lgOffset={0}
      >
        <Image src={media.src} alt="" />
      </Cell>
      <Cell xs={11} md={8} lg={6} mdOffset={1}>
        <StyledTitleTextBlock
          as="h1"
          stylePreset="inkContrast"
          typographyPreset={{
            xs: 'editorialHeadline060',
            md: 'editorialHeadline080',
          }}
        >
          {title}
        </StyledTitleTextBlock>
        <StyledDescriptionTextBlock
          stylePreset="inkBase"
          typographyPreset="editorialSubheadline020"
        >
          {children}
        </StyledDescriptionTextBlock>
      </Cell>
    </StyledGrid>
  );
};
