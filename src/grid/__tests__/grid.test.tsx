import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Grid} from '..';

describe('Grid Container', () => {
  test('renders expected styles', () => {
    const fragment = renderToFragmentWithTheme(Grid);
    expect(fragment).toMatchSnapshot();
  });

  test('renders expected column styles', () => {
    const fragment = renderToFragmentWithTheme(Grid, {
      xsColumnGutter: 'space000',
      smColumnGutter: 'space010',
      mdColumnGutter: 'space030',
      lgColumnGutter: 'space050',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders expected row styles', () => {
    const fragment = renderToFragmentWithTheme(Grid, {
      xsRowGutter: 'space000',
      smRowGutter: 'space010',
      mdRowGutter: 'space030',
      lgRowGutter: 'space050',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders expected max width', () => {
    const fragment = renderToFragmentWithTheme(Grid, {
      maxWidth: '500px',
    });
    expect(fragment).toMatchSnapshot();
  });
});
