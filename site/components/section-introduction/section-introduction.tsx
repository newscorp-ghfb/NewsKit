import React from 'react';
import {Block, TextBlock, TitleBar, Cell, Image} from 'newskit';
import {SectionIntroductionProps} from './types';

export const SectionIntroduction: React.FC<SectionIntroductionProps> = ({
  title,
  children,
  cellProps,
}) => (
  <>
    <Cell xs={12} md={8} lg={6} mdOffset={1} {...cellProps}>
      <Block spaceStack="space060">
        <TitleBar
          headingAs="h2"
          overrides={{
            spaceInset: 'space000',
            heading: {
              typographyPreset: {
                xs: 'editorialHeadline040',
                md: 'editorialHeadline060',
              },
            },
          }}
        >
          {title}
        </TitleBar>
      </Block>
      {children && (
        <Block spaceStack="space080">
          <TextBlock
            stylePreset="inkSubtle"
            typographyPreset="editorialSubheadline010"
          >
            {children}
          </TextBlock>
        </Block>
      )}
    </Cell>
    <Cell xs={12} md={10} lg={8} mdOffset={1}>
      {image && (
        <Block spaceStack={{xs: 'space060', md: 'space070'}}>
          <Image
            src={image.src}
            alt={image.alt || ''}
            overrides={{stylePreset: 'imageDefault'}}
          />
        </Block>
      )}
    </Cell>
  </>
);
