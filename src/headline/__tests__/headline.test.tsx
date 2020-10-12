import {Headline} from '../headline';
import {renderToFragmentWithTheme} from '../../test/test-utils';

describe('headline', () => {
  test('renders correctly with default props', () => {
    const fragment = renderToFragmentWithTheme(Headline, {
      children: 'test',
    } as any) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with default props', () => {
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
      children: 'test',
      kickerText: 'this is kicker',
      headingAs: 'h4',
      kickerAs: 'h5',
      overrides: {
        kicker: {
          typographyPreset: 'editorialHeading050',
        },
        heading: {
          stylePreset: 'linkInline',
        },
      },
    } as any) as any;

    expect(fragment).toMatchSnapshot();
  });
});
