import * as React from 'react';
import {Svg} from '../svg';
import {renderToFragment} from '../../test/test-utils';

describe('Svg', () => {
  test('renders a menu icon with specified size and default color', () => {
    const theme = {
      colors: {
        inkBase: '#000000',
      },
      sizing: {
        iconSize050: '24px',
      },
    };
    const fragment = renderToFragment(
      <Svg theme={theme as any} viewBox="1 2 3 4" $size="iconSize050" />,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders a menu icon with specified size and color', () => {
    const theme = {
      colors: {
        white: '#158acf',
      },
      sizing: {
        iconSize010: '4px',
      },
    };
    const fragment = renderToFragment(
      <Svg
        theme={theme as any}
        viewBox="1 2 3 4"
        $size="iconSize010"
        $color="white"
      />,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders a menu icon with no size', () => {
    const theme = {
      colors: {
        white: '#158acf',
      },
      sizing: {
        sizing010: '4px',
      },
    };
    const fragment = renderToFragment(
      <Svg theme={theme as any} viewBox="1 2 3 4" $color="white" />,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders a menu icon with $float property', () => {
    const theme = {
      colors: {
        white: '#158acf',
      },
      sizing: {
        sizing010: '4px',
      },
    };
    const fragment = renderToFragment(
      <Svg theme={theme as any} viewBox="1 2 3 4" $float="left" />,
    );
    expect(fragment).toMatchSnapshot();
  });
});
