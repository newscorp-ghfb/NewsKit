import React from 'react';
import {Block, TitleBar, Image, TextBlock, GridLayoutItem} from 'newskit';
import {SectionIntroductionGridProps} from './types';

export const SectionIntroductionGrid: React.FC<SectionIntroductionGridProps> = ({
  title,
  image,
  children,
  subHeadingSpaceStack = {xs: 'space060', md: 'space060', lg: 'space070'},
  lastItem,
}) => (
  <>
    <GridLayoutItem>
      <Block
        spaceStack={
          // we want larger stack when children is not present so align with the rest of titles
          children ? {xs: 'space050', md: 'space060'} : 'space060'
        }
      >
        <TitleBar
          headingAs="h2"
          overrides={{
            spaceInset: 'space000',
            heading: {
              stylePreset: 'inkContrast',
              typographyPreset: {
                xs: 'editorialHeadline040',
                md: 'editorialHeadline050',
              },
            },
          }}
        >
          {title}
        </TitleBar>
      </Block>

      {children && (
        <Block spaceStack={!lastItem ? subHeadingSpaceStack : ''}>
          <TextBlock
            stylePreset="inkBase"
            typographyPreset="editorialParagraph030"
          >
            {children}
          </TextBlock>
        </Block>
      )}
    </GridLayoutItem>

    <GridLayoutItem>
      {image && (
        <Block spaceStack={{xs: 'space060', md: 'space070'}}>
          <Image src={image.src} alt={image.alt || ''} />
        </Block>
      )}
    </GridLayoutItem>
  </>
);
