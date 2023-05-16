import React from 'react';
import {GridLayout, GridLayoutItem} from '..';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {GridLayoutProps} from '../types';

const defaultChildren = [
  <GridLayoutItem key="1">TEST</GridLayoutItem>,
  <GridLayoutItem key="2">TEST</GridLayoutItem>,
  <GridLayoutItem key="3">TEST</GridLayoutItem>,
  <GridLayoutItem key="4">TEST</GridLayoutItem>,
];

const areasChildren = [
  <GridLayoutItem area="A" key="A">
    A
  </GridLayoutItem>,
  <GridLayoutItem area="B" key="B">
    B
  </GridLayoutItem>,
  <GridLayoutItem area="C" key="C">
    C
  </GridLayoutItem>,
  <GridLayoutItem area="D" key="D">
    D
  </GridLayoutItem>,
  <GridLayoutItem area="E" key="E">
    E
  </GridLayoutItem>,
];

describe('GridLayout', () => {
  test('renders GridLayout', () => {
    const props: GridLayoutProps = {
      columns: '1fr 1fr 1fr 1fr',
      children: defaultChildren,
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders GridLayout with overrides', async () => {
    const props: GridLayoutProps = {
      overrides: {
        width: '100px',
      },
      children: defaultChildren,
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props) as any;
    expect(fragment).toMatchSnapshot();
  });

  test('renders GridLayout with areas', () => {
    const props: GridLayoutProps = {
      areas: `
        "A A"
      "B C"
        "D E"`,
      children: areasChildren,
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders GridLayout with container name and type', () => {
    const props: GridLayoutProps = {
      containerName: 'test-container',
      containerType: 'inline-size',
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders GridLayout with different areas for different breakpoints', () => {
    const props: GridLayoutProps = {
      areas: {
        xs: `
          A
          B
          C
          D
          E
        `,
        md: `
          A A
          B C
          D E
        `,
      },
      children: areasChildren,
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders GridLayout with areas without quotes around areas', () => {
    const props: GridLayoutProps = {
      areas: `
        A A
        B C
        D E`,
      children: Areas => (
        <>
          <Areas.A>
            <div>A</div>
          </Areas.A>
          <Areas.B>
            <div>B</div>
          </Areas.B>
          <Areas.C>
            <div>C</div>
          </Areas.C>
          <Areas.D>
            <div>D</div>
          </Areas.D>
          <Areas.E>
            <div>E</div>
          </Areas.E>
        </>
      ),
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders GridLayout with mixed values in columns and rows', () => {
    const props: GridLayoutProps = {
      columns: {md: '1fr sizing120', lg: '1fr sizing120 300px 1fr'},
      rows: {md: '1fr sizing120', lg: '1fr sizing120 300px 1fr'},
      children: [
        <GridLayoutItem key="1">1</GridLayoutItem>,
        <GridLayoutItem key="2">2</GridLayoutItem>,
        <GridLayoutItem key="3">3</GridLayoutItem>,
        <GridLayoutItem key="4">4</GridLayoutItem>,
        <GridLayoutItem key="5">5</GridLayoutItem>,
        <GridLayoutItem key="6">6</GridLayoutItem>,
        <GridLayoutItem key="7">7</GridLayoutItem>,
        <GridLayoutItem key="8">8</GridLayoutItem>,
        <GridLayoutItem key="9">9</GridLayoutItem>,
        <GridLayoutItem key="10">10</GridLayoutItem>,
        <GridLayoutItem key="11">11</GridLayoutItem>,
        <GridLayoutItem key="12">12</GridLayoutItem>,
        <GridLayoutItem key="13">13</GridLayoutItem>,
        <GridLayoutItem key="14">14</GridLayoutItem>,
        <GridLayoutItem key="15">15</GridLayoutItem>,
        <GridLayoutItem key="16">16</GridLayoutItem>,
      ],
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders inline GridLayout', () => {
    const props: GridLayoutProps = {
      inline: true,
      columns: '1fr 1fr',
      children: defaultChildren,
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a grid with rowGap and columnGap', () => {
    const props: GridLayoutProps = {
      columns: '1fr 1fr',
      columnGap: '20px',
      rowGap: '20px',
      children: defaultChildren,
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a grid with rowGap and columnGap as tokens', () => {
    const props: GridLayoutProps = {
      columns: '1fr 1fr',
      columnGap: 'space020',
      rowGap: 'space020',
      children: defaultChildren,
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders GridLayout with colum/row prop', () => {
    const props: GridLayoutProps = {
      columns: `repeat(12, 1fr)`,
      rows: `repeat(10, 1fr)`,
      children: [
        <GridLayoutItem key="1" column="auto / span 8" row="1 / 5">
          8 cells
        </GridLayoutItem>,
        <GridLayoutItem key="2" column="auto / span 4" row="2 / 3">
          4 cells
        </GridLayoutItem>,
      ],
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a grid with autoFlow', () => {
    const props: GridLayoutProps = {
      columns: 'repeat(3, 60px)',
      columnGap: '20px',
      rowGap: '20px',
      autoFlow: 'column',
      children: defaultChildren,
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a grid with autoRows', () => {
    const props: GridLayoutProps = {
      areas: 'a a',
      autoRows: 'sizing100',
      columnGap: '20px',
      rowGap: '20px',
      children: defaultChildren,
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a grid with autoColumns', () => {
    const props: GridLayoutProps = {
      areas: 'a a',
      autoColumns: 'sizing100',
      columnGap: '20px',
      rowGap: '20px',
      children: defaultChildren,
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders GridLayout with logical overrides', () => {
    const props: GridLayoutProps = {
      overrides: {
        paddingInline: '30px',
        marginInline: '30px',
      },
      children: defaultChildren,
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props);
    expect(fragment).toMatchSnapshot();
  });
});
