import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Icon} from '../icon';

describe('Icon', () => {
  test('does not render a non existant icon', () => {
    const fragment = renderToFragmentWithTheme(Icon, {
      type: 'adfsgnbtrfeadwcevsbdrvseaw',
    } as any);

    expect(fragment).toMatchSnapshot();
  });
});
