import {ArticleByline, ArticleBylineProps} from '../article-byline';
import {renderToFragmentWithTheme} from '../../test/test-utils';

describe('ArticleHeadline', () => {
  test('renders correctly with one authors', () => {
    const props: ArticleBylineProps = {
      bylineData: [
        {
          author: 'Jane Smith',
        },
      ],
    };
    const fragment = renderToFragmentWithTheme(ArticleByline, props) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with multiple authors', () => {
    const props: ArticleBylineProps = {
      bylineData: [
        {
          author: 'Jane Smith',
        },
        {
          author: 'John Smith',
        },
        {
          author: 'Sam Smith',
        },
      ],
    };
    const fragment = renderToFragmentWithTheme(ArticleByline, props) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with authors and links', () => {
    const props: ArticleBylineProps = {
      bylineData: [
        {
          author: 'Jane Smith',
          href: 'www.example.com',
        },
        {
          author: 'John Smith',
          href: 'www.example.com',
        },
      ],
    };
    const fragment = renderToFragmentWithTheme(ArticleByline, props) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with authors and titles', () => {
    const props: ArticleBylineProps = {
      bylineData: [
        {
          author: 'Jane Smith',
          title: 'Author',
        },
        {
          author: 'John Smith',
          title: 'Other Author',
        },
      ],
    };
    const fragment = renderToFragmentWithTheme(ArticleByline, props) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with authors, location, titles and links', () => {
    const props: ArticleBylineProps = {
      bylineData: [
        {
          author: 'Jane Smith',
          title: 'Author',
          location: 'London',
          href: 'www.example.com',
        },
        {
          author: 'John Smith',
          title: 'Other Author',
          location: 'London',
          href: 'www.example.com',
        },
      ],
    };
    const fragment = renderToFragmentWithTheme(ArticleByline, props) as any;

    expect(fragment).toMatchSnapshot();
  });
});
