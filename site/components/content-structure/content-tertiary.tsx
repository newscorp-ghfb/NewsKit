import React from 'react';
import {ContentBase} from './content-base';
import {ContentTertiaryProps} from './types';

const CONTENT_TERTIARY_STYLES = {
  headline: {
    as: 'h4' as 'h2' | 'h3' | 'h4',
    typographyPreset: {
      xs: 'editorialHeadline020',
      md: 'editorialHeadline020',
      lg: 'editorialHeadline020',
      xl: 'editorialHeadline030',
    },
    stylePreset: 'inkContrast',
    spaceStack: {
      xs: 'space045',
      md: 'space050',
      lg: 'space050',
      xl: 'space050',
    },
  },
  description: {
    typographyPreset: {
      xs: 'editorialParagraph020',
      md: 'editorialParagraph030',
      lg: 'editorialParagraph030',
      xl: 'editorialParagraph030',
    },
    stylePreset: 'inkBase',
    spaceStack: {
      xs: 'space070',
      md: 'space080',
      lg: 'space080',
      xl: 'space080',
    },
  },
  separator: {
    spaceStack: {
      xs: 'space100',
      md: 'space100',
      lg: 'space100',
      xl: 'space100',
    },
  },
};

export const ContentTertiary: React.FC<ContentTertiaryProps> = props => (
  <ContentBase overrides={CONTENT_TERTIARY_STYLES} {...props} />
);
