import {compileTheme, createTheme} from '../../theme';
import {getTransitionPresetFromTheme} from '../style/transition-preset';

describe('getTransitionPresetFromTheme', () => {
  test('return base transition preset', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-transition-preset',
        overrides: {
          motions: {
            motionDuration020: '2000ms',
            motionTimingLinear: 'linear',
          },
          transitionPresets: {
            colorTransitionCustom: {
              base: {
                transitionProperty: 'color',
                transitionDuration: '{{motions.motionDuration020}}',
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
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
        name: 'test-transition-preset',
        overrides: {
          motions: {
            motionDuration040: '4000ms',
            motionTimingLinear: 'linear',
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
        name: 'test-transition-preset',
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
        name: 'test-transition-preset',
        overrides: {
          motions: {
            motionDuration020: '2000ms',
            motionDuration030: '3000ms',
            motionTimingLinear: 'linear',
          },
          transitionPresets: {
            colorTransitionCustom: {
              base: {
                transitionProperty: 'color',
                transitionDuration: '{{motions.motionDuration020}}',
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
              },
            },
            backgroundTransitionCustom: {
              base: {
                transitionProperty: 'background-color',
                transitionDuration: '{{motions.motionDuration030}}',
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
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
        name: 'test-transition-preset',
        overrides: {
          motions: {
            motionDuration020: '2000ms',
            motionDuration040: '4000ms',
            motionTimingLinear: 'linear',
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
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
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
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
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
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
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
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
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
        name: 'test-transition-preset',
        overrides: {
          motions: {
            motionDuration020: '2000ms',
            motionDuration030: '3000ms',
            motionTimingLinear: 'linear',
          },
          transitionPresets: {
            colorTransitionCustom: {
              base: {
                transitionProperty: 'color',
                transitionDuration: '{{motions.motionDuration020}}',
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
              },
            },
            backgroundTransitionCustom: {
              base: {
                transitionProperty: 'background-color',
                transitionDuration: '{{motions.motionDuration030}}',
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
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
        name: 'test-transition-preset',
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
        name: 'test-transition-preset',
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

  test('return trasntion string tokens based on breakpoints', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-transition-preset',
        overrides: {
          breakpoints: {
            xs: 0,
            sm: 500,
            md: 800,
            lg: 1000,
            xl: 1500,
          },
          motions: {
            motionDuration020: '2000ms',
            motionDuration030: '3000ms',
            motionTimingLinear: 'linear',
          },
          transitionPresets: {
            colorTransitionCustom: {
              base: {
                transitionProperty: 'color',
                transitionDuration: '{{motions.motionDuration020}}',
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
              },
            },
            backgroundTransitionCustom: {
              base: {
                transitionProperty: 'background-colour',
                transitionDuration: '{{motions.motionDuration030}}',
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
              },
            },
            widthTransitionCustom: {
              base: {
                transitionProperty: 'width',
                transitionDuration: '{{motions.motionDuration020}}',
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
              },
            },
            heightTransitionCustom: {
              base: {
                transitionProperty: 'height',
                transitionDuration: '{{motions.motionDuration030}}',
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
              },
            },
          },
        },
      }),
    );

    const mqTransitions = {
      xs: 'colorTransitionCustom',
      sm: 'widthTransitionCustom',
      md: 'backgroundTransitionCustom',
      xl: 'heightTransitionCustom',
    };

    const result = getTransitionPresetFromTheme(mqTransitions)({
      theme,
    });

    expect(result).toEqual({
      '@media screen and (max-width: 499px)': {
        transitionDuration: '2000ms',
        transitionProperty: 'color',
        transitionTimingFunction: 'linear',
      },

      '@media screen and (min-width: 1500px)': {
        transitionDuration: '3000ms',
        transitionProperty: 'height',
        transitionTimingFunction: 'linear',
      },
      '@media screen and (min-width: 500px) and (max-width: 799px)': {
        transitionDuration: '2000ms',
        transitionProperty: 'width',
        transitionTimingFunction: 'linear',
      },
      '@media screen and (min-width: 800px) and (max-width: 1499px)': {
        transitionDuration: '3000ms',
        transitionProperty: 'background-colour',
        transitionTimingFunction: 'linear',
      },
    });
  });

  test('return array of trasntion string tokens based on breakpoints', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-transition-preset',
        overrides: {
          breakpoints: {
            xs: 0,
            sm: 500,
            md: 800,
            lg: 1000,
            xl: 1500,
          },
          motions: {
            motionDuration020: '2000ms',
            motionDuration030: '3000ms',
            motionDuration040: '4000ms',
            motionTimingLinear: 'linear',
          },
          transitionPresets: {
            colorTransitionCustom: {
              base: {
                transitionProperty: 'color',
                transitionDuration: '{{motions.motionDuration020}}',
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
              },
            },
            backgroundTransitionCustom: {
              base: {
                transitionProperty: 'background-colour',
                transitionDuration: '{{motions.motionDuration030}}',
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
              },
            },
            widthTransitionCustom: {
              base: {
                transitionProperty: 'width',
                transitionDuration: '{{motions.motionDuration020}}',
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
              },
            },
            heightTransitionCustom: {
              base: {
                transitionProperty: 'height',
                transitionDuration: '{{motions.motionDuration030}}',
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
              },
            },
            fadeTransitionCustom: {
              base: {
                transitionProperty: 'opacity',
                transitionDuration: '{{motions.motionDuration040}}',
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
              },
            },
          },
        },
      }),
    );

    const mqTransitions = {
      xs: ['colorTransitionCustom', 'fadeTransitionCustom'],
      sm: ['widthTransitionCustom', 'fadeTransitionCustom'],
      md: ['backgroundTransitionCustom', 'fadeTransitionCustom'],
      xl: ['heightTransitionCustom', 'fadeTransitionCustom'],
    };

    const result = getTransitionPresetFromTheme(mqTransitions)({
      theme,
    });

    expect(result).toEqual({
      '@media screen and (max-width: 499px)': {
        transitionDuration: '2000ms, 4000ms',
        transitionProperty: 'color, opacity',
        transitionTimingFunction: 'linear, linear',
      },

      '@media screen and (min-width: 1500px)': {
        transitionDuration: '3000ms, 4000ms',
        transitionProperty: 'height, opacity',
        transitionTimingFunction: 'linear, linear',
      },
      '@media screen and (min-width: 500px) and (max-width: 799px)': {
        transitionDuration: '2000ms, 4000ms',
        transitionProperty: 'width, opacity',
        transitionTimingFunction: 'linear, linear',
      },
      '@media screen and (min-width: 800px) and (max-width: 1499px)': {
        transitionDuration: '3000ms, 4000ms',
        transitionProperty: 'background-colour, opacity',
        transitionTimingFunction: 'linear, linear',
      },
    });
  });

  test('return trasntion extend objects based on breakpoint', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-transition-preset',
        overrides: {
          breakpoints: {
            xs: 1,
            md: 800,
          },
          motions: {
            motionDuration020: '2000ms',
            motionDuration030: '3000ms',
            motionTimingLinear: 'linear',
          },
          transitionPresets: {
            colorTransitionCustom: {
              base: {
                transitionProperty: 'color',
                transitionDuration: '{{motions.motionDuration020}}',
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
              },
            },
            backgroundTransitionCustom: {
              base: {
                transitionProperty: 'background-colour',
                transitionDuration: '{{motions.motionDuration030}}',
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
              },
            },
          },
        },
      }),
    );

    const mqTransitions = {
      xs: {
        extend: 'colorTransitionCustom',
        base: {transitionDuration: '5000ms'},
      },
      md: {
        extend: 'backgroundTransitionCustom',
        base: {transitionDuration: '5000ms'},
      },
    };

    const result = getTransitionPresetFromTheme(mqTransitions)({
      theme,
    });

    expect(result).toEqual({
      '@media screen and (min-width: 1px) and (max-width: 799px)': {
        transitionProperty: 'color',
        transitionDuration: '5000ms',
        transitionTimingFunction: 'linear',
      },
      '@media screen and (min-width: 800px)': {
        transitionProperty: 'background-colour',
        transitionDuration: '5000ms',
        transitionTimingFunction: 'linear',
      },
    });
  });

  test('return array of trasntion extend objects based on breakpoint', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-transition-preset',
        overrides: {
          breakpoints: {
            xs: 1,
            md: 800,
          },
          motions: {
            motionDuration020: '2000ms',
            motionDuration030: '3000ms',
            motionDuration040: '4000ms',
            motionTimingLinear: 'linear',
          },
          transitionPresets: {
            colorTransitionCustom: {
              base: {
                transitionProperty: 'color',
                transitionDuration: '{{motions.motionDuration020}}',
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
              },
            },
            backgroundTransitionCustom: {
              base: {
                transitionProperty: 'background-colour',
                transitionDuration: '{{motions.motionDuration030}}',
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
              },
            },
            fadeTransitionCustom: {
              base: {
                transitionProperty: 'opacity',
                transitionDuration: '{{motions.motionDuration040}}',
                transitionTimingFunction: '{{motions.motionTimingLinear}}',
              },
            },
          },
        },
      }),
    );

    const mqTransitions = {
      xs: [
        {
          extend: 'colorTransitionCustom',
          base: {transitionDuration: '5000ms'},
        },
        {extend: 'fadeTransitionCustom', base: {transitionDuration: '6000ms'}},
      ],
      md: [
        {
          extend: 'backgroundTransitionCustom',
          base: {transitionDuration: '5000ms'},
        },
        {extend: 'fadeTransitionCustom', base: {transitionDuration: '6000ms'}},
      ],
    };

    const result = getTransitionPresetFromTheme(mqTransitions)({
      theme,
    });

    expect(result).toEqual({
      '@media screen and (min-width: 1px) and (max-width: 799px)': {
        transitionProperty: 'color, opacity',
        transitionDuration: '5000ms, 6000ms',
        transitionTimingFunction: 'linear, linear',
      },
      '@media screen and (min-width: 800px)': {
        transitionProperty: 'background-colour, opacity',
        transitionDuration: '5000ms, 6000ms',
        transitionTimingFunction: 'linear, linear',
      },
    });
  });
});
