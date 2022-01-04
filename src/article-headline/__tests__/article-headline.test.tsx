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
      kickerColor: 'interactive010Pressed',
    } as any) as any;

    expect(fragment).toMatchSnapshot();
  });
});
