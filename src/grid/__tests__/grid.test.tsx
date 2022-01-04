import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Grid} from '..';

describe('Grid Container', () => {
  test('renders expected styles', () => {
    const fragment = renderToFragmentWithTheme(Grid);
    expect(fragment).toMatchSnapshot();
  });

  test('renders expected column styles', () => {
    const fragment = renderToFragmentWithTheme(Grid, {
      xsColumnGutter: 'sizing000',
      smColumnGutter: 'sizing010',
      mdColumnGutter: 'sizing030',
      lgColumnGutter: 'sizing050',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders expected row styles', () => {
    const fragment = renderToFragmentWithTheme(Grid, {
      xsRowGutter: 'sizing000',
      smRowGutter: 'sizing010',
      mdRowGutter: 'sizing030',
      lgRowGutter: 'sizing050',
    });
    expect(fragment).toMatchSnapshot();
  });
});
