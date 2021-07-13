import {
  Cell,
  Grid,
  TextBlock,
  Image,
  styled,
  getMediaQueryFromTheme,
  Block,
  getColorFromTheme,
  getSpacingFromTheme,
  ImageProps,
} from 'newskit';
import {renderIfReactComponent} from 'newskit/utils/component';
import React from 'react';
import {HeaderIndexProps} from './types';

const StyledGrid = styled(Grid)`
  ${getMediaQueryFromTheme('lg')} {
    min-height: 440px;
  }
  align-items: center;
`;

const HeaderIndexContainer = styled.div`
  background-color: ${getColorFromTheme('interface020')};
  ${getSpacingFromTheme(
    {xs: 'space080', md: 'space090'},
    undefined,
    'marginBottom',
  )}
`;

export const HeaderIndex: React.FC<HeaderIndexProps> = ({
  title,
  children,
  media,
}) => (
  <HeaderIndexContainer>
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
        {renderIfReactComponent(media) || (
          <Image src={(media as ImageProps).src} alt="" />
        )}
      </Cell>
      <Cell xs={11} md={8} lg={6} mdOffset={1}>
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
        <Block spaceStack={{xs: 'space080', lg: 'space000'}}>
          <TextBlock
            stylePreset="inkBase"
            typographyPreset="editorialSubheadline020"
          >
            {children}
          </TextBlock>
        </Block>
      </Cell>
    </StyledGrid>
  </HeaderIndexContainer>
);
