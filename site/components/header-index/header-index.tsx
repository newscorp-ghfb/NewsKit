import {
  Cell,
  Grid,
  TextBlock,
  Image,
  styled,
  getColorFromTheme,
  getSpacingFromTheme,
} from 'newskit';
import React from 'react';
import {HeaderIndexProps} from './types';

export const HeaderIndex: React.FC<HeaderIndexProps> = ({
  title,
  children,
  media,
}) => {
  const StyledGrid = styled(Grid)`
    @media (min-width: 1024px) {
      min-height: 440px;
    }
    align-items: center;
    background-color: ${getColorFromTheme('interface020')};
    ${getSpacingFromTheme(
      {xs: 'space080', lg: 'space090'},
      undefined,
      'marginBottom',
    )}
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
      xsMargin="space000"
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
      <Cell xs={12} md={8} lg={6} mdOffset={1}>
        <StyledTitleTextBlock
          as="h1"
          stylePreset="inkContrast"
          typographyPreset={{
            xs: 'editorialHeadline050',
            sm: 'editorialHeadline060',
            md: 'editorialHeadline080',
          }}
        >
          {title}
        </StyledTitleTextBlock>
        <StyledDescriptionTextBlock
          stylePreset="inkBase"
          typographyPreset={{
            xs: 'editorialSubheadline010',
            md: 'editorialSubheadline020',
          }}
        >
          {children}
        </StyledDescriptionTextBlock>
      </Cell>
    </StyledGrid>
  );
};
