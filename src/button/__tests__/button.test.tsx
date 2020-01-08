import * as React from 'react';

import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Button} from '..';
import {ButtonSize, ButtonShape} from '../types';
import {Email} from '../../icons';

describe('Button', () => {
  test('renders with fallback formatting', () => {
    const fragment = renderToFragmentWithTheme(Button);
    expect(fragment).toMatchSnapshot();
  });

  test('renders Small Square Button', () => {
    const props = {
      $size: ButtonSize.Small,
      $shape: ButtonShape.Square,
    };
    const fragment = renderToFragmentWithTheme(Button, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders Medium Rounded Button', () => {
    const props = {
      $size: ButtonSize.Medium,
      $shape: ButtonShape.Rounded,
    };
    const fragment = renderToFragmentWithTheme(Button, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders Large Button', () => {
    const props = {
      $size: ButtonSize.Large,
    };
    const fragment = renderToFragmentWithTheme(Button, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders Icon Button', () => {
    const props = {
      $size: ButtonSize.Large,
      icon: () => <Email $size="sizing120" />,
    };
    const fragment = renderToFragmentWithTheme(Button, props);
    expect(fragment).toMatchSnapshot();
  });

  test('Throws errors with both Icon and children Button', () => {
    const props = {
      $size: ButtonSize.Large,
      icon: () => <Email $size="sizing120" />,
      children: "can't click this!",
    };

    expect(() =>
      renderToFragmentWithTheme(Button, props),
    ).toThrowErrorMatchingSnapshot();
  });
});
