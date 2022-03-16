import {
  omitLogicalPropsFromOverrides,
  logicalProps,
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

    expect(logicalProps()(props as any)).toEqual({
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

  it('should remove logical properties from an object', () => {
    const props = {
      theme: compileTheme(newskitLightTheme),
      overrides: {
        marginBlock: 'space020',
        paddingBlock: 'space020',
      },
    };

    const dummyProps = {someOtherProps: true, ...logicalProps()(props as any)};

    expect(omitLogicalPropsFromOverrides(dummyProps)).toEqual({
      someOtherProps: true,
    });
  });
});
