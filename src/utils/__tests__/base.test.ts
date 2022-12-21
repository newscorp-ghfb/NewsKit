import {createTheme, compileTheme} from '../../theme';
import {getSizingCssFromTheme} from '../style/getters';
import {getXFromTheme} from '../style/base';
import {
  getResponsiveSize,
  getResponsiveSpace,
  getResponsiveMotion,
  getResponsiveBorder,
} from '../style/get-defaults';

describe('getXFromTheme', () => {
  const theme: any = compileTheme(
    createTheme({
      name: 'test-theme',
      overrides: {
        componentDefaults: {
          tabs: {
            sizing: {xs: 'sizing010', sm: 'sizing020', md: 'sizing030'},
            width: '100%',
            size: 'sizing010',
            space: 'space010 space010 space010 space010',
            space1: 'space010',
            space2: 'calc(100% - 10px)',
            space3: {
              xs: 'space010',
              sm: 'space020 space020 space020 space020',
              md: 'space030 space030 space030 space030',
            },
            space4: {
              xs: '4px 4px 4px 4px',
              sm: '8px',
              md: '12px 12px 12px 12px',
            },
            motionDuration: 'motionDuration030',
            weight: 'borderWidth020',
            space5: 'auto',
          },
        },
      },
    }),
  );

  test('getXFromTheme with non MQ value', () => {
    const result = getXFromTheme('sizing')('width', 'sizing050')({theme});
    expect(result).toEqual({width: 'var(--sizing050)'});
  });
  test('getXFromTheme with MQ value', () => {
    const result = getXFromTheme('sizing')('width', {
      xs: 'sizing010',
      sm: 'sizing020',
      md: 'sizing030',
    })({theme});
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {width: 'var(--sizing010)'},
      '@media screen and (min-width: 480px) and (max-width: 767px)': {
        width: 'var(--sizing020)',
      },
      '@media screen and (min-width: 768px)': {width: 'var(--sizing030)'},
    });
  });

  test('getXFromTheme with non MQ and callback', () => {
    const cb = (value: string) => ({padding: `${value} 0`, width: value});
    const result = getXFromTheme('sizing')(cb, 'sizing050')({theme});
    expect(result).toEqual({
      width: 'var(--sizing050)',
      padding: 'var(--sizing050) 0',
    });
  });
  test('getXFromTheme with MQ and callback', () => {
    const cb = (value: string) => ({padding: `${value} 0`, width: value});
    const mq = {
      xs: 'sizing010',
      sm: 'sizing020',
      md: 'sizing030',
    };
    const result = getXFromTheme('sizing')(cb, mq)({theme});
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {
        width: 'var(--sizing010)',
        padding: 'var(--sizing010) 0',
      },
      '@media screen and (min-width: 480px) and (max-width: 767px)': {
        width: 'var(--sizing020)',
        padding: 'var(--sizing020) 0',
      },
      '@media screen and (min-width: 768px)': {
        width: 'var(--sizing030)',
        padding: 'var(--sizing030) 0',
      },
    });
  });
  test('getXFromTheme with no value and callback', () => {
    const result = getXFromTheme('sizing')('width', '')({theme});
    expect(result).toEqual('');
  });

  test('getSizingCssFromTheme non MQ', () => {
    const result = getSizingCssFromTheme(
      'width',
      'sizing050',
    )({
      theme,
    });
    expect(result).toEqual({width: 'var(--sizing050)'});
  });

  test('getSizingCssFromTheme with MQ', () => {
    const result = getSizingCssFromTheme('width', {
      xs: 'sizing010',
      sm: 'sizing020',
      md: 'sizing030',
    })({
      theme,
    });
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {width: 'var(--sizing010)'},
      '@media screen and (min-width: 480px) and (max-width: 767px)': {
        width: 'var(--sizing020)',
      },
      '@media screen and (min-width: 768px)': {width: 'var(--sizing030)'},
    });
  });
  test('getSizingCssFromTheme non MQ and callback', () => {
    const cb = (value: string) => ({width: value});
    const result = getSizingCssFromTheme(
      cb,
      'sizing050',
    )({
      theme,
    });
    expect(result).toEqual({width: 'var(--sizing050)'});
  });

  test('getSizingCssFromTheme with MQ and callback', () => {
    const cb = (value: string) => ({width: value});
    const result = getSizingCssFromTheme(cb, {
      xs: 'sizing010',
      sm: 'sizing020',
      md: 'sizing030',
    })({
      theme,
    });
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {width: 'var(--sizing010)'},
      '@media screen and (min-width: 480px) and (max-width: 767px)': {
        width: 'var(--sizing020)',
      },
      '@media screen and (min-width: 768px)': {width: 'var(--sizing030)'},
    });
  });

  test('getResponsiveSize non MQ with Plain css value', () => {
    const result = getResponsiveSize(
      'minWidth',
      'tabs',
      '',
      'width',
    )({
      theme,
    });
    expect(result).toEqual({minWidth: '100%'});
  });

  test('getResponsiveSize non MQ with Token value', () => {
    const result = getResponsiveSize(
      'minWidth',
      'tabs',
      '',
      'size',
    )({
      theme,
    });
    expect(result).toEqual({minWidth: 'var(--sizing010)'});
  });

  test('getResponsiveSize non MQ with token value and callback', () => {
    const cb = (value: string) => ({minWidth: value});
    const result = getResponsiveSize(
      cb,
      'tabs',
      '',
      'size',
    )({
      theme,
    });
    expect(result).toEqual({minWidth: 'var(--sizing010)'});
  });

  test('getResponsiveSize with MQ', () => {
    const result = getResponsiveSize(
      'minWidth',
      'tabs',
      '',
      'sizing',
    )({
      theme,
    });
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {
        minWidth: 'var(--sizing010)',
      },
      '@media screen and (min-width: 480px) and (max-width: 767px)': {
        minWidth: 'var(--sizing020)',
      },
      '@media screen and (min-width: 768px)': {
        minWidth: 'var(--sizing030)',
      },
    });
  });

  test('getResponsiveSize with MQ and callback', () => {
    const cb = (value: string) => ({minWidth: value});
    const result = getResponsiveSize(
      cb,
      'tabs',
      '',
      'sizing',
    )({
      theme,
    });
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {
        minWidth: 'var(--sizing010)',
      },
      '@media screen and (min-width: 480px) and (max-width: 767px)': {
        minWidth: 'var(--sizing020)',
      },
      '@media screen and (min-width: 768px)': {
        minWidth: 'var(--sizing030)',
      },
    });
  });
  test('getResponsiveSize with MQ for spacePresets with token', () => {
    const result = getResponsiveSpace(
      'padding',
      'tabs',
      '',
      'space3',
    )({
      theme,
    });
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {
        padding: 'var(--space010)',
      },
      '@media screen and (min-width: 480px) and (max-width: 767px)': {
        padding:
          'var(--space020) var(--space020) var(--space020) var(--space020)',
      },
      '@media screen and (min-width: 768px)': {
        padding:
          'var(--space030) var(--space030) var(--space030) var(--space030)',
      },
    });
  });
  test('getResponsiveSize with MQ for spacePresets with css value', () => {
    const result = getResponsiveSpace(
      'padding',
      'tabs',
      '',
      'space4',
    )({
      theme,
    });
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {
        padding: '4px 4px 4px 4px',
      },
      '@media screen and (min-width: 480px) and (max-width: 767px)': {
        padding: '8px',
      },
      '@media screen and (min-width: 768px)': {
        padding: '12px 12px 12px 12px',
      },
    });
  });
  test('getResponsiveSpace with four space tokens', () => {
    const result = getResponsiveSpace(
      'padding',
      'tabs',
      '',
      'space',
    )({
      theme,
    });
    expect(result).toEqual({
      padding:
        'var(--space010) var(--space010) var(--space010) var(--space010)',
    });
  });
  test('getResponsiveSpace with single space tokens', () => {
    const result = getResponsiveSpace(
      'padding',
      'tabs',
      '',
      'space1',
    )({
      theme,
    });
    expect(result).toEqual({padding: 'var(--space010)'});
  });
  test('getResponsiveSpace with calc as token', () => {
    const result = getResponsiveSpace(
      'padding',
      'tabs',
      '',
      'space2',
    )({
      theme,
    });
    expect(result).toEqual({padding: 'calc(100% - 10px)'});
  });
  test('getResponsiveSpace', () => {
    const result = getResponsiveSpace(
      'minWidth',
      'tabs',
      '',
      'space1',
    )({
      theme,
    });
    expect(result).toEqual({minWidth: 'var(--space010)'});
  });

  test('getResponsiveBorder', () => {
    const result = getResponsiveBorder(
      'border',
      'tabs',
      '',
      'weight',
    )({
      theme,
    });
    expect(result).toEqual({border: 'var(--borderWidth020)'});
  });

  test('getResponsiveMotion', () => {
    const result = getResponsiveMotion(
      'transitionTime',
      'tabs',
      '',
      'motionDuration',
    )({
      theme,
    });
    expect(result).toEqual({transitionTime: 'var(--motionDuration030)'});
  });

  test('getResponsiveSpace with auto values', () => {
    const result = getResponsiveSpace(
      'padding',
      'tabs',
      '',
      'space5',
    )({
      theme,
    });
    expect(result).toEqual({padding: 'auto'});
  });
});
