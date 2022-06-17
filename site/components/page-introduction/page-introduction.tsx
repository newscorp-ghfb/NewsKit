import React from 'react';
import {
  Block,
  Divider,
  TextBlock,
  Image,
  ImageProps,
  getSpacingCssFromTheme,
  styled,
} from 'newskit';
import {Illustration} from '../illustrations/illustration-loader';
import {PageIntroductionProps} from './types';
import {ComponentPageCell, ComponentPageCellCompact} from '../layout-cells';

const StyledBlock = styled(Block)`
  ${getSpacingCssFromTheme('marginTop', {xs: 'space090', md: 'space100'})};
  ${getSpacingCssFromTheme('marginBottom', {xs: 'space030', md: 'space040'})};
`;

const heroIsImage = (hero: PageIntroductionProps['hero']): hero is ImageProps =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Boolean(hero && (hero as any).src);

export const PageIntroduction: React.FC<PageIntroductionProps> = ({
  type,
  name,
  introduction,
  hero,
  showSeparator,
}) => (
  <>
    <ComponentPageCell>
      <Block spaceStack={{xs: 'space060', md: 'space070'}}>
        <TextBlock
          stylePreset="inkBrand010"
          typographyPreset={{
            xs: 'editorialHeadline010',
            md: 'editorialHeadline030',
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
      <Block
        stylePreset="blockRoundedMedium"
        spaceStack={{xs: 'space000', md: 'space030', lg: 'space010'}}
      >
        {heroIsImage(hero) ? (
          <Image loadingAspectRatio="16:9" alt="" {...hero} />
        ) : (
          hero && <Illustration path={hero.illustration} />
        )}
      </Block>
      {showSeparator && (
        <StyledBlock>
          <Divider />
        </StyledBlock>
      )}
    </ComponentPageCell>
  </>
);
