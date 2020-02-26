import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Button, IconButton} from '..';
import {ButtonSize} from '../types';
import {Email} from '../../icons/email';
import {ColorKeys} from '../../themes/mappers/colors';
import {BaseButton} from '../base-button';

describe('BaseButton', () => {
  test('renders with fallback formatting', () => {
    const fragment = renderToFragmentWithTheme(BaseButton);
    expect(fragment).toMatchSnapshot();
  });
});

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

  test('renders with different style preset', () => {
    const props = {
      $stylePreset: 'buttonOutlinedPrimary',
    };

    const fragment = renderToFragmentWithTheme(Button, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders when there is no icon', () => {
    const props = {
      $size: ButtonSize.Small,
      children: 'click this!',
    };
    const fragment = renderToFragmentWithTheme(Button, props);
    expect(fragment).toMatchSnapshot();
  });

  describe('Loading Button', () => {
    test('renders Small Button', () => {
      const props = {
        $size: ButtonSize.Small,
        isLoading: true,
      };
      const fragment = renderToFragmentWithTheme(Button, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders Medium Button', () => {
      const props = {
        $size: ButtonSize.Medium,
        isLoading: true,
      };
      const fragment = renderToFragmentWithTheme(Button, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders Large Button', () => {
      const props = {
        $size: ButtonSize.Large,
        isLoading: true,
      };
      const fragment = renderToFragmentWithTheme(Button, props);
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('IconButton', () => {
    test('renders Icon Button with default size', () => {
      const props = {
        children: [<Email />],
      };
      const fragment = renderToFragmentWithTheme(IconButton, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders Icon Button', () => {
      const props = {
        $size: ButtonSize.Large,
        children: [<Email />],
      };
      const fragment = renderToFragmentWithTheme(IconButton, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders Icon Button in loading State', () => {
      const props = {
        $size: ButtonSize.Large,
        isLoading: true,
        children: [<Email />],
      };
      const fragment = renderToFragmentWithTheme(IconButton, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders when there is an icon with a colour', () => {
      const props = {
        $size: ButtonSize.Small,
        $iconColor: 'buttonText' as ColorKeys,
        children: [<Email />, 'click this!'],
      };
      const fragment = renderToFragmentWithTheme(IconButton, props);
      expect(fragment).toMatchSnapshot();
    });
  });
});
