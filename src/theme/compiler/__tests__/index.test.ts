/* eslint-disable no-console */
import {compileTheme} from '..';
import {createTheme} from '../../creator';

describe('compileTheme', () => {
  test('compiles flat sibling tokens', () => {
    const theme: any = {
      red010: '#ff0000',
      interactiveNegative010: '{{red010}}',
    };

    expect(compileTheme(theme)).toMatchInlineSnapshot(`
      Object {
        "compiled": true,
        "icons": Object {},
        "interactiveNegative010": "#ff0000",
        "red010": "#ff0000",
        "stylePresets": Object {},
      }
    `);
  });

  test('compiles falsy value tokens', () => {
    const theme: any = {
      sizing00: '',
      sizing000: 0,
      mySizing00: '{{sizing00}}',
      mySizing000: '{{sizing000}}',
    };

    expect(compileTheme(theme)).toMatchInlineSnapshot(`
      Object {
        "compiled": true,
        "icons": Object {},
        "mySizing00": "",
        "mySizing000": 0,
        "sizing00": "",
        "sizing000": 0,
        "stylePresets": Object {},
      }
    `);
  });

  test('compiles path tokens', () => {
    const theme: any = {
      colors: {
        red010: '#ff0000',
        interactiveNegative010: '{{colors.red010}}',
      },
    };

    expect(compileTheme(theme)).toMatchInlineSnapshot(`
      Object {
        "colors": Object {
          "interactiveNegative010": "#ff0000",
          "red010": "#ff0000",
        },
        "compiled": true,
        "icons": Object {},
        "stylePresets": Object {},
      }
    `);
  });

  test('compiles with __extends and __delete keywords', () => {
    const theme: any = {
      colors: {
        red010: '#ff0000',
        green010: '#00ff00',
        blue010: '#0000ff',
        yellow010: '#ffff00',
        grey010: '#888888',
      },
      stylePresets: {
        cardContainer: {
          base: {
            backgroundColor: '{{colors.red010}}',
            color: '{{colors.green010}}',
          },
          hover: {
            backgroundColor: '{{colors.blue010}}',
          },
          active: {
            color: '{{colors.blue010}}',
          },
          disabled: {
            backgroundColor: '{{colors.grey010}}',
            color: '{{colors.red010}}',
          },
        },
        cardContainerVariant2: {
          __extends: '{{stylePresets.cardContainer}}',
          base: {
            __extends: '{{stylePresets.cardContainer.base}}',
            color: '{{colors.yellow010}}',
          },
          active: '__delete',
          disabled: {
            __extends: '{{stylePresets.cardContainer.disabled}}',
            color: '__delete',
          },
        },
      },
    };

    expect(compileTheme(theme)).toMatchInlineSnapshot(`
      Object {
        "colors": Object {
          "blue010": "#0000ff",
          "green010": "#00ff00",
          "grey010": "#888888",
          "red010": "#ff0000",
          "yellow010": "#ffff00",
        },
        "compiled": true,
        "icons": Object {},
        "stylePresets": Object {
          "cardContainer": Object {
            "active": Object {
              "color": "#0000ff",
            },
            "base": Object {
              "backgroundColor": "#ff0000",
              "color": "#00ff00",
            },
            "disabled": Object {
              "backgroundColor": "#888888",
              "color": "#ff0000",
            },
            "hover": Object {
              "backgroundColor": "#0000ff",
            },
          },
          "cardContainerVariant2": Object {
            "base": Object {
              "backgroundColor": "#ff0000",
              "color": "#ffff00",
            },
            "disabled": Object {
              "backgroundColor": "#888888",
            },
            "hover": Object {
              "backgroundColor": "#0000ff",
            },
          },
        },
      }
    `);
  });

  test('compiles with multiple __extends keyword values', () => {
    const theme: any = {
      colors: {
        red010: '#ff0000',
        green010: '#00ff00',
        blue010: '#0000ff',
        yellow010: '#ffff00',
        grey010: '#888888',
      },
      stylePresets: {
        cardContainer: {
          base: {
            backgroundColor: '{{colors.red010}}',
            iconColor: '{{colors.green010}}',
          },
          active: {
            color: '{{colors.blue010}}',
          },
        },
        cardContainer2: {
          base: {
            backgroundColor: '{{colors.yellow010}}',
            color: '{{colors.blue010}}',
          },
          disabled: {
            backgroundColor: '{{colors.grey010}}',
          },
        },
        cardContainer3: {
          __extends: [
            '{{stylePresets.cardContainer}}',
            '{{stylePresets.cardContainer2}}',
          ],
        },
      },
    };

    expect(compileTheme(theme)).toMatchInlineSnapshot(`
      Object {
        "colors": Object {
          "blue010": "#0000ff",
          "green010": "#00ff00",
          "grey010": "#888888",
          "red010": "#ff0000",
          "yellow010": "#ffff00",
        },
        "compiled": true,
        "icons": Object {},
        "stylePresets": Object {
          "cardContainer": Object {
            "active": Object {
              "color": "#0000ff",
            },
            "base": Object {
              "backgroundColor": "#ff0000",
              "iconColor": "#00ff00",
            },
          },
          "cardContainer2": Object {
            "base": Object {
              "backgroundColor": "#ffff00",
              "color": "#0000ff",
            },
            "disabled": Object {
              "backgroundColor": "#888888",
            },
          },
          "cardContainer3": Object {
            "active": Object {
              "color": "#0000ff",
            },
            "base": Object {
              "backgroundColor": "#ffff00",
              "color": "#0000ff",
            },
            "disabled": Object {
              "backgroundColor": "#888888",
            },
          },
        },
      }
    `);
  });

  test('compiles with __deepExtends keyword', () => {
    const theme: any = {
      colors: {
        red010: '#ff0000',
        green010: '#00ff00',
        blue010: '#0000ff',
        yellow010: '#ffff00',
        grey010: '#888888',
      },
      stylePresets: {
        cardContainer: {
          base: {
            backgroundColor: '{{colors.red010}}',
            iconColor: '{{colors.green010}}',
          },
          active: {
            color: '{{colors.blue010}}',
          },
        },
        cardContainer2: {
          base: {
            backgroundColor: '{{colors.yellow010}}',
            color: '{{colors.blue010}}',
          },
          disabled: {
            backgroundColor: '{{colors.grey010}}',
          },
        },
        cardContainer3: {
          __deepExtends: [
            '{{stylePresets.cardContainer}}',
            '{{stylePresets.cardContainer2}}',
          ],
        },
      },
    };

    expect(compileTheme(theme)).toMatchInlineSnapshot(`
      Object {
        "colors": Object {
          "blue010": "#0000ff",
          "green010": "#00ff00",
          "grey010": "#888888",
          "red010": "#ff0000",
          "yellow010": "#ffff00",
        },
        "compiled": true,
        "icons": Object {},
        "stylePresets": Object {
          "cardContainer": Object {
            "active": Object {
              "color": "#0000ff",
            },
            "base": Object {
              "backgroundColor": "#ff0000",
              "iconColor": "#00ff00",
            },
          },
          "cardContainer2": Object {
            "base": Object {
              "backgroundColor": "#ffff00",
              "color": "#0000ff",
            },
            "disabled": Object {
              "backgroundColor": "#888888",
            },
          },
          "cardContainer3": Object {
            "active": Object {
              "color": "#0000ff",
            },
            "base": Object {
              "backgroundColor": "#ffff00",
              "color": "#0000ff",
              "iconColor": "#00ff00",
            },
            "disabled": Object {
              "backgroundColor": "#888888",
            },
          },
        },
      }
    `);
  });

  test('preserves number types', () => {
    const theme: any = {
      fonts: {
        fontLineHeight000: 0,
        fontLineHeight010: 1,
        fontLineHeight020: 1.125,
        fontLineHeight000Copy: '{{fonts.fontLineHeight000}}',
        fontLineHeight010Copy: '{{fonts.fontLineHeight010}}',
        fontLineHeight020Copy: '{{fonts.fontLineHeight020}}',
      },
    };

    expect(compileTheme(theme)).toMatchInlineSnapshot(`
      Object {
        "compiled": true,
        "fonts": Object {
          "fontLineHeight000": 0,
          "fontLineHeight000Copy": 0,
          "fontLineHeight010": 1,
          "fontLineHeight010Copy": 1,
          "fontLineHeight020": 1.125,
          "fontLineHeight020Copy": 1.125,
        },
        "icons": Object {},
        "stylePresets": Object {},
      }
    `);
  });

  test('preserves object types and compiles', () => {
    const theme: any = {
      colors: {
        red010: '#ff0000',
        blue010: '#0000ff',
      },
      stylePresets: {
        myStylePreset: {
          base: {
            backgroundColor: '{{colors.red010}}',
          },
        },
        myStylePresetWithHover: {
          base: '{{stylePresets.myStylePreset.base}}',
          hover: {
            backgroundColor: '{{colors.blue010}}',
          },
        },
      },
    };

    expect(compileTheme(theme)).toMatchInlineSnapshot(`
      Object {
        "colors": Object {
          "blue010": "#0000ff",
          "red010": "#ff0000",
        },
        "compiled": true,
        "icons": Object {},
        "stylePresets": Object {
          "myStylePreset": Object {
            "base": Object {
              "backgroundColor": "#ff0000",
            },
          },
          "myStylePresetWithHover": Object {
            "base": Object {
              "backgroundColor": "#ff0000",
            },
            "hover": Object {
              "backgroundColor": "#0000ff",
            },
          },
        },
      }
    `);
  });

  test('preserves object types from functions and compiles', () => {
    const theme: any = {
      stylePresets: {
        myStylePresetWithHover: {
          base: () => ({
            backgroundColor: '{{colors.red010}}',
          }),
          hover: {
            backgroundColor: '{{colors.blue010}}',
          },
        },
      },
      colors: {
        red010: '#ff0000',
        blue010: '#0000ff',
      },
    };

    expect(compileTheme(theme)).toMatchInlineSnapshot(`
      Object {
        "colors": Object {
          "blue010": "#0000ff",
          "red010": "#ff0000",
        },
        "compiled": true,
        "icons": Object {},
        "stylePresets": Object {
          "myStylePresetWithHover": Object {
            "base": Object {
              "backgroundColor": "#ff0000",
            },
            "hover": Object {
              "backgroundColor": "#0000ff",
            },
          },
        },
      }
    `);
  });

  test('compiles tokens from functions', () => {
    const theme: any = {
      colors: {
        red010: '#ff0000',
        myRedColor: '{{colors.red010}}',
      },
      stylePresets: {
        myStylePreset: {
          base: {
            backgroundColor: ({colors}: any) => colors.myRedColor,
          },
        },
      },
    };

    expect(compileTheme(theme)).toMatchInlineSnapshot(`
      Object {
        "colors": Object {
          "myRedColor": "#ff0000",
          "red010": "#ff0000",
        },
        "compiled": true,
        "icons": Object {},
        "stylePresets": Object {
          "myStylePreset": Object {
            "base": Object {
              "backgroundColor": "#ff0000",
            },
          },
        },
      }
    `);
  });

  test('compiles recursive nested tokens', () => {
    const theme: any = {
      colors: {
        red010: '#ff0000',
        interactiveNegative010: '{{colors.red010}}',
      },
      stylePresets: {
        myPreset: {
          base: {
            backgroundColor: '{{colors.interactiveNegative010}}',
          },
        },
      },
    };

    expect(compileTheme(theme)).toMatchInlineSnapshot(`
      Object {
        "colors": Object {
          "interactiveNegative010": "#ff0000",
          "red010": "#ff0000",
        },
        "compiled": true,
        "icons": Object {},
        "stylePresets": Object {
          "myPreset": Object {
            "base": Object {
              "backgroundColor": "#ff0000",
            },
          },
        },
      }
    `);
  });

  test('compiles tokens in keys', () => {
    const theme: any = {
      fonts: {
        fontSize020: '12px',
        fontConfig1: {
          cropAdjustments: {
            '{{fonts.fontSize020}}': {
              top: 1.2,
            },
          },
        },
      },
    };

    expect(compileTheme(theme)).toMatchInlineSnapshot(`
      Object {
        "compiled": true,
        "fonts": Object {
          "fontConfig1": Object {
            "cropAdjustments": Object {
              "12px": Object {
                "top": 1.2,
              },
            },
          },
          "fontSize020": "12px",
        },
        "icons": Object {},
        "stylePresets": Object {},
      }
    `);
  });

  test('adds ink stylePreset when ink colors are being passed', () => {
    const theme: any = {
      colors: {
        inkBase: 'base-colour',
        inkContrast: 'contrast-colour',
        inkSubtle: 'subtle-colour',
      },
    };

    expect(compileTheme(theme)).toMatchInlineSnapshot(`
      Object {
        "colors": Object {
          "inkBase": "base-colour",
          "inkContrast": "contrast-colour",
          "inkSubtle": "subtle-colour",
        },
        "compiled": true,
        "icons": Object {},
        "stylePresets": Object {
          "inkBase": Object {
            "base": Object {
              "color": "base-colour",
              "iconColor": "base-colour",
            },
          },
          "inkContrast": Object {
            "base": Object {
              "color": "contrast-colour",
              "iconColor": "contrast-colour",
            },
          },
          "inkSubtle": Object {
            "base": Object {
              "color": "subtle-colour",
              "iconColor": "subtle-colour",
            },
          },
          "uppercaseInkBase": Object {
            "base": Object {
              "color": "base-colour",
              "iconColor": "base-colour",
              "textTransform": "uppercase",
            },
          },
          "uppercaseInkContrast": Object {
            "base": Object {
              "color": "contrast-colour",
              "iconColor": "contrast-colour",
              "textTransform": "uppercase",
            },
          },
          "uppercaseInkSubtle": Object {
            "base": Object {
              "color": "subtle-colour",
              "iconColor": "subtle-colour",
              "textTransform": "uppercase",
            },
          },
        },
      }
    `);
  });

  test('only replaces double bracket wrapped tokens', () => {
    const theme: any = {
      white: '#ffffff',
      colour1: 'white',
      colour2: '{white}',
      colour3: '#ffffff',
    };

    expect(compileTheme(theme)).toMatchInlineSnapshot(`
      Object {
        "colour1": "white",
        "colour2": "{white}",
        "colour3": "#ffffff",
        "compiled": true,
        "icons": Object {},
        "stylePresets": Object {},
        "white": "#ffffff",
      }
    `);
  });

  test('replaces multiple tokens in a single string', () => {
    const theme: any = {
      sizing: {
        sizing010: '2px',
        sizing020: '4px',
        spaceInset: '{{sizing.sizing010}} {{sizing.sizing020}}',
      },
    };

    expect(compileTheme(theme)).toMatchInlineSnapshot(`
      Object {
        "compiled": true,
        "icons": Object {},
        "sizing": Object {
          "sizing010": "2px",
          "sizing020": "4px",
          "spaceInset": "2px 4px",
        },
        "stylePresets": Object {},
      }
    `);
  });

  test('calls calculation functions', () => {
    const theme: any = {
      lineHeight: jest.fn().mockReturnValue(42),
    };

    const result = compileTheme(theme);
    expect(theme.lineHeight).toHaveBeenCalledWith({...theme, stylePresets: {}});
    expect(result).toMatchInlineSnapshot(`
      Object {
        "compiled": true,
        "icons": Object {},
        "lineHeight": 42,
        "stylePresets": Object {},
      }
    `);
  });

  test('logs error if a token is not found', () => {
    const theme: any = {
      myColour: '{{forgotToDefineThis}}',
    };
    console.error = jest.fn();

    const result = compileTheme(theme);
    expect(console.error).toHaveBeenCalledWith(
      'Theme token "forgotToDefineThis" was not found when compiling theme!',
    );
    expect(result).toMatchInlineSnapshot(`
      Object {
        "compiled": true,
        "icons": Object {},
        "myColour": undefined,
        "stylePresets": Object {},
      }
    `);
  });

  test('compiles deeply nested theme', () => {
    console.error = jest.fn();

    const deepTheme: any = {
      deepToken: '#00ff00',
      deepToken1: '{{deepToken}}',
      deepToken2: '{{deepToken1}}',
      deepToken3: '{{deepToken2}}',
      deepToken4: '{{deepToken3}}',
    };

    const result1 = compileTheme(deepTheme);
    expect(console.error).not.toHaveBeenCalledWith();
    expect(result1).toMatchInlineSnapshot(`
      Object {
        "compiled": true,
        "deepToken": "#00ff00",
        "deepToken1": "#00ff00",
        "deepToken2": "#00ff00",
        "deepToken3": "#00ff00",
        "deepToken4": "#00ff00",
        "icons": Object {},
        "stylePresets": Object {},
      }
    `);
  });

  test('stops if recursion level hits 5', () => {
    const tooDeepTheme: any = {
      deepToken: '#00ff00',
      deepToken1: '{{deepToken}}',
      deepToken2: '{{deepToken1}}',
      deepToken3: '{{deepToken2}}',
      deepToken4: '{{deepToken3}}',
      deepToken5: '{{deepToken4}}',
    };

    const result = compileTheme(tooDeepTheme);
    expect(console.error).toHaveBeenCalledWith(
      'Recursive loop detected, token stack: "deepToken", "deepToken1", "deepToken2", "deepToken3", "deepToken4"!',
    );
    expect(result).toMatchInlineSnapshot(`
      Object {
        "compiled": true,
        "deepToken": "#00ff00",
        "deepToken1": "#00ff00",
        "deepToken2": "#00ff00",
        "deepToken3": "#00ff00",
        "deepToken4": "#00ff00",
        "deepToken5": "",
        "icons": Object {},
        "stylePresets": Object {},
      }
    `);
  });

  test('stops in recursive loop', () => {
    const recursiveLoopTheme: any = {
      recursiveToken: '{{recursiveToken1}}',
      recursiveToken1: '{{recursiveToken}}',
      recursiveToken2: '{{recursiveToken1}}',
    };

    const result = compileTheme(recursiveLoopTheme);
    expect(console.error).toHaveBeenCalledWith(
      'Recursive loop detected, token stack: "recursiveToken1", "recursiveToken", "recursiveToken1", "recursiveToken", "recursiveToken1"!',
    );
    expect(result).toMatchInlineSnapshot(`
      Object {
        "compiled": true,
        "icons": Object {},
        "recursiveToken": "",
        "recursiveToken1": "",
        "recursiveToken2": "",
        "stylePresets": Object {},
      }
    `);
  });

  test('full theme compile', () => {
    expect(compileTheme(createTheme({name: 'my theme'}))).toMatchSnapshot();
  });
});
