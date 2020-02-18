import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Button, IconButton} from '..';
import {ButtonSize, IconPlacement} from '../types';
import {Email} from '../../icons/email';
import {ColorKeys} from '../../themes/mappers/colors';

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
      $stylePreset: 'interactive050',
    };

    const fragment = renderToFragmentWithTheme(Button, props);
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

  test('renders when there is no icon', () => {
    const props = {
      $size: ButtonSize.Small,
      children: 'click this!',
    };
    const fragment = renderToFragmentWithTheme(Button, props);
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

  test('renders when there is an icon with the placement set to start', () => {
    const props = {
      $size: ButtonSize.Small,
      icon: Email,
      iconPlacement: IconPlacement.Start,
      children: [<Email />, 'click this!'],
    };
    const fragment = renderToFragmentWithTheme(Button, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders when there is an icon with the placement set to end', () => {
    const props = {
      $size: ButtonSize.Small,
      icon: Email,
      iconPlacement: IconPlacement.End,
      children: [<Email />, 'click this!'],
    };
    const fragment = renderToFragmentWithTheme(Button, props);
    expect(fragment).toMatchSnapshot();
  });
});
