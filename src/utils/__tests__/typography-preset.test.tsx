import {renderToFragmentWithTheme} from '../../test/test-utils';
import {getTypographyPresetFromTheme, styled, MQ} from '../style';

interface TestTextProp {
  typographyPreset: MQ<string>;
}

const TestText = styled.p<TestTextProp>`
  ${getTypographyPresetFromTheme('editorialParagraph030', 'typographyPreset')}
`;

describe('TypographyPreset', () => {
  test('renders default', () => {
    const fragment = renderToFragmentWithTheme(TestText);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with override editorialParagraph010', () => {
    const fragment = renderToFragmentWithTheme(TestText, {
      typographyPreset: 'editorialParagraph010',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override editorialParagraph010 for xs, editorialParagraph020 for sm, and editorialParagraph030 for md breakpoints', () => {
    const fragment = renderToFragmentWithTheme(TestText, {
      typographyPreset: {
        xs: 'editorialParagraph010',
        sm: 'editorialParagraph020',
        md: 'editorialParagraph030',
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override editorialParagraph010 for xs, editorialParagraph020 for sm, and wrong for md breakpoints', () => {
    const fragment = renderToFragmentWithTheme(TestText, {
      typographyPreset: {
        xs: 'editorialParagraph010',
        sm: 'editorialParagraph020',
        md: 'wrong',
      } as any,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override editorialParagraph010 for xs and editorialParagraph030 for md breakpoints', () => {
    const fragment = renderToFragmentWithTheme(TestText, {
      typographyPreset: {
        xs: 'editorialParagraph010',
        md: 'editorialParagraph030',
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override editorialParagraph010 for xs, editorialParagraph020 for sm, editorialParagraph030 for md, editorialHeading010 for lg breakpoints and ignore wrong prop', () => {
    const fragment = renderToFragmentWithTheme(TestText, {
      typographyPreset: {
        xs: 'editorialParagraph010',
        sm: 'editorialParagraph020',
        md: 'editorialParagraph030',
        lg: 'editorialHeading010',
        wrong: 'editorialHeading020',
      } as any,
    });
    expect(fragment).toMatchSnapshot();
  });
});
