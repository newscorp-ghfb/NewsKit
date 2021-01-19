import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import {MediaList} from '../media-list';

const interactiveCard = {
  title: 'Interactive',
  description: 'interactive card',
  media: {
    src: '/static/placeholder-16x9.png',
    alt: 'Card Media',
  },
  href: '/',
};

const staticCard = {
  title: 'Static Card',
  subtitle: 'static',
  description: 'card with optional subtitle ',
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
      cards: [interactiveCard, staticCard],
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
