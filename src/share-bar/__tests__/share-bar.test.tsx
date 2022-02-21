import * as React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {ShareBar, ShareBarProps} from '..';
import {IconFilledFacebook, IconFilledTwitter} from '../../icons';
import {LinkInline} from '../../link';
import {Button} from '../../button';

describe('ShareBar', () => {
  const defaultChildren = [
    <IconFilledFacebook key="1" overrides={{size: 'iconSize040'}} />,
    <IconFilledTwitter key="2" overrides={{size: 'iconSize040'}} />,
  ];

  const defaultLinkChildren = [
    <LinkInline key="1" href="/">
      <IconFilledFacebook overrides={{size: 'iconSize040'}} />
    </LinkInline>,
    <LinkInline key="2" href="/">
      <IconFilledTwitter overrides={{size: 'iconSize040'}} />
    </LinkInline>,
  ];

  const linksAndButtonChildren = [
    ...defaultLinkChildren,
    <Button key="b">more options</Button>,
  ];

  test('renders with no icons and labels', () => {
    const fragment = renderToFragmentWithTheme(ShareBar);
    expect(fragment).toMatchSnapshot();
  });

  test('renders horizontally with twitter and facebook icons', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: defaultChildren,
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders vertically with twitter and facebook icons', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: defaultChildren,
      vertical: true,
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders horizontally with icons and label', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: defaultChildren,
      label: 'Share',
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders vertically with icons and label', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: defaultChildren,
      label: 'Share',
      vertical: true,
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders horizontally with icons as links and label', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: defaultLinkChildren,
      label: 'Share',
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders whatever components are passed to it', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: linksAndButtonChildren,
      label: 'Share',
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom stack spacing', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: linksAndButtonChildren,
      label: 'Share',
      overrides: {
        label: {
          spaceInline: 'space030',
        },
      },
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom label stylePreset', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: linksAndButtonChildren,
      label: 'Share',
      overrides: {
        label: {
          stylePreset: 'inkBase',
        },
      },
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders with horizontally with overrides for label spacing', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: linksAndButtonChildren,
      label: 'Share',
      overrides: {
        label: {
          spaceInline: 'space030',
        },
      },
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders with vertically with overrides for label spacing', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: linksAndButtonChildren,
      label: 'Share',
      vertical: true,
      overrides: {
        label: {
          spaceInline: 'space030',
        },
      },
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders with overrides for label typographyPreset', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: linksAndButtonChildren,
      label: 'Share',
      vertical: true,
      overrides: {
        label: {
          typographyPreset: 'utilityLabel030',
        },
      },
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders with overrides for item spacing', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: linksAndButtonChildren,
      label: 'Share',
      vertical: true,
      overrides: {
        items: {
          spaceInline: 'space060',
        },
      },
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });
});
