import * as React from 'react';
import {SectionIntroductionGrid} from '../../section-introduction-grid';
import {MediaList} from '../../media-list';

const cardsContent = [
  {
    media: {
      src: 'static/landing/landing-foundations.svg',
      alt: '',
    },
    title: 'Theme',
    href: '/theme/overview',
    description:
      'These standardised styles define the look and feel of UI components. e.g. colours, fonts, shadows and sizing.',
  },
  {
    media: {
      src: 'static/landing/landing-components.svg',
      alt: '',
    },
    title: 'Components',
    href: '/components/overview',
    description:
      'NewsKit’s flexible UI components are built to best practices to ensure usability, performance and accessibility. ',
  },
  {
    media: {
      src: 'static/landing/landing-theming.svg',
      alt: '',
    },
    title: 'Theming',
    href: '/theme/theming/creating-a-theme',
    description:
      'Creating and applying themes allow you to tailor your experience to your unique brand requirements.',
  },
];

export const Explore = () => (
  <>
    <SectionIntroductionGrid title="Explore" />
    <MediaList
      layout="3-span"
      cards={cardsContent}
      gridProps={{xsRowGutter: 'space050'}}
    />
  </>
);
