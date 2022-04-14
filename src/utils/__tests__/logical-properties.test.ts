import {
  omitLogicalPropsFromOverrides,
  logicalProps,
  extractLogicalPropsFromOverrides,
  logicalPropsWithCSSProperty,
} from '../logical-properties';
import {compileTheme, newskitLightTheme} from '../../theme';

describe('logical properties', () => {
  it('should return a css Object when logical props at root level', () => {
    const props = {
      theme: compileTheme(newskitLightTheme),
      marginBlock: 'space020',
      paddingBlock: 'space020',
    };

    expect(logicalProps()(props as any)).toEqual({
      marginBlock: '8px',
      paddingBlock: '8px',
    });
  });

  it('should return a css Object when logical in overrides', () => {
    const props = {
      theme: compileTheme(newskitLightTheme),
      overrides: {
        marginBlock: 'space020',
        paddingBlock: 'space020',
      },
    };

    expect(logicalProps('', '')(props as any)).toEqual({
      marginBlock: '8px',
      paddingBlock: '8px',
    });
  });
  it('should return a css Object with nested overrides', () => {
    const props = {
      theme: compileTheme(newskitLightTheme),
      overrides: {
        content: {
          title: {
            marginBlock: 'space020',
            paddingBlock: 'space020',
          },
        },
      },
    };

    expect(logicalProps('', 'content.title')(props as any)).toEqual({
      marginBlock: '8px',
      paddingBlock: '8px',
    });
  });

  it('should return a css Object with media queries', () => {
    const props = {
      theme: compileTheme(newskitLightTheme),
      overrides: {
        marginBlock: {
          xs: 'space020',
          md: 'space040',
          lg: 'space060',
        },
        paddingBlock: {
          xs: 'space020',
          md: 'space040',
          lg: 'space060',
        },
      },
    };

    expect(logicalProps()(props as any)).toEqual({
      '@media screen and (max-width: 767px)': {
        marginBlock: '8px',
        paddingBlock: '8px',
      },
      '@media screen and (min-width: 1024px)': {
        marginBlock: '32px',
        paddingBlock: '32px',
      },
      '@media screen and (min-width: 768px) and (max-width: 1023px)': {
        marginBlock: '16px',
        paddingBlock: '16px',
      },
    });
  });

  it('should return a css Object with nested overrides and media queries', () => {
    const props = {
      theme: compileTheme(newskitLightTheme),
      overrides: {
        content: {
          title: {
            marginBlock: {
              xs: 'space020',
              md: 'space040',
              lg: 'space060',
            },
            paddingBlock: {
              xs: 'space020',
              md: 'space040',
              lg: 'space060',
            },
          },
        },
      },
    };

    expect(logicalProps('', 'content.title')(props as any)).toEqual({
      '@media screen and (max-width: 767px)': {
        marginBlock: '8px',
        paddingBlock: '8px',
      },
      '@media screen and (min-width: 1024px)': {
        marginBlock: '32px',
        paddingBlock: '32px',
      },
      '@media screen and (min-width: 768px) and (max-width: 1023px)': {
        marginBlock: '16px',
        paddingBlock: '16px',
      },
    });
  });

  it('should remove logical properties from the root level of an object', () => {
    const props = {
      theme: compileTheme(newskitLightTheme),
      overrides: {
        marginBlock: 'space020',
        paddingBlock: 'space020',
        title: {
          paddingBlock: 'space020',
          paddingInline: 'space030',
          stylePreset: 'inkContrast',
        },
      },
    };

    const dummyProps = {someOtherProps: true, ...logicalProps()(props as any)};
    expect(omitLogicalPropsFromOverrides(dummyProps)).toEqual({
      someOtherProps: true,
    });
  });
  it('should filter out logical properties from the root level of an object', () => {
    const props = {
      theme: compileTheme(newskitLightTheme),
      overrides: {
        marginBlock: 'space020',
        paddingBlock: 'space020',
        stylePreset: 'inkContrast',
        typographyPreset: 'utilityBody020',
        title: {
          paddingBlockStart: 'space020',
          paddingInlineEnd: 'space030',
        },
      },
    };

    const dummyProps = {someOtherProps: true, ...logicalProps()(props as any)};

    expect(extractLogicalPropsFromOverrides(dummyProps)).toEqual({
      marginBlock: '8px',
      paddingBlock: '8px',
    });
  });

  describe('logicalPropsWithCSSProperty', () => {
    it('should only return the CSS object contains the cssProperty passed', () => {
      const props = {
        theme: compileTheme(newskitLightTheme),
        marginBlockEnd: 'space020',
        marginInlineEnd: 'space020',
        paddingInline: 'space030',
      };

      expect(
        logicalPropsWithCSSProperty('marginBlockEnd')(props as any),
      ).toEqual({
        marginBlockEnd: '8px',
      });
    });
    it('should return an empty string when no CSSProperty is passed', () => {
      const props = {
        theme: compileTheme(newskitLightTheme),
        content: {
          title: {
            marginBlockEnd: 'space020',
            marginInlineEnd: 'space020',
          },
        },
      };
      expect(
        logicalPropsWithCSSProperty('content.title', 'title')(props as any),
      ).toEqual('');
    });

    it('should return the CSS object contains the CSS property in overrides', () => {
      const props = {
        theme: compileTheme(newskitLightTheme),
        overrides: {
          marginBlockEnd: 'space020',
          marginInlineEnd: 'space020',
        },
      };
      expect(
        logicalPropsWithCSSProperty('marginBlockEnd')(props as any),
      ).toEqual({
        marginBlockEnd: '8px',
      });
    });
  });
});
