import * as React from 'react';
import {Grid} from 'newskit';
import {SectionIntroduction} from '../components/section-introduction';
import {MediaList} from '../components/media-list';
import Layout, {LayoutProps} from '../components/layout';

const cardsContent = [
  {
    media: {
      src: '../static/landing/landing-foundations.svg',
      alt: '',
    },
    title: 'Foundations',
    href: '#',
    description:
      'NewsKit foundations define the visual elements that inform the look and feel of UI components. Foundations include borders, breakpoints, colours, fonts, motions, shadows and sizing.',
  },
  {
    media: {
      src: '../static/landing/landing-theming.svg',
      alt: '',
    },
    title: 'Theming',
    href: '#',
    description:
      "A theme is the overall look and feel of a digital product. In essence, a theme is a direct representation of a brand and has a direct impact on the users' experience.",
  },
  {
    media: {
      src: '../static/landing/landing-patterns.svg',
      alt: '',
    },
    title: 'Pattern',
    href: '#',
    description: 'Some content to be written around patterns.',
  },
];

export default (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage hideSidebar path="/index-new">
    <Grid lgMargin="sizing000" xsRowGutter="space000">
      <SectionIntroduction
        title="Explore"
        cellProps={{mdOffset: 0, md: 12, lg: 12, xl: 10, xlOffset: 1}}
      >
        Subheading of the explore section
      </SectionIntroduction>
      <MediaList
        layout="3-span"
        cards={cardsContent}
        parentCellProps={{mdOffset: 0, md: 12, lg: 12, xl: 10, xlOffset: 1}}
        gridProps={{xsRowGutter: 'space050'}}
      />
    </Grid>
  </Layout>
);
