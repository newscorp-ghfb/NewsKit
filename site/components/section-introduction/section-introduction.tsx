import React from 'react';
import {Block, TextBlock, TitleBar, Cell} from 'newskit';
import {SectionIntroductionProps} from './types';

export const SectionIntroduction: React.FC<SectionIntroductionProps> = ({
  title,
  children,
  cellProps,
}) => (
  <Cell xs={12} md={8} lg={6} mdOffset={1} {...cellProps}>
    <Block spaceStack="space060">
      <TitleBar
        headingAs="h2"
        overrides={{
          spaceInset: 'space000',
          heading: {
            typographyPreset: {
              xs: 'editorialHeadline030',
              md: 'editorialHeadline040',
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
          stylePreset="inkBase"
          typographyPreset="editorialParagraph030"
        >
          {children}
        </TextBlock>
      </Block>
    )}
  </Cell>
);
