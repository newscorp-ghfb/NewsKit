import React from 'react';
import {
  Cell,
  Block,
  TextBlock,
  Image,
  styled,
  getSpacingFromTheme,
} from 'newskit';
import {PageIntroductionProps} from './types';

const StyledTypeNameCell = styled(Cell)`
  ${getSpacingFromTheme(
    {xs: 'space080', md: 'space090', lg: 'space100'},
    undefined,
    'padding-top',
  )}
`;

export const PageIntroduction: React.FC<PageIntroductionProps> = ({
  type,
  name,
  introduction,
  hero,
}) => (
  <>
    <StyledTypeNameCell xs={12} md={10} lg={8} mdOffset={1}>
      <Block spaceStack={{xs: 'space040', md: 'space050'}}>
        <TextBlock
          stylePreset="inkBrand010"
          typographyPreset={{
            xs: 'editorialHeadline010',
          }}
        >
          {type}
        </TextBlock>
      </Block>
      <Block spaceStack={{xs: 'space040', md: 'space050'}}>
        <TextBlock
          as="h1"
          stylePreset="inkContrast"
          typographyPreset={{
            xs: 'editorialHeadline060',
            md: 'editorialHeadline070',
            lg: 'editorialHeadline080',
          }}
        >
          {name}
        </TextBlock>
      </Block>
    </StyledTypeNameCell>
    <Cell xs={12} md={8} lg={6} mdOffset={1}>
      <Block spaceStack={{xs: 'space080', md: 'space060'}}>
        <TextBlock
          stylePreset="inkBase"
          typographyPreset={{
            xs: 'editorialSubheadline010',
            md: 'editorialSubheadline020',
          }}
        >
          {introduction}
        </TextBlock>
      </Block>
    </Cell>
    <Cell xs={12} md={10} lg={8} mdOffset={1}>
      <Block spaceStack={{xs: 'space080', md: 'space090'}}>
        <Image src={hero.src} alt={hero.alt || ''} />
      </Block>
    </Cell>
  </>
);
