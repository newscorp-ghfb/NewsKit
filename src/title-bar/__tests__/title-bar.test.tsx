import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {TitleBar, TitleBarProps} from '..';
import {Button} from '../../button';
import {Link} from '../../link';

describe('TitleBar', () => {
  const TITLE = 'Test title of title bar';
  test('should display correctly with default styles and given title', () => {
    const fragment = renderToFragmentWithTheme(TitleBar, {
      children: TITLE,
    } as TitleBarProps);
    expect(fragment).toMatchSnapshot();
  });

  test('should apply correctly the props and overrides', () => {
    const fragment = renderToFragmentWithTheme(TitleBar, {
      children: TITLE,
      overrides: {
        stylePreset: 'standfirst',
        spaceInset: 'spaceInsetSquish010',
        heading: {
          typographyPreset: {
            xs: 'editorialHeadline010',
            sm: 'editorialHeadline020',
            md: 'editorialHeadline030',
            lg: 'editorialHeadline040',
          },
          stylePreset: 'inkInverse',
        },
      },
    } as TitleBarProps);
    expect(fragment).toMatchSnapshot();
  });

  test('should apply correctly only stylePreset for the heading', () => {
    const fragment = renderToFragmentWithTheme(TitleBar, {
      children: TITLE,
      overrides: {
        heading: {
          stylePreset: 'inkInverse',
        },
      },
    } as TitleBarProps);
    expect(fragment).toMatchSnapshot();
  });

  test('should apply correctly only typographyPreset for the heading', () => {
    const fragment = renderToFragmentWithTheme(TitleBar, {
      children: TITLE,
      overrides: {
        heading: {
          typographyPreset: {
            xs: 'editorialHeadline010',
            sm: 'editorialHeadline020',
            md: 'editorialHeadline030',
            lg: 'editorialHeadline040',
          },
        },
      },
    } as TitleBarProps);
    expect(fragment).toMatchSnapshot();
  });

  describe('should display correctly as', () => {
    const headingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    test.each(headingLevels)('renders with %s size', currentSize => {
      const fragment = renderToFragmentWithTheme(TitleBar, {
        children: TITLE,
        headingAs: currentSize,
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
    test('Button hidden in lg', () => {
      const button = () => <Button>Default button</Button>;
      const fragment = renderToFragmentWithTheme(TitleBar, {
        children: TITLE,
        actionItem: button,
        hideActionItemOn: {lg: true},
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
