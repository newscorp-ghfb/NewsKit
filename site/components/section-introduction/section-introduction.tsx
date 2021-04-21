import React from 'react';
import {Block, TextBlock, TitleBar, Image} from 'newskit';
import {SectionIntroductionProps} from './types';
import {ComponentPageCell, ComponentPageCellCompact} from '../layout-cells';

export const SectionIntroduction: React.FC<SectionIntroductionProps> = ({
  title,
  children,
  cellProps,
}) => (
  <>
    <ComponentPageCellCompact {...cellProps}>
      <Block spaceStack="space060">
        <TitleBar
          headingAs="h2"
          overrides={{
            spaceInset: 'space000',
            heading: {
              stylePreset: 'inkContrast',
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
        <Block spaceStack="space070">
          <TextBlock
            stylePreset="inkBase"
            typographyPreset="editorialSubheadline020"
          >
            {children}
          </TextBlock>
        </Block>
      )}
    </ComponentPageCellCompact>
    <ComponentPageCell>
      {image && (
        <Block spaceStack={{xs: 'space060', md: 'space070'}}>
          <Image src={image.src} alt={image.alt || ''} />
        </Block>
      )}
    </ComponentPageCell>
  </>
);
