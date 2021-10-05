import {compileTheme, createTheme} from '../../theme';
import {
  getTransitionDurationFromTheme,
  getTransitionDuration,
} from '../get-transition-duration';

describe('getTransitionDurationFromTheme', () => {
  test('returns duration from a one preset with base state', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration020: '2000ms',
            motionLinear: 'linear',
          },
          transitionPresets: {
            customTransitionPreset: {
              base: {
                transitionProperty: 'css-props',
                transitionDuration: '{{motions.motionDuration020}}',
                transitionTimingFunction: '{{motions.motionLinear}}',
              },
            },
          },
        },
      }),
    );

    const result = getTransitionDurationFromTheme('customTransitionPreset')({
      theme,
    });

    expect(result).toEqual({
      enter: 2000,
      exit: 2000,
      appear: 2000,
    });
  });

  test('handles invalid token name', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
      }),
    );

    const result = getTransitionDurationFromTheme('invalidToken')({theme});

    expect(result).toEqual({
      enter: 0,
      exit: 0,
      appear: 0,
    });
  });

  test('handles invalid token value', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration020: 'NAN',
            motionLinear: 'linear',
          },
          transitionPresets: {
            customTransitionPreset: {
              base: {
                transitionProperty: 'css-props',
                transitionDuration: '{{motions.motionDuration020}}',
                transitionTimingFunction: '{{motions.motionLinear}}',
              },
            },
          },
        },
      }),
    );

    const result = getTransitionDurationFromTheme('customTransitionPreset')({
      theme,
    });

    expect(result).toEqual({
      enter: 0,
      exit: 0,
      appear: 0,
    });
  });

  test('handles invalid token string', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration020: '4000',
            motionLinear: 'linear',
          },
          transitionPresets: {
            customTransitionPreset: {
              base: {
                transitionProperty: 'css-props',
                transitionDuration: '{{motions.motionDuration020}}',
                transitionTimingFunction: '{{motions.motionLinear}}',
              },
            },
          },
        },
      }),
    );

    const result = getTransitionDurationFromTheme('customTransitionPreset')({
      theme,
    });

    expect(result).toEqual({
      enter: 0,
      exit: 0,
      appear: 0,
    });
  });

  test('returns max duration from multiple valid presets with base state', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration020: '2000ms',
            motionDuration030: '3000ms',
            motionDuration040: '4000ms',
            motionLinear: 'linear',
          },
          transitionPresets: {
            customTransitionPreset1: {
              base: {
                transitionProperty: 'css-props-1',
                transitionDuration: '{{motions.motionDuration020}}',
                transitionTimingFunction: '{{motions.motionLinear}}',
              },
            },
            customTransitionPreset2: {
              base: {
                transitionProperty: 'css-props-2',
                transitionDuration: '{{motions.motionDuration030}}',
                transitionTimingFunction: '{{motions.motionLinear}}',
              },
            },
            customTransitionPreset3: {
              base: {
                transitionProperty: 'css-props-3',
                transitionDuration: '{{motions.motionDuration040}}',
                transitionTimingFunction: '{{motions.motionLinear}}',
              },
            },
          },
        },
      }),
    );

    const result = getTransitionDurationFromTheme([
      'customTransitionPreset1',
      'customTransitionPreset2',
      'customTransitionPreset3',
    ])({theme});

    expect(result).toEqual({
      enter: 4000,
      exit: 4000,
      appear: 4000,
    });
  });

  test('handles invalid token and return max duration multiple valid presets with base state', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration020: '2000ms',
            motionDuration030: '3000ms',
            motionDuration040: '4000ms',
            motionLinear: 'linear',
          },
          transitionPresets: {
            customTransitionPreset1: {
              base: {
                transitionProperty: 'css-props-1',
                transitionDuration: '{{motions.motionDuration020}}',
                transitionTimingFunction: '{{motions.motionLinear}}',
              },
            },
            customTransitionPreset2: {
              base: {
                transitionProperty: 'css-props-2',
                transitionDuration: '{{motions.motionDuration030}}',
                transitionTimingFunction: '{{motions.motionLinear}}',
              },
            },
            customTransitionPreset3: {
              base: {
                transitionProperty: 'css-props-3',
                transitionDuration: '{{motions.motionDuration040}}',
                transitionTimingFunction: '{{motions.motionLinear}}',
              },
            },
          },
        },
      }),
    );

    const result = getTransitionDurationFromTheme([
      'customTransitionPreset1',
      'invalidToken',
      'customTransitionPreset3',
    ])({theme});

    expect(result).toEqual({
      enter: 4000,
      exit: 4000,
      appear: 4000,
    });
  });

  test('returns duration from one preset with mount-unmount states', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration010: '1000ms',
            motionDuration020: '2000ms',
            motionDuration030: '3000ms',
            motionDuration040: '4000ms',

            motionLinear: 'linear',
          },
          transitionPresets: {
            customTransitionPreset: {
              base: {
                opacity: '0.2',
              },
              appear: {
                opacity: '0.2',
              },
              appearActive: {
                opacity: '0.2',
                transitionProperty: 'opacity',
                transitionDuration: '{{motions.motionDuration010}}',
              },
              appearDone: {
                opacity: '0.8',
              },
              enter: {
                opacity: '0.2',
              },
              enterActive: {
                opacity: '0.8',
                transitionProperty: 'opacity',
                transitionDuration: '{{motions.motionDuration030}}',
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

    const result = getTransitionDurationFromTheme('customTransitionPreset')({
      theme,
    });

    expect(result).toEqual({
      appear: 1000,
      enter: 3000,
      exit: 4000,
    });
  });

  test('returns duration from multiple presets with mount-unmount state', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration010: '1000ms',
            motionDuration020: '2000ms',
            motionDuration030: '3000ms',
            motionDuration040: '4000ms',
            motionLinear: 'linear',
          },
          transitionPresets: {
            customTransitionPreset1: {
              base: {
                opacity: '0.2',
              },
              appear: {
                opacity: '0.2',
              },
              appearActive: {
                opacity: '0.2',
                transitionProperty: 'opacity',
                transitionDuration: '{{motions.motionDuration010}}',
              },
              appearDone: {
                opacity: '0.8',
              },
              enter: {
                opacity: '0.2',
              },
              enterActive: {
                opacity: '0.8',
                transitionProperty: 'opacity',
                transitionDuration: '{{motions.motionDuration030}}',
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
                transitionDuration: '{{motions.motionDuration020}}',
              },
              exitDone: {
                opacity: '0.2',
              },
            },
            customTransitionPreset2: {
              base: {
                transform: 'translateX(0)',
              },
              appear: {
                transform: 'translateX(0)',
              },
              appearActive: {
                transform: 'translateX(0)',
                transitionProperty: 'translate',
                transitionDuration: '{{motions.motionDuration020}}',
              },
              appearDone: {
                transform: 'translateX(100%)',
              },
              enter: {
                transform: 'translateX(0)',
              },
              enterActive: {
                transform: 'translateX(0)',
                transitionProperty: 'translate',
                transitionDuration: '{{motions.motionDuration020}}',
              },
              enterDone: {
                transform: 'translateX(100%)',
              },
              exit: {
                transform: 'translateX(100%)',
              },
              exitActive: {
                transform: 'translateX(0)',
                transitionProperty: 'translate',
                transitionDuration: '{{motions.motionDuration040}}',
              },
              exitDone: {
                transform: 'translateX(0)',
              },
            },
          },
        },
      }),
    );

    const result = getTransitionDurationFromTheme([
      'customTransitionPreset1',
      'customTransitionPreset2',
    ])({theme});

    expect(result).toEqual({
      appear: 2000,
      enter: 3000,
      exit: 4000,
    });
  });

  test('handles one empty preset state', () => {
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

    const result = getTransitionDurationFromTheme('customTransitionPreset')({
      theme,
    });

    expect(result).toEqual({
      enter: 0,
      exit: 0,
      appear: 0,
    });
  });

  test('handles multiple empty preset state', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration010: '1000ms',
            motionDuration020: '2000ms',
            motionDuration030: '3000ms',
            motionDuration040: '4000ms',
            motionLinear: 'linear',
          },
          transitionPresets: {
            customTransitionPreset1: {},
            customTransitionPreset2: {},
          },
        },
      }),
    );

    const result = getTransitionDurationFromTheme([
      'customTransitionPreset1',
      'customTransitionPreset2',
    ])({theme});

    expect(result).toEqual({
      appear: 0,
      enter: 0,
      exit: 0,
    });
  });

  test('handles one preset with no base states, returns 0 for duration', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          transitionPresets: {
            customTransitionPreset: {
              base: {},
            },
          },
        },
      }),
    );

    const result = getTransitionDurationFromTheme('customTransitionPreset')({
      theme,
    });

    expect(result).toEqual({
      appear: 0,
      enter: 0,
      exit: 0,
    });
  });

  test('handles mount-unmount preset with no appear states, returns 0 for appear duration', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration010: '1000ms',
            motionDuration020: '2000ms',
            motionDuration030: '3000ms',
            motionDuration040: '4000ms',

            motionLinear: 'linear',
          },
          transitionPresets: {
            customTransitionPreset: {
              base: {
                opacity: '0.2',
              },
              enter: {
                opacity: '0.2',
              },
              enterActive: {
                opacity: '0.8',
                transitionProperty: 'opacity',
                transitionDuration: '{{motions.motionDuration030}}',
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

    const result = getTransitionDurationFromTheme('customTransitionPreset')({
      theme,
    });

    expect(result).toEqual({
      appear: 0,
      enter: 3000,
      exit: 4000,
    });
  });

  test('handles mount-unmount preset with no enter states, returns 0 for enter duration', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration010: '1000ms',
            motionDuration020: '2000ms',
            motionDuration030: '3000ms',
            motionDuration040: '4000ms',

            motionLinear: 'linear',
          },
          transitionPresets: {
            customTransitionPreset: {
              base: {
                opacity: '0.2',
              },
              appear: {
                opacity: '0.2',
              },
              appearActive: {
                opacity: '0.2',
                transitionProperty: 'opacity',
                transitionDuration: '{{motions.motionDuration010}}',
              },
              appearDone: {
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

    const result = getTransitionDurationFromTheme('customTransitionPreset')({
      theme,
    });

    expect(result).toEqual({
      appear: 1000,
      enter: 0,
      exit: 4000,
    });
  });

  test('handles mount-unmount preset with no exit states, returns 0 for exit duration', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration010: '1000ms',
            motionDuration020: '2000ms',
            motionDuration030: '3000ms',
            motionDuration040: '4000ms',

            motionLinear: 'linear',
          },
          transitionPresets: {
            customTransitionPreset: {
              base: {
                opacity: '0.2',
              },
              appear: {
                opacity: '0.2',
              },
              appearActive: {
                opacity: '0.2',
                transitionProperty: 'opacity',
                transitionDuration: '{{motions.motionDuration010}}',
              },
              appearDone: {
                opacity: '0.8',
              },
              enter: {
                opacity: '0.2',
              },
              enterActive: {
                opacity: '0.8',
                transitionProperty: 'opacity',
                transitionDuration: '{{motions.motionDuration030}}',
              },
              enterDone: {
                opacity: '0.8',
              },
            },
          },
        },
      }),
    );

    const result = getTransitionDurationFromTheme('customTransitionPreset')({
      theme,
    });

    expect(result).toEqual({
      appear: 1000,
      enter: 3000,
      exit: 0,
    });
  });

  test('converts duration in s into ms from a one preset with base state', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration020: '3s',
            motionLinear: 'linear',
          },
          transitionPresets: {
            customTransitionPreset: {
              base: {
                transitionProperty: 'css-props',
                transitionDuration: '{{motions.motionDuration020}}',
                transitionTimingFunction: '{{motions.motionLinear}}',
              },
            },
          },
        },
      }),
    );

    const result = getTransitionDurationFromTheme('customTransitionPreset')({
      theme,
    });

    expect(result).toEqual({
      enter: 3000,
      exit: 3000,
      appear: 3000,
    });
  });

  test('converts duration in s into ms from one preset with mount-unmount states', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration010: '1s',
            motionDuration020: '2s',
            motionDuration030: '3s',
            motionDuration040: '4s',

            motionLinear: 'linear',
          },
          transitionPresets: {
            customTransitionPreset: {
              base: {
                opacity: '0.2',
              },
              appear: {
                opacity: '0.2',
              },
              appearActive: {
                opacity: '0.2',
                transitionProperty: 'opacity',
                transitionDuration: '{{motions.motionDuration010}}',
              },
              appearDone: {
                opacity: '0.8',
              },
              enter: {
                opacity: '0.2',
              },
              enterActive: {
                opacity: '0.8',
                transitionProperty: 'opacity',
                transitionDuration: '{{motions.motionDuration030}}',
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

    const result = getTransitionDurationFromTheme('customTransitionPreset')({
      theme,
    });

    expect(result).toEqual({
      appear: 1000,
      enter: 3000,
      exit: 4000,
    });
  });
});

