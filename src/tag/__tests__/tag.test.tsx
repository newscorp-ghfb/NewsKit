import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Tag, TagSize, TagProps} from '..';
import {Email} from '../../icons';

const tagSizeKeys = (Object.keys(TagSize) as unknown) as Array<
  keyof typeof TagSize
>;

const renderTagWithText = (props: TagProps) => <Tag {...props}>Text</Tag>;
const renderTagWithTextAndIcon = (props: TagProps) => (
  <Tag {...props}>
    <Email size="iconSize010" />
    Text
  </Tag>
);

describe('Tag', () => {
  test('renders with default styles', () => {
    const fragment = renderToFragmentWithTheme(renderTagWithText);
    expect(fragment).toMatchSnapshot();
  });

  test('renders in disabled state', () => {
    const props: TagProps = {
      disabled: true,
    };
    const fragment = renderToFragmentWithTheme(renderTagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('href renders as an anchor', () => {
    const props: TagProps = {
      href: '#',
    };
    const fragment = renderToFragmentWithTheme(renderTagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('href renders in disable state as a div', () => {
    const props: TagProps = {
      href: '#',
      disabled: true,
    };
    const fragment = renderToFragmentWithTheme(renderTagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test.each(tagSizeKeys)('renders with %s size', currentSize => {
    const props: TagProps = {
      size: TagSize[currentSize],
    };
    const fragment = renderToFragmentWithTheme(renderTagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a tag with an icon', () => {
    const fragment = renderToFragmentWithTheme(renderTagWithTextAndIcon);
    expect(fragment).toMatchSnapshot();
  });
});
