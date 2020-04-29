import * as React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {ShareBar, ShareBarProps} from '..';
import {Facebook, Twitter} from '../../icons';
import {Link} from '../../link';
import {Button} from '../../button';

describe('ShareBar', () => {
  test('renders with no icons and labels', () => {
    const fragment = renderToFragmentWithTheme(ShareBar);
    expect(fragment).toMatchSnapshot();
  });

  test('renders horizontally with twitter and facebook icons', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: [
        <Facebook size="iconSize040" />,
        <Twitter size="iconSize040" />,
      ],
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders vertically with twitter and facebook icons', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: [
        <Facebook size="iconSize040" />,
        <Twitter size="iconSize040" />,
      ],
      vertical: true,
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders horizontally with icons and label', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: [
        <Facebook size="iconSize040" />,
        <Twitter size="iconSize040" />,
      ],
      label: 'Share',
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders vertically with icons and label', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: [
        <Facebook size="iconSize040" />,
        <Twitter size="iconSize040" />,
      ],
      label: 'Share',
      vertical: true,
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders horizontally with icons as links and label', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: [
        <Link href="/">
          <Facebook size="iconSize040" />
        </Link>,
        <Link href="/">
          <Twitter size="iconSize040" />
        </Link>,
      ],
      label: 'Share',
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders whatever components are passed to it', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: [
        <Link href="/">
          <Facebook size="iconSize040" />
        </Link>,
        <Link href="/">
          <Twitter size="iconSize040" />
        </Link>,
        <Button>more options</Button>,
      ],
      label: 'Share',
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom stack spacing', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: [
        <Link href="/">
          <Facebook size="iconSize040" />
        </Link>,
        <Link href="/">
          <Twitter size="iconSize040" />
        </Link>,
        <Button>more options</Button>,
      ],
      label: 'Share',
      itemSpacePreset: 'sizing040',
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom label stylePreset', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: [
        <Link href="/">
          <Facebook size="iconSize040" />
        </Link>,
        <Link href="/">
          <Twitter size="iconSize040" />
        </Link>,
        <Button>more options</Button>,
      ],
      label: 'Share',
      labelStylePreset: 'buttonSolidPrimary',
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders with horizontally custom label spacing', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: [
        <Link href="/">
          <Facebook size="iconSize040" />
        </Link>,
        <Link href="/">
          <Twitter size="iconSize040" />
        </Link>,
        <Button>more options</Button>,
      ],
      label: 'Share',
      labelSpacePreset: 'spaceInline060',
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders with vertically custom label spacing', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: [
        <Link href="/">
          <Facebook size="iconSize040" />
        </Link>,
        <Link href="/">
          <Twitter size="iconSize040" />
        </Link>,
        <Button>more options</Button>,
      ],
      label: 'Share',
      vertical: true,
      labelSpacePreset: 'spaceStack060',
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom label typePreset', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      children: [
        <Link href="/">
          <Facebook size="iconSize040" />
        </Link>,
        <Link href="/">
          <Twitter size="iconSize040" />
        </Link>,
        <Button>more options</Button>,
      ],
      label: 'Share',
      vertical: true,
      labelTypePreset: 'tag020',
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });
});
