import React from 'react';
import {
  Cell,
  Block,
  TextBlock,
  Image,
} from 'newskit';
import {PageIntroductionProps} from './types';

export const PageIntroduction: React.FC<PageIntroductionProps> = ({
  type,
  name,
  introduction,
  hero,
}) => (
  <>
    <Cell xs={12} md={10} lg={8} mdOffset={1}>
      <Block spaceStack={{xs: 'space010', md: 'space030'}}>
        <TextBlock
          stylePreset="inkBrand010"
          typographyPreset={{
            xs: 'editorialHeadline010',
          }}
        >
          {type}
        </TextBlock>
      </Block>
      <Block spaceStack={{xs: 'space010', md: 'space030'}}>
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
    </Cell>
    <Cell xs={12} md={8} lg={6} mdOffset={1}>
      <TextBlock
        stylePreset="inkSubtle"
        typographyPreset={{
          xs: 'editorialSubheading010',
          md: 'editorialSubheadline020',
        }}
      >
        {introduction}
      </TextBlock>
    </Cell>
    <Cell xs={12} md={10} lg={8} mdOffset={1}>
      <Block spaceStack={{xs: 'space080', md: 'space060'}}>
        <Image
          src={hero.src}
          alt={hero.alt || ''}
          overrides={{stylePreset: 'imageDefault'}}
        />
      </Block>
    </Cell>
  </>
);
