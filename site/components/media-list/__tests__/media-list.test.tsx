import {renderToFragmentWithTheme} from '../../../utils/test-utils';
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
      layout: '3-span-hero',
      spaceStack: 'space110',
      gridProps: {
        xsRowGutter: 'space030',
        xsMargin: 'space010',
      },
    });
    expect(fragment).toMatchSnapshot();
  });
});
