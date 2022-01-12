import React from 'react';
import {ContentBase} from './content-base';
import {ContentSecondaryProps} from './types';

const CONTENT_SECONDARY_STYLES = {
  headline: {
    as: 'h3' as 'h2' | 'h3' | 'h4',
    typographyPreset: {
      xs: 'editorialHeadline030',
      md: 'editorialHeadline030',
      lg: 'editorialHeadline030',
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

export const ContentSecondary: React.FC<ContentSecondaryProps> = props => (
  <ContentBase overrides={CONTENT_SECONDARY_STYLES} {...props} />
);
