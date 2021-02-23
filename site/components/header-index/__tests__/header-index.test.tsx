import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {HeaderIndex} from '../header-index';

describe('HeaderIndex', () => {
  test('renders without crashing', () => {
    const props = {
      title: 'Foundations',
      media: {
        src: 'test',
      },
      children: 'description',
    };

    const fragment = renderToFragmentWithTheme(HeaderIndex, props);
    expect(fragment).toMatchSnapshot();
  });
});
