import React from 'react';
import {Block, TextBlock} from 'newskit';
import {ContentTextProps} from './types';

export const ContentText: React.FC<ContentTextProps> = ({
  title,
  titleAs,
  children,
}) => (
  <>
    {title && (
      <Block spaceStack={{xs: 'space040', md: 'space050'}}>
        <TextBlock
          as={titleAs}
          stylePreset="inkBase"
          typographyPreset={{
            xs: 'editorialHeadline020',
            xl: 'editorialHeadline030',
          }}
        >
          {title}
        </TextBlock>
      </Block>
    )}
    {children && (
      <Block spaceStack="space060">
        <TextBlock
          stylePreset="inkSubtle"
          typographyPreset={{
            xs: 'editorialParagraph020',
            xl: 'editorialParagraph030',
          }}
        >
          {children}
        </TextBlock>
      </Block>
    )}
  </>
);
