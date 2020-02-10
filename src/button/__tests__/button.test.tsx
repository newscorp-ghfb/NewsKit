import * as React from 'react';

import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Button} from '..';
import {ButtonSize} from '../types';
import {Email} from '../../icons';

describe('Button', () => {
  test('renders with fallback formatting', () => {
    const fragment = renderToFragmentWithTheme(Button);
    expect(fragment).toMatchSnapshot();
  });

  test('renders Small Button', () => {
    const props = {
      $size: ButtonSize.Small,
    };
    const fragment = renderToFragmentWithTheme(Button, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders Medium Button', () => {
    const props = {
      $size: ButtonSize.Medium,
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
      icon: () => <Email $size="iconSize050" />,
    };
    const fragment = renderToFragmentWithTheme(Button, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders when there is no icon', () => {
    const props = {
      children: 'click this!',
    };

    expect(() => renderToFragmentWithTheme(Button, props)).toMatchSnapshot();
  });

  test('renders with different style preset', () => {
    const props = {
      $stylePreset: 'interactive050',
    };

    const fragment = renderToFragmentWithTheme(Button, props);
    expect(fragment).toMatchSnapshot();
  });
});
