import React from 'react';
import {
  Cell,
  Block,
  TextBlock,
  styled,
  getSizingFromTheme,
  Image,
} from 'newskit';
import {PageIntroductionProps} from './types';

const ExtendedBlock = styled(Block)`
  min-height: ${getSizingFromTheme('sizing100')};
`;

export const PageIntroduction: React.FC<PageIntroductionProps> = ({
  type,
  name,
  introduction,
  hero,
}) => (
  <>
    <Cell xs={12} md={10} lg={8} mdOffset={1}>
      <Block spaceStack={{xs: 'space050', md: 'space050', xl: 'space050'}}>
        <TextBlock
          stylePreset="inkBrand010"
          typographyPreset={{
            xs: 'editorialHeadline010',
          }}
        >
          {type.toUpperCase()}
        </TextBlock>
      </Block>
      <Block spaceStack={{xs: 'space070', md: 'space070', xl: 'space070'}}>
        <TextBlock
          as="h1"
          stylePreset="inkContrast"
          typographyPreset={{
            xs: 'editorialHeadline060',
            md: 'editorialHeadline070',
            xl: 'editorialHeadline080',
          }}
        >
          {name}
        </TextBlock>
      </Block>
    </Cell>
    <Cell xs={12} md={8} lg={6} mdOffset={1}>
      <ExtendedBlock
        spaceStack={{xs: 'space060', md: 'space080', lg: 'space090'}}
      >
        <TextBlock
          stylePreset="inkBase"
          typographyPreset={{
            xs: 'editorialSubheading010',
            md: 'editorialSubheading020',
          }}
        >
          {introduction}
        </TextBlock>
      </ExtendedBlock>
    </Cell>
    <Cell xs={12} md={10} lg={8} mdOffset={1}>
      <Block spaceStack="space080">
        <Image
          src={hero.src}
          alt={hero.alt}
          overrides={{stylePreset: 'imageDefault'}}
        />
      </Block>
    </Cell>
  </>
);
