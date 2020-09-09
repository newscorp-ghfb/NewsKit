import {Byline} from '../byline';
import {BylineProps} from '../types';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {createTheme, compileTheme} from '../../theme';

describe('Byline', () => {
  test('renders correctly with one author', () => {
    const props: BylineProps = {
      bylineData: [
        {
          author: 'Jane Smith',
        },
      ],
    };
    const fragment = renderToFragmentWithTheme(Byline, props) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with multiple authors', () => {
    const props: BylineProps = {
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
    const fragment = renderToFragmentWithTheme(Byline, props) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with authors and links', () => {
    const props: BylineProps = {
      bylineData: [
        {
          author: 'Jane Smith',
          href: 'www.example.com',
          location: 'London',
        },
        {
          author: 'John Smith',
          href: 'www.example.com',
        },
        {
          author: 'John Smith',
          href: 'www.example.com',
          title: 'Developer manager',
        },
      ],
    };
    const fragment = renderToFragmentWithTheme(Byline, props) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly multiple authors with link only', () => {
    const props: BylineProps = {
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
    const fragment = renderToFragmentWithTheme(Byline, props) as any;

    expect(fragment).toMatchSnapshot();
  });

  test("renders correctly with author's name, author's information and no href provided", () => {
    const props: BylineProps = {
      bylineData: [
        {
          author: 'Jane Smith',
          title: 'Author',
        },
        {
          author: 'John Smith',
          location: 'Milan',
        },
      ],
    };
    const fragment = renderToFragmentWithTheme(Byline, props) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with authors, location, titles and links', () => {
    const props: BylineProps = {
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
    const fragment = renderToFragmentWithTheme(Byline, props) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with overrides', () => {
    const myCustomTheme = createTheme({
      name: 'my-custom-byline-theme',
      overrides: {
        stylePresets: {
          bylineCustom: {
            base: {
              color: '#f000dc',
            },
          },
          bylineLinkCustom: {
            base: {
              color: '#d82059',
            },
          },
          bylineDividerCustom: {
            base: {
              color: '#27a727',
            },
          },
        },
      },
    });

    const props: BylineProps = {
      overrides: {
        stylePreset: 'bylineCustom',
        typographyPreset: 'label040',
        space: 'sizing030',
        link: {
          stylePreset: 'bylineLinkCustom',
          typographyPreset: 'label040',
        },
        divider: {
          stylePreset: 'bylineDividerCustom',
          spaceInline: 'space030',
        },
      },
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
    const fragment = renderToFragmentWithTheme(
      Byline,
      props,
      compileTheme(myCustomTheme),
    ) as any;

    expect(fragment).toMatchSnapshot();
  });
});
