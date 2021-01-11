import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import {Anatomy} from '..';

describe('Anatomy', () => {
  test('renders with mandatory props', () => {
    const props = {
      introduction: 'Introduction Test',
      list: ['Item', 'Item', 'Item', 'Item'],
      media: {
        src: '/static/placeholder-16x9.png',
        alt: 'Card Media',
      },
    };
    const fragment = renderToFragmentWithTheme(Anatomy, props);
    expect(fragment).toMatchSnapshot();
  });
});
