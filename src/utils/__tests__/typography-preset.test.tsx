import {renderToFragmentWithTheme} from '../../test/test-utils';
import {createTheme, Theme} from '../../theme';
import {getTypographyPresetFromTheme, styled, MQ} from '../style';

interface TestTextProp {
  typographyPreset: MQ<string>;
  options?: {
    withCrop: boolean;
  };
}

const myCustomTheme = createTheme({
  name: 'my-custom-typography',
  overrides: {
    fonts: {
      fontFamily100: {
        fontFamily: '"Custom-FontName", sans-serif',
        fontMetrics: {
          fontWeight010: {
            capHeight: 697,
            ascent: 1050,
            descent: -350,
            lineGap: 100,
            unitsPerEm: 1000,
          },
        },
      },
    },
    typographyPresets: {
      editorialParagraph030: {
        fontSmooth: 'always',
        fontStretch: 'condensed',
      },
      editorialParagraph100: {
        fontFamily: 'Non-existent-font-family, serif',
        fontSize: '{{fonts.fontSize040}}',
        lineHeight: '{{fonts.fontLineHeight040}}',
        fontWeight: '{{fonts.fontWeight010}}',
        letterSpacing: '{{fonts.fontLetterSpacing010}}',
      },
      editorialParagraph300: {
        fontFamily: '{{fonts.fontFamily100.fontFamily}}',
        fontSize: '{{fonts.fontSize040}}',
        lineHeight: '{{fonts.fontLineHeight040}}',
        fontWeight: '{{fonts.fontWeight010}}',
        letterSpacing: '{{fonts.fontLetterSpacing010}}',
      },
    },
  },
});

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

  test('renders responsive override editorialParagraph010 for xs, editorialParagraph020 for sm, editorialParagraph030 for md, editorialHeading010 for lg and xl breakpoints and ignore wrong prop', () => {
    const fragment = renderToFragmentWithTheme(TestText, {
      typographyPreset: {
        xs: 'editorialParagraph010',
        sm: 'editorialParagraph020',
        md: 'editorialParagraph030',
        lg: 'editorialHeading010',
        xl: 'editorialHeading030',
        wrong: 'editorialHeading020',
      } as any,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with fontSmooth and fontStretch', () => {
    const fragment = renderToFragmentWithTheme(
      TestText,
      undefined,
      myCustomTheme,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('when withCrop is true renders cropped text', () => {
    const TestText1 = styled.p<TestTextProp>`
      ${getTypographyPresetFromTheme(
        'editorialParagraph030',
        'typographyPreset',
        {withCrop: true},
      )}
    `;

    const fragment = renderToFragmentWithTheme(TestText1);
    expect(fragment).toMatchSnapshot();
  });

  test('when withCrop is true but such font does not exist renders standard text', () => {
    const TestText1 = styled.p<TestTextProp>`
      ${getTypographyPresetFromTheme(
        'editorialParagraph100',
        'typographyPreset',
        {withCrop: true},
      )}
    `;

    const fragment = renderToFragmentWithTheme(
      TestText1,
      undefined,
      myCustomTheme,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('when withCrop is true & cropping functions work with fontMetrics', () => {
    const TestText1 = styled.p<TestTextProp>`
      ${getTypographyPresetFromTheme(
        'editorialParagraph300',
        'typographyPreset',
        {withCrop: true},
      )}
    `;

    const fragment = renderToFragmentWithTheme(
      TestText1,
      undefined,
      myCustomTheme,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('returns typographyPreset with text crop CSS when fontMetrics exist for fontFamily/fontWeight', () => {
    const typographyPreset = getTypographyPresetFromTheme(
      'editorialParagraph030',
      undefined,
      {withCrop: true},
    )({
      theme: ({
        fonts: {
          fontWeight020: 500,
          fontFamily010: {
            fontFamily: 'Font Family Name',
            fontMetrics: {
              fontWeight020: {
                capHeight: 697,
                ascent: 1050,
                descent: -350,
                lineGap: 100,
                unitsPerEm: 1000,
              },
            },
          },
        },
        typographyPresets: {
          editorialParagraph030: {
            fontFamily: 'Font Family Name',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: 1,
          },
        },
      } as unknown) as Theme,
    });
    expect(typographyPreset).toEqual({
      fontFamily: 'Font Family Name',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '12px',
      '::before': {
        content: "''",
        marginBottom: '-0.153em',
        display: 'block',
      },
      '::after': {
        content: "''",
        marginTop: '-0.15em',
        display: 'block',
      },
      padding: '0.5px 0px',
    });
  });

  test('returns typographyPreset with default text crop CSS when fontMetrics do not exist for fontFamily/fontWeight', () => {
    const typographyPreset = getTypographyPresetFromTheme(
      'editorialParagraph030',
      undefined,
      {withCrop: true},
    )({
      theme: ({
        fonts: {
          fontWeight020: 500,
          fontFamily010: {
            fontFamily: 'Font Family Name',
            fontMetrics: {
              // not defined for fontWeight020
              fontWeight010: {
                capHeight: 692,
                ascent: 935,
                descent: -265,
                lineGap: 0,
                unitsPerEm: 1000,
              },
            },
          },
        },
        typographyPresets: {
          editorialParagraph030: {
            fontFamily: 'Font Family Name',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: 1,
          },
        },
      } as unknown) as Theme,
    });
    expect(typographyPreset).toEqual({
      fontFamily: 'Font Family Name',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '12px',
      '::before': {
        content: "''",
        marginBottom: '-0.143em',
        display: 'block',
      },
      '::after': {
        content: "''",
        marginTop: '-0.165em',
        display: 'block',
      },
      padding: '0.5px 0px',
    });
  });

  test('returns typographyPreset without text crop CSS when fontMetrics do not exist for fontFamily/fontWeight or for default fontWeight', () => {
    jest.spyOn(console, 'warn').mockImplementation();
    const typographyPreset = getTypographyPresetFromTheme(
      'editorialParagraph030',
      undefined,
      {withCrop: true},
    )({
      theme: ({
        fonts: {
          fontWeight020: 500,
          fontFamily010: {
            fontFamily: 'Font Family Name',
            fontMetrics: {
              // default fontWeight010 not defined
            },
          },
        },
        typographyPresets: {
          editorialParagraph030: {
            fontFamily: 'Font Family Name',
            fontWeight: 500,
            fontSize: 12,
          },
        },
      } as unknown) as Theme,
    });
    expect(typographyPreset).toEqual({
      fontFamily: 'Font Family Name',
      fontWeight: 500,
      fontSize: 12,
    });
    // eslint-disable-next-line no-console
    expect(console.warn).toHaveBeenCalledWith(
      "No default fontMetrics found for 'Font Family Name'.",
    );
  });
});
