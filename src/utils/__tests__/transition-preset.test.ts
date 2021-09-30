import {compileTheme, createTheme} from '../../theme';
import {getTransitionPresetFromTheme} from '../style/transition-preset';

describe('getTransitionPresetFromTheme', () => {
  test('return base transition preset', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration020: '2000ms',
            motionLinear: 'linear',
          },
          transitionPresets: {
            colorTransitionCustom: {
              base: {
                transitionProperty: 'color',
                transitionDuration: '{{motions.motionDuration020}}',
                transitionTimingFunction: '{{motions.motionLinear}}',
              },
            },
          },
        },
      }),
    );

    const result = getTransitionPresetFromTheme('colorTransitionCustom')({
      theme,
    });
    expect(result).toEqual({
      transitionProperty: 'color',
      transitionDuration: '2000ms',
      transitionTimingFunction: 'linear',
    });
  });

  test('returns preset with class name provided', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration040: '4000ms',
            motionLinear: 'linear',
          },
          transitionPresets: {
            fadeCustom: {
              base: {
                opacity: '0.2',
              },
              appear: {
                opacity: '0.2',
              },
              appearActive: {
                opacity: '0.8',
                transitionProperty: 'opacity',
                transitionDuration: '{{motions.motionDuration040}}',
              },
              appearDone: {
                opacity: '0.2',
              },
              enter: {
                opacity: '0.2',
              },
              enterActive: {
                opacity: '0.8',
                transitionProperty: 'opacity',
                transitionDuration: '{{motions.motionDuration040}}',
              },
              enterDone: {
                opacity: '0.8',
              },
              exit: {
                opacity: '0.8',
              },
              exitActive: {
                opacity: '0.2',
                transitionProperty: 'opacity',
                transitionDuration: '{{motions.motionDuration040}}',
              },
              exitDone: {
                opacity: '0.2',
              },
            },
          },
        },
      }),
    );

    const result = getTransitionPresetFromTheme(
      'fadeCustom',
      'nk-test',
    )({
      theme,
    });
    expect(result).toEqual({
      opacity: '0.2',
      '&.nk-test-appear': {
        opacity: '0.2',
      },
      '&.nk-test-appear-active': {
        opacity: '0.8',
        transitionProperty: 'opacity',
        transitionDuration: '4000ms',
      },
      '&.nk-test-appear-done': {
        opacity: '0.2',
      },
      '&.nk-test-enter': {
        opacity: '0.2',
      },
      '&.nk-test-enter-active': {
        opacity: '0.8',
        transitionProperty: 'opacity',
        transitionDuration: '4000ms',
      },
      '&.nk-test-enter-done': {
        opacity: '0.8',
      },
      '&.nk-test-exit': {
        opacity: '0.8',
      },
      '&.nk-test-exit-active': {
        opacity: '0.2',
        transitionProperty: 'opacity',
        transitionDuration: '4000ms',
      },
      '&.nk-test-exit-done': {
        opacity: '0.2',
      },
    });
  });

  test('with invalid token returns empty string', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
      }),
    );

    const result = getTransitionPresetFromTheme('invalidToken')({
      theme,
    });

    expect(result).toEqual('');
  });

  test('combines presets base state only', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration020: '2000ms',
            motionDuration030: '3000ms',
            motionLinear: 'linear',
          },
          transitionPresets: {
            colorTransitionCustom: {
              base: {
                transitionProperty: 'color',
                transitionDuration: '{{motions.motionDuration020}}',
                transitionTimingFunction: '{{motions.motionLinear}}',
              },
            },
            backgroundTransitionCustom: {
              base: {
                transitionProperty: 'background-color',
                transitionDuration: '{{motions.motionDuration030}}',
                transitionTimingFunction: '{{motions.motionLinear}}',
              },
            },
          },
        },
      }),
    );

    const result = getTransitionPresetFromTheme([
      'colorTransitionCustom',
      'backgroundTransitionCustom',
    ])({
      theme,
    });
    expect(result).toEqual({
      transitionProperty: 'color, background-color',
      transitionDuration: '2000ms, 3000ms',
      transitionTimingFunction: 'linear, linear',
    });
  });

  test('combines presets with class name provided', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration020: '2000ms',
            motionDuration040: '4000ms',
            motionLinear: 'linear',
          },
          transitionPresets: {
            fadeCustom: {
              base: {
                opacity: '0.2',
              },
              enter: {
                opacity: '0.2',
              },
              enterActive: {
                opacity: '0.8',
                transitionProperty: 'opacity',
                transitionDuration: '{{motions.motionDuration040}}',
                transitionTimingFunction: '{{motions.motionLinear}}',
              },
              enterDone: {
                opacity: '0.8',
              },
              exit: {
                opacity: '0.8',
              },
              exitActive: {
                opacity: '0.2',
                transitionProperty: 'opacity',
                transitionDuration: '{{motions.motionDuration040}}',
                transitionTimingFunction: '{{motions.motionLinear}}',
              },
              exitDone: {
                opacity: '0.2',
              },
            },
            slideCustom: {
              base: {
                transform: 'translateY(100%)',
              },
              enter: {
                transform: 'translateY(100%)',
              },
              enterActive: {
                transform: 'translateY(0)',
                transitionProperty: 'transform',
                transitionDuration: '{{motions.motionDuration040}}',
                transitionTimingFunction: '{{motions.motionLinear}}',
              },
              enterDone: {
                transform: 'translateY(0)',
              },
              exit: {
                transform: 'translateY(0)',
              },
              exitActive: {
                transform: 'translateY(100%)',
                transitionProperty: 'transform',
                transitionDuration: '{{motions.motionDuration040}}',
                transitionTimingFunction: '{{motions.motionLinear}}',
              },
              exitDone: {
                transform: 'translateY(100%)',
              },
            },
            growCustom: {
              base: {
                transform: `scale(0.5)`,
              },
              enter: {
                transform: `scale(0.5)`,
              },
              enterActive: {
                transform: `scale(1)`,
                transitionProperty: 'transform',
                transitionDuration: '{{motions.motionDuration040}}',
              },
              enterDone: {
                transform: `scale(1)`,
              },
              exit: {
                transform: `scale(1)`,
              },
              exitActive: {
                transform: `scale(0.5)`,
                transitionProperty: 'transform',
                transitionDuration: '{{motions.motionDuration040}}',
              },
              exitDone: {
                transform: `scale(0.5)`,
              },
            },
          },
        },
      }),
    );

    const result = getTransitionPresetFromTheme(
      ['fadeCustom', 'slideCustom', 'growCustom'],
      'nk-test',
    )({
      theme,
    });
    expect(result).toEqual({
      opacity: '0.2',
      transform: 'translateY(100%) scale(0.5)',
      '&.nk-test-enter': {
        opacity: '0.2',
        transform: 'translateY(100%) scale(0.5)',
      },
      '&.nk-test-enter-active': {
        opacity: '0.8',
        transitionProperty: 'opacity, transform, transform',
        transitionDuration: '4000ms, 4000ms, 4000ms',
        transitionTimingFunction: 'linear, linear',
        transform: 'translateY(0) scale(1)',
      },
      '&.nk-test-enter-done': {
        opacity: '0.8',
        transform: 'translateY(0) scale(1)',
      },
      '&.nk-test-exit': {
        opacity: '0.8',
        transform: 'translateY(0) scale(1)',
      },
      '&.nk-test-exit-active': {
        opacity: '0.2',
        transitionProperty: 'opacity, transform, transform',
        transitionDuration: '4000ms, 4000ms, 4000ms',
        transitionTimingFunction: 'linear, linear',
        transform: 'translateY(100%) scale(0.5)',
      },
      '&.nk-test-exit-done': {
        opacity: '0.2',
        transform: 'translateY(100%) scale(0.5)',
      },
    });
  });

  test('handles invalid tokens when combining presets', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration020: '2000ms',
            motionDuration030: '3000ms',
            motionLinear: 'linear',
          },
          transitionPresets: {
            colorTransitionCustom: {
              base: {
                transitionProperty: 'color',
                transitionDuration: '{{motions.motionDuration020}}',
                transitionTimingFunction: '{{motions.motionLinear}}',
              },
            },
            backgroundTransitionCustom: {
              base: {
                transitionProperty: 'background-color',
                transitionDuration: '{{motions.motionDuration030}}',
                transitionTimingFunction: '{{motions.motionLinear}}',
              },
            },
          },
        },
      }),
    );

    const result = getTransitionPresetFromTheme([
      'invalidToken',
      'backgroundTransitionCustom',
    ])({
      theme,
    });
    expect(result).toEqual({
      transitionProperty: 'background-color',
      transitionDuration: '3000ms',
      transitionTimingFunction: 'linear',
    });
  });

  test('handles empty states in single presets', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          transitionPresets: {
            customTransitionPreset: {},
          },
        },
      }),
    );

    const result = getTransitionPresetFromTheme('colorTransitionCustom')({
      theme,
    });
    expect(result).toEqual('');
  });

  test('handles empty states in multiple presets', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          transitionPresets: {
            customTransitionPreset1: {
              base: {},
            },
            customTransitionPreset2: {
              base: {},
            },
          },
        },
      }),
    );

    const result = getTransitionPresetFromTheme([
      'colorTransitionCustom1',
      'colorTransitionCustom2',
    ])({
      theme,
    });
    expect(result).toEqual('');
  });
});
