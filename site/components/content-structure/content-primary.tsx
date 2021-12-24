import React from 'react';
import {ContentBase} from './content-base';
import {ContentPrimaryProps} from './types';

const CONTENT_PRIMARY_STYLES = {
  headline: {
    as: 'h2' as 'h2' | 'h3' | 'h4',
    typographyPreset: {
      xs: 'editorialHeadline050',
      md: 'editorialHeadline050',
      lg: 'editorialHeadline050',
      xl: 'editorialHeadline050',
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
      xs: 'space070',
      md: 'space100',
      lg: 'space100',
      xl: 'space100',
    },
  },
};

export const ContentPrimary: React.FC<ContentPrimaryProps> = props => (
  <ContentBase overrides={CONTENT_PRIMARY_STYLES} {...props} />
);
