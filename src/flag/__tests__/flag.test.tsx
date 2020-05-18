import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Flag, FlagSize, FlagProps} from '..';
import {Email} from '../../icons';

const flagSizeKeys = (Object.keys(FlagSize) as unknown) as Array<
  keyof typeof FlagSize
>;

const renderFlagWithText = (props: FlagProps) => <Flag {...props}>Text</Flag>;
const renderFlagWithTextAndIcon = (props: FlagProps) => (
  <Flag {...props}>
    <Email size="iconSize010" />
    Text
  </Flag>
);

describe('Flag', () => {
  test('renders with default styles', () => {
    const fragment = renderToFragmentWithTheme(renderFlagWithText);
    expect(fragment).toMatchSnapshot();
  });

  test.each(flagSizeKeys)('renders with %s size', currentSize => {
    const props: FlagProps = {
      size: FlagSize[currentSize],
    };
    const fragment = renderToFragmentWithTheme(renderFlagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a flag with a custom stylePreset', () => {
    const props: FlagProps = {
      stylePreset: 'flagMinimal',
    };
    const fragment = renderToFragmentWithTheme(renderFlagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a flag with no paddings', () => {
    const props: FlagProps = {
      stylePreset: 'flagMinimal',
      padding: 'spaceInset000Squish',
    };
    const fragment = renderToFragmentWithTheme(renderFlagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a solid flag with an icon', () => {
    const fragment = renderToFragmentWithTheme(renderFlagWithTextAndIcon);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a minimal flag with an icon', () => {
    const props: FlagProps = {
      stylePreset: 'flagMinimal',
      padding: 'spaceInset000Squish',
    };
    const fragment = renderToFragmentWithTheme(
      renderFlagWithTextAndIcon,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });
});
