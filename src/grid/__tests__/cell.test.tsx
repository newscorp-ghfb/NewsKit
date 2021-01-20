import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Cell} from '..';
import {newskitLightTheme} from '../../theme';
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

  test('renders expected cell offset styles', () => {
    const fragment = renderToFragmentWithTheme(Cell, {
      xsOffset: 1,
      smOffset: 2,
      mdOffset: 3,
      lgOffset: 4,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders expected inherited sm cell offset styles from theme', () => {
    const fragment = renderToFragmentWithTheme(Cell, {
      xsOffset: 1,
      smOffset: 2,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with expected grid overrides', () => {
    const fragment = renderToFragmentWithTheme(() => (
      <GridContextProvider
        value={{
          xsMargin: 'space050',
          smMargin: 'space060',
          mdMargin: 'space070',
          lgMargin: 'space080',

          xsColumnGutter: 'space000',
          smColumnGutter: 'space010',
          mdColumnGutter: 'space030',
          lgColumnGutter: 'space050',

          xsRowGutter: 'space010',
          smRowGutter: 'space020',
          mdRowGutter: 'space040',
          lgRowGutter: 'space060',
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
          xsMargin: 'space050',
          smMargin: 'space060',

          xsColumnGutter: 'space000',
          smColumnGutter: 'space010',

          xsRowGutter: 'space010',
          smRowGutter: 'space020',
        }}
      >
        <Cell>blah blah</Cell>
      </GridContextProvider>
    ));
    expect(fragment).toMatchSnapshot();
  });

  test('renders full width grid cell at expected breakpoints', () => {
    const fragment = renderToFragmentWithTheme(Cell, {
      xs: 12,
      md: 'full-width',
      xl: 6,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('re-renders full width grid cell css when grid margin changes', () => {
    const fragment = renderToFragmentWithTheme(() => (
      <GridContextProvider
        value={{
          xsMargin: 'space000',
          smMargin: 'space050',
          lgMargin: 'space060',
        }}
      >
        <Cell xs="full-width" />
      </GridContextProvider>
    ));
    expect(fragment).toMatchSnapshot();
  });
});
