import React from 'react';
import {Block, TextBlock, TitleBar, Cell} from 'newskit';

export const SectionIntroduction = ({
  title,
  introduction,
}: {
  title: string;
  introduction?: string;
}) => (
  <Cell xs={9} md={8} lg={6} mdOffset={1}>
    <Block spaceStack="space060">
      <TitleBar
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
    {introduction && (
      <Block spaceStack="space080">
        <TextBlock
          stylePreset="inkBase"
          typographyPreset="editorialParagraph030"
        >
          {introduction}
        </TextBlock>
      </Block>
    )}
  </Cell>
);
