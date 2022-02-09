import React from 'react';
import {GridLayout, GridLayoutItem} from '..';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {GridLayoutProps} from '../types';

describe('GridLayout', () => {
  test('renders GridLayout', () => {
    const props: GridLayoutProps = {
      columns: '1fr 1fr 1fr 1fr',
      children: [
        <GridLayoutItem>TEST</GridLayoutItem>,
        <GridLayoutItem>TEST</GridLayoutItem>,
      ],
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders GridLayout with overrides', async () => {
    const props: GridLayoutProps = {
      overrides: {
        width: '100px',
      },
      children: [
        <GridLayoutItem>TEST</GridLayoutItem>,
        <GridLayoutItem>TEST</GridLayoutItem>,
      ],
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
      children: [
        <GridLayoutItem area="A">A</GridLayoutItem>,
        <GridLayoutItem area="B">B</GridLayoutItem>,
        <GridLayoutItem area="C">C</GridLayoutItem>,
        <GridLayoutItem area="D">D</GridLayoutItem>,
        <GridLayoutItem area="E">E</GridLayoutItem>,
      ],
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
      children: [
        <GridLayoutItem area="A">A</GridLayoutItem>,
        <GridLayoutItem area="B">B</GridLayoutItem>,
        <GridLayoutItem area="C">C</GridLayoutItem>,
        <GridLayoutItem area="D">D</GridLayoutItem>,
        <GridLayoutItem area="E">E</GridLayoutItem>,
      ],
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
        <GridLayoutItem>1</GridLayoutItem>,
        <GridLayoutItem>2</GridLayoutItem>,
        <GridLayoutItem>3</GridLayoutItem>,
        <GridLayoutItem>4</GridLayoutItem>,
        <GridLayoutItem>5</GridLayoutItem>,
        <GridLayoutItem>6</GridLayoutItem>,
        <GridLayoutItem>7</GridLayoutItem>,
        <GridLayoutItem>8</GridLayoutItem>,
        <GridLayoutItem>9</GridLayoutItem>,
        <GridLayoutItem>10</GridLayoutItem>,
        <GridLayoutItem>11</GridLayoutItem>,
        <GridLayoutItem>12</GridLayoutItem>,
        <GridLayoutItem>13</GridLayoutItem>,
        <GridLayoutItem>14</GridLayoutItem>,
        <GridLayoutItem>15</GridLayoutItem>,
        <GridLayoutItem>16</GridLayoutItem>,
      ],
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders inline GridLayout', () => {
    const props: GridLayoutProps = {
      inline: true,
      columns: '1fr 1fr',
      children: [
        <GridLayoutItem>TEST</GridLayoutItem>,
        <GridLayoutItem>TEST</GridLayoutItem>,
      ],
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a grid with rowGap and columnGap', () => {
    const props: GridLayoutProps = {
      columns: '1fr 1fr',
      columnGap: '20px',
      rowGap: '20px',
      children: [
        <GridLayoutItem>TEST</GridLayoutItem>,
        <GridLayoutItem>TEST</GridLayoutItem>,
        <GridLayoutItem>TEST</GridLayoutItem>,
        <GridLayoutItem>TEST</GridLayoutItem>,
      ],
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a grid with rowGap and columnGap as tokens', () => {
    const props: GridLayoutProps = {
      columns: '1fr 1fr',
      columnGap: 'space020',
      rowGap: 'space020',
      children: [
        <GridLayoutItem>TEST</GridLayoutItem>,
        <GridLayoutItem>TEST</GridLayoutItem>,
        <GridLayoutItem>TEST</GridLayoutItem>,
        <GridLayoutItem>TEST</GridLayoutItem>,
      ],
    };

    const fragment = renderToFragmentWithTheme(GridLayout, props);
    expect(fragment).toMatchSnapshot();
  });
});