describe('getTransitionDuration', () => {
  test('returns duration from a default transition preset', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration020: '2000ms',
            motionLinear: 'linear',
          },
          transitionPresets: {
            customTransitionPresetDefault: {
              base: {
                transitionProperty: 'css-props',
                transitionDuration: '200ms',
                transitionTimingFunction: 'linear',
              },
            },
          },
          componentDefaults: {
            componentUnderTest: {
              transitionPreset: 'customTransitionPresetDefault',
            },
          },
        },
      }),
    );

    const result = getTransitionDuration(
      'componentUnderTest',
      undefined,
    )({
      theme,
    });

    expect(result).toEqual({
      enter: 200,
      exit: 200,
      appear: 200,
    });
  });

  test('returns duration from a overrides single preset', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration020: '2000ms',
            motionLinear: 'linear',
          },
          transitionPresets: {
            customTransitionPresetDefault: {
              base: {
                transitionProperty: 'css-props-default-token',
                transitionDuration: '200ms',
                transitionTimingFunction: 'linear',
              },
            },
            customTransitionPresetOverrides: {
              base: {
                transitionProperty: 'css-props-overrides-token',
                transitionDuration: '300ms',
                transitionTimingFunction: 'linear',
              },
            },
          },
          componentDefaults: {
            componentUnderTest: {
              transitionPreset: 'customTransitionPresetDefault',
            },
          },
        },
      }),
    );

    const overrides = {
      transitionPreset: 'customTransitionPresetOverrides',
    };

    const result = getTransitionDuration(
      undefined,
      '',
    )({
      theme,
      overrides,
    });

    expect(result).toEqual({
      enter: 300,
      exit: 300,
      appear: 300,
    });
  });

  test('returns duration from multiple default transition presets', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration020: '2000ms',
            motionLinear: 'linear',
          },
          transitionPresets: {
            customTransitionPresetDefault1: {
              base: {
                transitionProperty: 'css-props',
                transitionDuration: '200ms',
                transitionTimingFunction: 'linear',
              },
            },
            customTransitionPresetDefault2: {
              base: {
                transitionProperty: 'css-props',
                transitionDuration: '400ms',
                transitionTimingFunction: 'linear',
              },
            },
          },
          componentDefaults: {
            componentUnderTest: {
              transitionPreset: [
                'customTransitionPresetDefault1',
                'customTransitionPresetDefault2',
              ],
            },
          },
        },
      }),
    );

    const result = getTransitionDuration(
      'componentUnderTest',
      undefined,
    )({
      theme,
    });

    expect(result).toEqual({
      enter: 400,
      exit: 400,
      appear: 400,
    });
  });

  test('handles invalid paths', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-style-preset',
        overrides: {
          motions: {
            motionDuration020: '2000ms',
            motionLinear: 'linear',
          },
          transitionPresets: {
            customTransitionPresetDefault: {
              base: {
                transitionProperty: 'css-props',
                transitionDuration: '200ms',
                transitionTimingFunction: 'linear',
              },
            },
          },
          componentDefaults: {
            componentUnderTest: {
              transitionPreset: 'customTransitionPresetDefault',
            },
          },
        },
      }),
    );

    const result = getTransitionDuration(
      'componentUnderTestInvalidPath',
      undefined,
    )({
      theme,
    });

    expect(result).toEqual({
      enter: 0,
      exit: 0,
      appear: 0,
    });
  });
});
