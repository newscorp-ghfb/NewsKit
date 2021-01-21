import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import {MediaList} from '../media-list';

const interactiveCard = {
  label: 'Interactive',
  description: 'interactive card',
  media: {
    src: '/static/placeholder-16x9.png',
    alt: 'Card Media',
  },
  href: '/',
};

const staticCard = {
  label: 'Static Card',
  title: 'static',
  description: 'card with optional title ',
};

const cardWithStyles = {
  label: 'styled card label',
  title: 'styled card title ',
  description: 'styled card description',
  styles: {
    card: {
      stylePreset: 'cardContainerNonInteractive030',
    },
    label: {
      stylePreset: 'inkContrast',
      typographyPreset: 'editorialHeadline020',
    },
    title: {
      stylePreset: 'inkContrast',
      typographyPreset: 'editorialHeadline020',
    },
    description: {
      stylePreset: 'inkContrast',
      typographyPreset: 'editorialHeadline020',
    },
  },
};

describe('Media List', () => {
  test('renders with default layout', () => {
    const fragment = renderToFragmentWithTheme(MediaList, {
      cards: [interactiveCard, staticCard],
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom layout', () => {
    const fragment = renderToFragmentWithTheme(MediaList, {
      cards: [interactiveCard, staticCard, cardWithStyles],
      spaceStack: 'space110',
      xsCard: 6,
      lgCard: 3,
      gridProps: {
        xsRowGutter: 'space030',
        xsMargin: 'space010',
      },
    });
    expect(fragment).toMatchSnapshot();
  });
});
