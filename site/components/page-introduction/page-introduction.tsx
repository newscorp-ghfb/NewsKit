import React from 'react';
import {Block, TextBlock, Image} from 'newskit';
import {PageIntroductionProps} from './types';
import {ComponentPageCell, ComponentPageCellCompact} from '../layout-cells';

export const PageIntroduction: React.FC<PageIntroductionProps> = ({
  type,
  name,
  introduction,
  hero,
}) => (
  <>
    <ComponentPageCell>
      <Block spaceStack={{xs: 'space060', md: 'space070'}}>
        <TextBlock
          stylePreset="inkBrand010"
          typographyPreset={{
            xs: 'editorialHeadline010',
          }}
        >
          {type}
        </TextBlock>
      </Block>
      <Block spaceStack={{xs: 'space050', md: 'space070'}}>
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
    </ComponentPageCell>
    <ComponentPageCellCompact>
      <Block spaceStack={{xs: 'space070', md: 'space080'}}>
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
    </ComponentPageCellCompact>
    <ComponentPageCell>
      <Block spaceStack={{xs: 'space000', md: 'space030', lg: 'space010'}}>
        <Image loadingAspectRatio="16:9" alt="" {...hero} />
      </Block>
    </ComponentPageCell>
  </>
);
