import {Headline} from '../headline';
import {renderToFragmentWithTheme} from '../../test/test-utils';

describe('headline', () => {
  test('renders correctly with default props, just heading', () => {
    const fragment = renderToFragmentWithTheme(Headline, {
      children: 'test',
    } as any) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders with additional HTML attributes', () => {
    const fragment = renderToFragmentWithTheme(Headline, {
      children: 'test',
      id: 'headline-id',
    });

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with default props, with heading and kicker', () => {
    const fragment = renderToFragmentWithTheme(Headline, {
      kickerText: 'this is kicker',
    } as any) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with custom props', () => {
    const fragment = renderToFragmentWithTheme(Headline, {
      children: 'test',
      kickerText: 'this is kicker',
      headingAs: 'h4',
      kickerAs: 'h5',
    } as any) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with overriden props', () => {
    const fragment = renderToFragmentWithTheme(Headline, {
      overrides: {
        typographyPreset: 'editorialHeadline050',
        heading: {
          stylePreset: 'inkInverse',
        },
        kicker: {
          stylePreset: 'inkInverse',
        },
      },
    } as any) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with logical prop padding overrides and crop padding is not applied', () => {
    const fragment = renderToFragmentWithTheme(Headline, {
      overrides: {
        paddingInline: '30px',
      },
    } as any) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with logical prop margin overrides and crop padding is applied', () => {
    const fragment = renderToFragmentWithTheme(Headline, {
      overrides: {
        marginInline: '30px',
      },
    } as any) as any;

    expect(fragment).toMatchSnapshot();
  });
});
