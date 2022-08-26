import React from 'react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {Tag, TagProps} from '..';
import {IconFilledEmail} from '../../icons';
import {FlagSize} from '../../flag/types';

const renderTagWithText = (props: TagProps) => <Tag {...props}>Text</Tag>;
const renderTagWithTextAndIcon = (props: TagProps) => (
  <Tag {...props}>
    <IconFilledEmail overrides={{size: 'iconSize010'}} />
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

  test('renders a tag with a custom typographyPreset', () => {
    const props: TagProps = {
      overrides: {
        typographyPreset: 'utilityLabel030',
      },
    };
    const fragment = renderToFragmentWithTheme(renderTagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a tag with no paddings', () => {
    const props: TagProps = {
      overrides: {
        spaceInset: 'spaceInsetSquish000',
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

  test('href renders as an anchor and user can pass anchor attributes', () => {
    const props: TagProps = {
      href: '#',
      target: '_blank',
    };

    const {getByTestId, asFragment} = renderWithTheme(renderTagWithText, props);

    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId('tag')).toHaveAttribute('target', '_blank');
  });

  test('href renders in disable state as a div', () => {
    const props: TagProps = {
      href: '#',
      disabled: true,
    };
    const {getByTestId, asFragment} = renderWithTheme(renderTagWithText, props);

    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId('tag')).toHaveAttribute('disabled');
  });

  ['small', 'medium', 'large'].forEach(size => {
    test(`renders ${size} Tag`, () => {
      const props: TagProps = {
        size: size as FlagSize,
      };
      const fragment = renderToFragmentWithTheme(renderTagWithText, props);
      expect(fragment).toMatchSnapshot();
    });
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
        spaceInline: 'space020',
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

  test('renders a tag with logical props overrides', () => {
    const props: TagProps = {
      overrides: {
        paddingInline: 'space020',
        paddingBlock: 'space040',
        marginBlock: 'space060',
        marginInline: 'space080',
      },
    };
    const fragment = renderToFragmentWithTheme(renderTagWithTextAndIcon, props);
    expect(fragment).toMatchSnapshot();
  });
});
