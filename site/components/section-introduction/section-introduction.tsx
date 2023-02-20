import React from 'react';
import {Cell, Block, TitleBar, Image} from 'newskit';
import {ComponentPageCellCompact} from '../layout-cells';
import {SectionIntroductionProps} from './types';
import {UnpackContent} from '../unpack-content';

export const SectionIntroduction: React.FC<SectionIntroductionProps> = ({
  title,
  cellProps,
  image,
  children,
  subHeadingSpaceStack = {xs: 'space060', md: 'space060', lg: 'space070'},
  lastItem,
}) => (
  <>
    <ComponentPageCellCompact {...cellProps}>
      {title === 'How to contribute' ? (
        <>
          <Block
            spaceStack={{
              xs: 'space080',
              md: 'space090',
              lg: 'space090',
              xl: 'space100',
            }}
          />
          <Block spaceStack={{xs: 'space050', md: 'space060'}}>
            <TitleBar
              headingAs="h2"
              overrides={{
                paddingBlock: 'space000',
                paddingInline: 'space000',
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
        </>
      ) : (
        <Block
          spaceStack={
            // we want larger stack when children is not present so align with the rest of titles
            children ? {xs: 'space050', md: 'space060'} : 'space060'
          }
        >
          <TitleBar
            headingAs="h2"
            overrides={{
              paddingBlock: 'space000',
              paddingInline: 'space000',
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
      )}
      {children && (
        <Block spaceStack={!lastItem ? subHeadingSpaceStack : ''}>
          <UnpackContent
            textBlockProps={{
              stylePreset: 'inkBase',
              typographyPreset: 'editorialSubheadline020',
            }}
          >
            {children}
          </UnpackContent>
        </Block>
      )}
    </ComponentPageCellCompact>

    <Cell xs={12} mdOffset={1} md={10} xl={8}>
      {image && (
        <Block spaceStack={{xs: 'space060', md: 'space070'}}>
          <Image src={image.src} alt={image.alt || ''} />
        </Block>
      )}
    </Cell>
  </>
);
