import {CardOverridesProps} from '..';
import {getHorizontalRatio} from '../utils';

describe('getHorizontalRatio', () => {
  const mockTheme = {
    componentDefaults: {
      card: {
        horizontalRatio: '1:1',
      },
    },
  };

  test("returns ['3', '1'] if layout is horizontal", () => {
    const layout = 'horizontal';
    const overrides: CardOverridesProps = {
      horizontalRatio: '3:1',
    };
    const [mediaRatio, teaserRatio] = getHorizontalRatio(
      layout,
      mockTheme.componentDefaults.card,
      overrides,
    );
    expect([mediaRatio, teaserRatio]).toEqual(['3', '1']);
  });
  test("returns ['1', '3'] if layout is horizontal-reverse", () => {
    const layout = 'horizontal-reverse';
    const overrides: CardOverridesProps = {
      horizontalRatio: '3:1',
    };
    const [mediaRatio, teaserRatio] = getHorizontalRatio(
      layout,
      mockTheme.componentDefaults.card,
      overrides,
    );
    expect([mediaRatio, teaserRatio]).toEqual(['1', '3']);
  });
  test('returns array with empty strings if layout is not horizontal', () => {
    const layout = 'vertical';
    const overrides: CardOverridesProps = {
      horizontalRatio: '3:1',
    };
    const [mediaRatio, teaserRatio] = getHorizontalRatio(
      layout,
      mockTheme.componentDefaults.card,
      overrides,
    );
    expect([mediaRatio, teaserRatio]).toEqual(['', '']);
  });

  test('returns horizontalRatio from componentDefaults if a falsy is passed', () => {
    const layout = 'horizontal';
    const overrides: CardOverridesProps = {
      horizontalRatio: '',
    };
    const [mediaRatio, teaserRatio] = getHorizontalRatio(
      layout,
      mockTheme.componentDefaults.card,
      overrides,
    );
    expect([mediaRatio, teaserRatio]).toEqual(['1', '1']);
  });

  test('returns horizontalRatio from componentDefaults if an invalid value is passed - anything that is not integer:integer', () => {
    const layout = 'horizontal';
    const overrides: CardOverridesProps = {
      horizontalRatio: 'invalid:invalid',
    };
    const [mediaRatio, teaserRatio] = getHorizontalRatio(
      layout,
      mockTheme.componentDefaults.card,
      overrides,
    );
    expect([mediaRatio, teaserRatio]).toEqual(['1', '1']);
  });
  test('returns horizontalRatio from componentDefaults if horizontalRatio has not been overriden', () => {
    const layout = 'horizontal';
    const overrides: CardOverridesProps = {};
    const [mediaRatio, teaserRatio] = getHorizontalRatio(
      layout,
      mockTheme.componentDefaults.card,
      overrides,
    );
    expect([mediaRatio, teaserRatio]).toEqual(['1', '1']);
  });
  test('returns an array with empty strings if an none is passed in the componentDefaults', () => {
    const mockThemeWithInvalidHorizontalRatio = {
      componentDefaults: {
        card: {
          horizontalRatio: 'none',
        },
      },
    };
    const layout = 'horizontal';
    const overrides: CardOverridesProps = {};
    const [mediaRatio, teaserRatio] = getHorizontalRatio(
      layout,
      mockThemeWithInvalidHorizontalRatio.componentDefaults.card,
      overrides,
    );
    expect([mediaRatio, teaserRatio]).toEqual(['', '']);
  });

  test('returns an array with empty strings if horizontalRatio has not been defined in the componentDefaults', () => {
    const mockThemeWithInvalidHorizontalRatio: any = {
      componentDefaults: {
        card: {},
      },
    };
    const layout = 'horizontal';
    const overrides: CardOverridesProps = {};
    const [mediaRatio, teaserRatio] = getHorizontalRatio(
      layout,
      mockThemeWithInvalidHorizontalRatio.componentDefaults.card,
      overrides,
    );
    expect([mediaRatio, teaserRatio]).toEqual(['', '']);
  });
});
