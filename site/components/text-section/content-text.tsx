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
      <Block
        spaceStack={
          // we want larger stack when children is not present so align with the rest of titles
          children ? {xs: 'space040', md: 'space045'} : 'space070'
        }
      >
        <TextBlock
          as={titleAs}
          stylePreset="inkContrast"
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
      <Block spaceStack="space070">
        <TextBlock
          stylePreset="inkBase"
          typographyPreset={{
            xs: 'editorialParagraph020',
            xl: 'editorialParagraph030',
          }}
          as="span"
        >
          {children}
        </TextBlock>
      </Block>
    )}
  </>
);
