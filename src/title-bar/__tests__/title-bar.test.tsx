import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {TitleBar, TitleBarProps, TitleBarBorder, TitleAlignment} from '..';
import {Button} from '../../button';
import {Link} from '../../link';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from '../../typography';

const borderPositionKeys = (Object.keys(TitleBarBorder) as unknown) as Array<
  keyof typeof TitleBarBorder
>;

describe('TitleBar', () => {
  const TITLE = 'Test title of title bar';
  test('should display correctly with default styles and given title', () => {
    const fragment = renderToFragmentWithTheme(TitleBar, {
      children: TITLE,
    } as TitleBarProps);
    expect(fragment).toMatchSnapshot();
  });

  describe('should display correctly as', () => {
    test(`Heading1 tag`, () => {
      const fragment = renderToFragmentWithTheme(TitleBar, {
        children: TITLE,
        headingComponent: Heading1,
      } as TitleBarProps);
      expect(fragment).toMatchSnapshot();
    });
    test(`Heading2 tag`, () => {
      const fragment = renderToFragmentWithTheme(TitleBar, {
        children: TITLE,
        headingComponent: Heading2,
      } as TitleBarProps);
      expect(fragment).toMatchSnapshot();
    });
    test(`Heading3 tag`, () => {
      const fragment = renderToFragmentWithTheme(TitleBar, {
        children: TITLE,
        headingComponent: Heading3,
      } as TitleBarProps);
      expect(fragment).toMatchSnapshot();
    });
    test(`Heading4 tag`, () => {
      const fragment = renderToFragmentWithTheme(TitleBar, {
        children: TITLE,
        headingComponent: Heading4,
      } as TitleBarProps);
      expect(fragment).toMatchSnapshot();
    });
    test(`Heading5 tag`, () => {
      const fragment = renderToFragmentWithTheme(TitleBar, {
        children: TITLE,
        headingComponent: Heading5,
      } as TitleBarProps);
      expect(fragment).toMatchSnapshot();
    });
    test(`Heading6 tag`, () => {
      const fragment = renderToFragmentWithTheme(TitleBar, {
        children: TITLE,
        headingComponent: Heading6,
      } as TitleBarProps);
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('should display correctly with border', () => {
    test.each(borderPositionKeys)('%s', borderPosition => {
      const fragment = renderToFragmentWithTheme(TitleBar, {
        children: TITLE,
        containerBorder: borderPosition,
      } as TitleBarProps);
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('should display correctly with padding', () => {
    test('right', () => {
      const fragment = renderToFragmentWithTheme(TitleBar, {
        children: TITLE,
        paddingRight: true,
      } as TitleBarProps);
      expect(fragment).toMatchSnapshot();
    });
    test('left', () => {
      const fragment = renderToFragmentWithTheme(TitleBar, {
        children: TITLE,
        paddingLeft: true,
      } as TitleBarProps);
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('should display correctly with align', () => {
    test('left', () => {
      const fragment = renderToFragmentWithTheme(TitleBar, {
        children: TITLE,
        titleAlignment: TitleAlignment.Left,
      } as TitleBarProps);
      expect(fragment).toMatchSnapshot();
    });
    test('center', () => {
      const fragment = renderToFragmentWithTheme(TitleBar, {
        children: TITLE,
        titleAlignment: TitleAlignment.Center,
      } as TitleBarProps);
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('Should display correctly with action item as:', () => {
    test('Button', () => {
      const button = () => <Button>Default button</Button>;
      const fragment = renderToFragmentWithTheme(TitleBar, {
        children: TITLE,
        actionItem: button,
      } as TitleBarProps);
      expect(fragment).toMatchSnapshot();
    });
    test('Link', () => {
      const link = () => <Link href="/">Link</Link>;
      const fragment = renderToFragmentWithTheme(TitleBar, {
        children: TITLE,
        actionItem: link,
      } as TitleBarProps);
      expect(fragment).toMatchSnapshot();
    });
  });
});
