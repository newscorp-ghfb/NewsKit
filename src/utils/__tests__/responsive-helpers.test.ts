import {
  getMediaQueries,
  getMediaQuery,
  getMediaQueryFromTheme,
} from '../responsive-helpers';
import {Theme} from '../../theme';

describe('Helpers - ResponsiveHelpers', () => {
  test('getMediaQuery', () => {
    expect(getMediaQuery({'max-width': '1280px'})).toEqual(
      '@media screen and (max-width: 1280px)',
    );
    expect(
      getMediaQuery(
        {
          'max-width': '1280px',
          'min-height': '720px',
        },
        'AND',
      ),
    ).toEqual('@media screen and (max-width: 1280px) and (min-height: 720px)');
  });

  test('getMediaQueries', () => {
    expect(
      getMediaQueries({
        xs: 320,
        sm: 480,
        md: 960,
        lg: 1220,
        xl: 1440,
      }),
    ).toMatchInlineSnapshot(`
      Array [
        "@media screen and (min-width: 320px)",
        "@media screen and (min-width: 480px)",
        "@media screen and (min-width: 960px)",
        "@media screen and (min-width: 1220px)",
        "@media screen and (min-width: 1440px)",
      ]
    `);
  });

  test('getMediaQueries stable breakpoint order', () => {
    expect(
      getMediaQueries({
        sm: 480,
        lg: 1220,
        xs: 320,
        md: 960,
        xl: 1440,
      }),
    ).toMatchInlineSnapshot(`
      Array [
        "@media screen and (min-width: 320px)",
        "@media screen and (min-width: 480px)",
        "@media screen and (min-width: 960px)",
        "@media screen and (min-width: 1220px)",
        "@media screen and (min-width: 1440px)",
      ]
    `);
  });

  describe('getMediaQueryFromTheme', () => {
    const theme = ({
      breakpoints: {xs: 320, sm: 480, md: 960, lg: 1440},
    } as unknown) as Theme;

    test('for a minimum breakpoint', () => {
      expect(getMediaQueryFromTheme('sm')({theme})).toMatchInlineSnapshot(
        `"@media screen and (min-width: 480px)"`,
      );
    });

    test('for a maximum breakpoint', () => {
      expect(
        getMediaQueryFromTheme(undefined, 'md')({theme}),
      ).toMatchInlineSnapshot(`"@media screen and (max-width: 959px)"`);
    });

    test('for a minimum and maximum breakpoint 1', () => {
      expect(getMediaQueryFromTheme('xs', 'sm')({theme})).toMatchInlineSnapshot(
        `"@media screen and (min-width: 320px) and (max-width: 479px)"`,
      );
    });

    test('for a minimum and maximum breakpoint 2', () => {
      expect(getMediaQueryFromTheme('sm', 'md')({theme})).toMatchInlineSnapshot(
        `"@media screen and (min-width: 480px) and (max-width: 959px)"`,
      );
    });

    test('for a minimum and maximum breakpoint 3', () => {
      expect(getMediaQueryFromTheme('md', 'lg')({theme})).toMatchInlineSnapshot(
        `"@media screen and (min-width: 960px) and (max-width: 1439px)"`,
      );
    });
  });
});
