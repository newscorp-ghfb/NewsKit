import React from 'react';
import {Cell, Block, TextBlock, TitleBar, Image} from 'newskit';
import {SectionIntroductionProps} from './types';

export const SectionIntroduction: React.FC<SectionIntroductionProps> = ({
  title,
  children,
  image,
}) => (
  <>
    <Cell xs={12} mdOffset={1} md={10} lg={9} xl={7}>
      <Block spaceStack={{xs: 'space050', md: 'space060'}}>
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
        <Block spaceStack="space100">
          <TextBlock
            stylePreset="inkBase"
            typographyPreset="editorialSubheadline020"
          >
            {children}
          </TextBlock>
        </Block>
      )}
    </Cell>
    <Cell xs={12} mdOffset={1} md={8} xl={7}>
      {image && (
        <Block spaceStack={{xs: 'space060', md: 'space070'}}>
          <Image src={image.src} alt={image.alt || ''} />
        </Block>
      )}
    </Cell>
  </>
);
