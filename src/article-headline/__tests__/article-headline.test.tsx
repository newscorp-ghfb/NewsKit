import {ArticleHeadline} from '../article-headline';
import {renderToFragmentWithTheme} from '../../test/test-utils';

describe('ArticleHeadline', () => {
  test('renders correctly with default props', () => {
    const fragment = renderToFragmentWithTheme(ArticleHeadline, {
      children: 'test',
    } as any) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with default props', () => {
    const fragment = renderToFragmentWithTheme(ArticleHeadline, {
      children: 'test',
      kickerText: 'this is kicker',
      headingAs: 'h4',
      kickerAs: 'h5',
    } as any) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with overriden props', () => {
    const fragment = renderToFragmentWithTheme(ArticleHeadline, {
      children: 'test',
      kickerText: 'this is kicker',
      headingAs: 'h4',
      kickerAs: 'h5',
      overrides: {
        kicker: {
          typePreset: 'headline200',
        },
        heading: {
          stylePreset: 'linkPrimary',
        },
      },
    } as any) as any;

    expect(fragment).toMatchSnapshot();
  });
});
