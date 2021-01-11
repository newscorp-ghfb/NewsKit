import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import {MediaList} from '../media-list';

describe('Media List', () => {
  const mandatoryProps = {
    introduction: 'Media List Introduction',
    cards: [
      {
        title: 'Title',
        description: 'Description',
        media: {
          src: '/static/placeholder-16x9.png',
          alt: 'Card Media',
        },
      },
      {
        title: 'Title',
        description: 'Description',
        media: {
          src: '/static/placeholder-16x9.png',
          alt: 'Card Media',
        },
      },
    ],
  };
  test('renders with default layout', () => {
    const fragment = renderToFragmentWithTheme(MediaList, mandatoryProps);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom layout', () => {
    const fragment = renderToFragmentWithTheme(MediaList, {
      ...mandatoryProps,
      spaceStack: 'space110',
      xsCard: 6,
      lgCard: 3,
    });
    expect(fragment).toMatchSnapshot();
  });
});
