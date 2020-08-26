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

  test('renders a tag with a custom stylePreset', () => {
    const props: TagProps = {
      overrides: {
        stylePreset: 'tagPrimary',
      },
    };
    const fragment = renderToFragmentWithTheme(renderTagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a tag with a custom typePreset', () => {
    const props: TagProps = {
      overrides: {
        typePreset: 'label030',
      },
    };
    const fragment = renderToFragmentWithTheme(renderTagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a tag with no paddings', () => {
    const props: TagProps = {
      overrides: {
        paddingPreset: 'spaceInset000Squish',
      },
    };
    const fragment = renderToFragmentWithTheme(renderTagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with default stylePreset if supplied with invalid value', () => {
    const props: TagProps = {
      overrides: {
        stylePreset: undefined,
      },
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

  test('renders a tag with an icon and custom iconSize', () => {
    const props: TagProps = {
      overrides: {
        iconSize: 'iconSize040',
      },
    };
    const fragment = renderToFragmentWithTheme(renderTagWithTextAndIcon, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a tag with an icon and custom spacing between elements', () => {
    const props: TagProps = {
      overrides: {
        space: 'sizing020',
      },
    };
    const fragment = renderToFragmentWithTheme(renderTagWithTextAndIcon, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a tag with token set for width and height', () => {
    const props: TagProps = {
      overrides: {
        width: 'sizing120',
        height: 'sizing120',
      },
    };
    const fragment = renderToFragmentWithTheme(renderTagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a tag with percentage for width and height', () => {
    const props: TagProps = {
      overrides: {
        width: '100%',
        height: '100%',
      },
    };
    const fragment = renderToFragmentWithTheme(renderTagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a tag with fixed for width and height', () => {
    const props: TagProps = {
      overrides: {
        width: '100px',
        height: '100px',
      },
    };
    const fragment = renderToFragmentWithTheme(renderTagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a tag with token set for minWidth and minHeight', () => {
    const props: TagProps = {
      overrides: {
        minWidth: 'sizing120',
        minHeight: 'sizing120',
      },
    };
    const fragment = renderToFragmentWithTheme(renderTagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a tag with percentage for minWidth and minHeight', () => {
    const props: TagProps = {
      overrides: {
        minWidth: '100%',
        minHeight: '100%',
      },
    };
    const fragment = renderToFragmentWithTheme(renderTagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a tag with fixed for minWidth and minHeight', () => {
    const props: TagProps = {
      overrides: {
        minWidth: '100px',
        minHeight: '100px',
      },
    };
    const fragment = renderToFragmentWithTheme(renderTagWithText, props);
    expect(fragment).toMatchSnapshot();
  });
});
