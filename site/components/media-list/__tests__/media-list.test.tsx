import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {MediaList} from '../media-list';
import {columnsCalculator} from '../columns-calculator';

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
      layout: '4-span',
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

describe('columnsCalculator()', () => {
  test('should return the right columns object without errors', () => {
    expect(columnsCalculator('3-span-hero')).toEqual({xs: 12, md: 4});
    expect(columnsCalculator('4-span')).toEqual({xs: 12, md: 6, xl: 3});
  });
});
