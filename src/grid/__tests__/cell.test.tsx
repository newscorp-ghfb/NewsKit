import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Cell} from '..';
import {newskitLightTheme} from '../../themes';
import {GridContextProvider} from '../context';

describe('Cell Container', () => {
  test('renders expected default styles', () => {
    const fragment = renderToFragmentWithTheme(Cell);
    expect(fragment).toMatchSnapshot();
  });

  test('renders expected cell span styles', () => {
    const fragment = renderToFragmentWithTheme(Cell, {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 2,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders expected inherited sm cell span styles', () => {
    const fragment = renderToFragmentWithTheme(Cell, {
      xs: 12,
      sm: 6,
    });
    expect(fragment).toMatchSnapshot();
  });

  Object.keys(newskitLightTheme.breakpoints).forEach(breakpoint => {
    test(`renders expected hidden at ${breakpoint} styles`, () => {
      const fragment = renderToFragmentWithTheme(Cell, {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 2,
        [`${breakpoint}Hidden`]: true,
      });
      expect(fragment).toMatchSnapshot();
    });
  });

  test('renders expected cell order styles', () => {
    const fragment = renderToFragmentWithTheme(Cell, {
      xsOrder: 1,
      smOrder: 2,
      mdOrder: 3,
      lgOrder: 4,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders expected inherited sm cell order styles', () => {
    const fragment = renderToFragmentWithTheme(Cell, {
      xsOrder: 1,
      smOrder: 2,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with expected grid overrides', () => {
    const fragment = renderToFragmentWithTheme(() => (
      <GridContextProvider
        value={{
          xsMargin: 'sizing050',
          smMargin: 'sizing060',
          mdMargin: 'sizing070',
          lgMargin: 'sizing080',

          xsColumnGutter: 'sizing000',
          smColumnGutter: 'sizing010',
          mdColumnGutter: 'sizing030',
          lgColumnGutter: 'sizing050',

          xsRowGutter: 'sizing010',
          smRowGutter: 'sizing020',
          mdRowGutter: 'sizing040',
          lgRowGutter: 'sizing060',
        }}
      >
        <Cell>blah blah</Cell>
      </GridContextProvider>
    ));
    expect(fragment).toMatchSnapshot();
  });

  test('renders with expected inherited sm grid overrides', () => {
    const fragment = renderToFragmentWithTheme(() => (
      <GridContextProvider
        value={{
          xsMargin: 'sizing050',
          smMargin: 'sizing060',

          xsColumnGutter: 'sizing000',
          smColumnGutter: 'sizing010',

          xsRowGutter: 'sizing010',
          smRowGutter: 'sizing020',
        }}
      >
        <Cell>blah blah</Cell>
      </GridContextProvider>
    ));
    expect(fragment).toMatchSnapshot();
  });
});
