import {renderToFragmentWithTheme} from '../../test/test-utils';
import {OrderedList} from '..';

describe('OrderedList', () => {
  test('renders with defaults', () => {
    const props = {
      children: ['first node', 'second node', 'third node'],
    };
    const fragment = renderToFragmentWithTheme(OrderedList, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with invalid nodes', () => {
    const props = {
      children: [null, 'second node', 'third node'],
    };
    const fragment = renderToFragmentWithTheme(OrderedList, props);
    expect(fragment).toMatchSnapshot();
  });
});
