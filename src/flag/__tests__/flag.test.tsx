import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {FlagSize, Flag, FlagProps} from '..';
import {Email} from '../../icons';

const flagSizeKeys = (Object.keys(FlagSize) as unknown) as Array<
  keyof typeof FlagSize
>;

const children = 'Text';

describe('Flag', () => {
  test('renders with default styles', () => {
    const fragment = renderToFragmentWithTheme(Flag, {
      children,
    });
    expect(fragment).toMatchSnapshot();
  });

  test.each(flagSizeKeys)('renders with %s size', currentSize => {
    const flagSize = FlagSize[currentSize];
    const fragment = renderToFragmentWithTheme(Flag, {
      size: flagSize,
      children,
    } as FlagProps);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a flag with a custom stylePreset', () => {
    const fragment = renderToFragmentWithTheme(Flag, {
      stylePreset: 'flagMinimal',
      children,
    } as FlagProps);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a flag with no paddings', () => {
    const fragment = renderToFragmentWithTheme(Flag, {
      stylePreset: 'flagMinimal',
      spacing: 'spaceInset000Squish',
      children,
    } as FlagProps);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a solid flag with an icon', () => {
    const fragment = renderToFragmentWithTheme(Flag, {
      children: [<Email size="iconSize010" />, 'Text'],
    } as FlagProps);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a minimal flag with an icon', () => {
    const fragment = renderToFragmentWithTheme(Flag, {
      children: [<Email size="iconSize010" />, 'Text'],
      stylePreset: 'flagMinimal',
      spacing: 'spaceInset000Squish',
    } as FlagProps);
    expect(fragment).toMatchSnapshot();
  });
});
