import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import {Usage} from '..';

describe('Usage', () => {
  test('renders with mandatory props', () => {
    const props = {
      introduction:
        'Add details of when and how to use this component. This could include do’s and don’ts to support guidance details.',
      cards: [
        {
          title: 'Title',
          description: 'Description',
          allowed: true,
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'src alt',
          },
        },
        {
          title: 'Title',
          description: 'Description',
          allowed: true,
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'src alt',
          },
        },
        {
          title: 'Title',
          description: 'Description',
          allowed: false,
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'src alt',
          },
        },
      ],
    };
    const fragment = renderToFragmentWithTheme(Usage, props);
    expect(fragment).toMatchSnapshot();
  });
});
