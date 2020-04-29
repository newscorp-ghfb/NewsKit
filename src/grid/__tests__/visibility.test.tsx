import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Visible, Hidden} from '..';

describe('Visible', () => {
  test('renders expected default styles', () => {
    const fragment = renderToFragmentWithTheme(Visible);
    expect(fragment).toMatchSnapshot();
  });

  test('renders expected display override styles', () => {
    const fragment = renderToFragmentWithTheme(Visible, {display: 'inline'});
    expect(fragment).toMatchSnapshot();
  });

  test('renders expected xs and md visible styles', () => {
    const fragment = renderToFragmentWithTheme(Visible, {
      xs: true,
      md: true,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders expected sm and lg visible styles', () => {
    const fragment = renderToFragmentWithTheme(Visible, {
      sm: true,
      lg: true,
    });
    expect(fragment).toMatchSnapshot();
  });
});

describe('Hidden', () => {
  test('renders expected default styles', () => {
    const fragment = renderToFragmentWithTheme(Hidden);
    expect(fragment).toMatchSnapshot();
  });

  test('renders expected display override styles', () => {
    const fragment = renderToFragmentWithTheme(Hidden, {display: 'flex'});
    expect(fragment).toMatchSnapshot();
  });

  test('renders expected xs and md hidden styles', () => {
    const fragment = renderToFragmentWithTheme(Hidden, {
      xs: true,
      md: true,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders expected sm and lg hidden styles', () => {
    const fragment = renderToFragmentWithTheme(Hidden, {
      sm: true,
      lg: true,
    });
    expect(fragment).toMatchSnapshot();
  });
});
