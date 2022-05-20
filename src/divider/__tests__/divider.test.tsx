import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Divider} from '..';

describe('Divider', () => {
  test('renders with default styles', () => {
    const fragment = renderToFragmentWithTheme(Divider);
    expect(fragment).toMatchSnapshot();
  });
  test('renders as vertical', () => {
    const fragment = renderToFragmentWithTheme(Divider, {
      vertical: true,
    });

    expect(fragment).toMatchSnapshot();
  });
  test(`renders with logical prop overrides`, () => {
    const fragment = renderToFragmentWithTheme(Divider, {
      vertical: true,
      overrides: {
        paddingInline: '30px',
        marginBlock: '20px',
      },
    });
    expect(fragment).toMatchSnapshot();
  });
});
