import {renderToFragmentWithTheme} from '../../test/test-utils';
import {
  styled,
  MQ,
  getStylePresetFromTheme,
  GetStylePresetFromThemeOptions,
  getPresetStyles,
  getSingleStylePreset,
} from '../style';
import {compileTheme, createTheme} from '../../theme';
import {deepMerge} from '../deep-merge';

const TestSurface = styled.div<GetStylePresetFromThemeOptions>`
  ${options =>
    getStylePresetFromTheme('iconButtonMinimalPrimary', undefined, options)}
`;

const TestSurfaceCheckbox = styled.div<GetStylePresetFromThemeOptions>`
  ${options => getStylePresetFromTheme('checkboxInput', undefined, options)}
`;

const TestSurfaceLink = styled.link<GetStylePresetFromThemeOptions>`
  ${options => getStylePresetFromTheme('linkInline', undefined, options)}
`;

const OverridableTestSurface = styled.div<
  GetStylePresetFromThemeOptions & {stylePresetToUse: MQ<string>}
>`
  ${options =>
    getStylePresetFromTheme(
      'iconButtonMinimalPrimary',
      'stylePresetToUse',
      options,
    )}
`;

const OverridableTestSurfaceWithNoDefault = styled.div<
  GetStylePresetFromThemeOptions & {stylePresetToUse: string}
>`
  ${options => getStylePresetFromTheme(undefined, 'stylePresetToUse', options)}
`;

const iconButtonMinimalPrimary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
  },
  hover: {
    backgroundColor: '{{colors.interactivePrimary010}}',
  },
  active: {
    backgroundColor: '{{colors.interactivePrimary020}}',
  },
  disabled: {
    backgroundColor: '{{colors.transparent}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactivePrimary020}}',
  },
};

const linkInline = {
  base: {
    color: '{{colors.interactivePrimary030}}',
    iconColor: '{{colors.interactivePrimary030}}',
    textDecoration: 'underline',
  },
  hover: {
    color: '{{colors.interactivePrimary040}}',
    iconColor: '{{colors.interactivePrimary040}}',
    textDecoration: 'underline',
  },
  active: {
    color: '{{colors.interactivePrimary050}}',
    iconColor: '{{colors.interactivePrimary050}}',
    textDecoration: 'underline',
  },
  visited: {
    color: '{{colors.interactiveVisited010}}',
    iconColor: '{{colors.interactiveVisited010}}',
    textDecoration: 'underline',
  },
  'visited:hover': {
    color: '{{colors.interactiveVisited010}}',
    iconColor: '{{colors.interactiveVisited010}}',
    textDecoration: 'underline',
  },
};
const checkboxInput = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderColor: '{{colors.interactiveInput020}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusRounded010}}',
    borderStyle: 'solid',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    borderColor: '{{colors.interactiveInput040}}',
  },
  focus: {
    borderColor: '{{colors.interactiveInput050}}',
  },
  'focus:hover': {
    borderColor: '{{colors.interactiveInput050}}',
  },
  checked: {
    backgroundColor: '{{colors.interactiveInput040}}',
    borderColor: '{{colors.interactiveInput040}}',
  },
  'checked:hover': {
    backgroundColor: '{{colors.interactiveInput050}}',
    borderColor: '{{colors.interactiveInput050}}',
  },
  'checked:focus': {
    backgroundColor: '{{colors.interactiveInput050}}',
    borderColor: '{{colors.interactiveInput050}}',
  },
  'checked:focus:hover': {
    backgroundColor: '{{colors.interactiveInput050}}',
    borderColor: '{{colors.interactiveInput050}}',
  },
  invalid: {
    borderColor: '{{colors.interactiveNegative040}}',
  },
  'invalid:focus': {
    borderColor: '{{colors.interactiveNegative050}}',
  },
  'invalid:hover': {
    borderColor: '{{colors.interactiveNegative050}}',
  },
  'invalid:focus:hover': {
    borderColor: '{{colors.interactiveNegative050}}',
  },
  'checked:invalid': {
    backgroundColor: '{{colors.interactiveNegative040}}',
    borderColor: '{{colors.interactiveNegative040}}',
  },
  'checked:invalid:focus': {
    backgroundColor: '{{colors.interactiveNegative050}}',
    borderColor: '{{colors.interactiveNegative050}}',
  },
  'checked:invalid:hover': {
    backgroundColor: '{{colors.interactiveNegative050}}',
    borderColor: '{{colors.interactiveNegative050}}',
  },
  'checked:invalid:focus:hover': {
    backgroundColor: '{{colors.interactiveNegative050}}',
    borderColor: '{{colors.interactiveNegative050}}',
  },
  valid: {
    borderColor: '{{colors.interactivePositive040}}',
  },
  'valid:focus': {
    borderColor: '{{colors.interactivePositive050}}',
  },
  'valid:hover': {
    borderColor: '{{colors.interactivePositive050}}',
  },
  'valid:focus:hover': {
    borderColor: '{{colors.interactivePositive050}}',
  },
  'checked:valid': {
    backgroundColor: '{{colors.interactivePositive040}}',
    borderColor: '{{colors.interactivePositive040}}',
  },
  'checked:valid:focus': {
    backgroundColor: '{{colors.interactivePositive050}}',
    borderColor: '{{colors.interactivePositive050}}',
  },
  'checked:valid:hover': {
    backgroundColor: '{{colors.interactivePositive050}}',
    borderColor: '{{colors.interactivePositive050}}',
  },
  'checked:valid:focus:hover': {
    backgroundColor: '{{colors.interactivePositive050}}',
    borderColor: '{{colors.interactivePositive050}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled010}}',
  },
  'checked:disabled': {
    backgroundColor: '{{colors.interactiveDisabled010}}',
    borderColor: '{{colors.interactiveDisabled010}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};

const themeIconButtonMinimalPrimary = createTheme({
  name: 'test-style-preset',
  overrides: {
    stylePresets: {iconButtonMinimalPrimary},
  },
});

describe('getStylePresetFromTheme', () => {
  test('with default iconButtonMinimalPrimary style preset', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      undefined,
      themeIconButtonMinimalPrimary,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('with override to interactivePrimary040', () => {
    const fragment = renderToFragmentWithTheme(
      OverridableTestSurface,
      {
        stylePresetToUse: 'interactivePrimary040',
      },
      createTheme({
        name: 'test-style-preset',
        overrides: {
          stylePresets: {
            interactivePrimary040: {
              base: {
                backgroundColor: '#FF00FF',
              },
            },
          },
        },
      }),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('with interactivePrimary010 for xs, interactivePrimary020 for sm, and interactivePrimary030 for md breakpoints', () => {
    const fragment = renderToFragmentWithTheme(
      OverridableTestSurface,
      {
        stylePresetToUse: {
          xs: 'interactivePrimary010',
          sm: 'interactivePrimary020',
          md: 'interactivePrimary030',
        },
      },
      createTheme({
        name: 'test-style-preset',
        overrides: {
          stylePresets: {
            interactivePrimary010: {
              base: {
                backgroundColor: 'red',
              },
              disabled: {
                color: 'red',
              },
            },
            interactivePrimary020: {
              base: {
                backgroundColor: 'blue',
              },
            },
            interactivePrimary030: {
              base: {
                backgroundColor: 'green',
              },
            },
          },
        },
      }),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('with interactivePrimary010 for xs, interactivePrimary020 for sm, and incorrect for md breakpoints', () => {
    const fragment = renderToFragmentWithTheme(
      OverridableTestSurface,
      {
        stylePresetToUse: {
          xs: 'interactivePrimary010',
          sm: 'interactivePrimary020',
          md: 'incorrect',
        },
      },
      createTheme({
        name: 'test-style-preset',
        overrides: {
          stylePresets: {
            interactivePrimary010: {
              base: {
                backgroundColor: 'red',
              },
              disabled: {
                color: 'red',
              },
            },
            interactivePrimary020: {
              base: {
                backgroundColor: 'blue',
              },
            },
          },
        },
      }),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('with interactivePrimary010 for xs, interactivePrimary020 for sm, interactivePrimary030 for md, and interactivePrimary040 for lg breakpoints', () => {
    const fragment = renderToFragmentWithTheme(
      OverridableTestSurface,
      {
        stylePresetToUse: {
          xs: 'interactivePrimary010',
          sm: 'interactivePrimary020',
          md: 'interactivePrimary030',
          lg: 'interactivePrimary040',
        },
      },
      createTheme({
        name: 'test-style-preset',
        overrides: {
          stylePresets: {
            interactivePrimary010: {
              base: {
                backgroundColor: 'red',
              },
            },
            interactivePrimary020: {
              base: {
                backgroundColor: 'blue',
              },
            },
            interactivePrimary030: {
              base: {
                backgroundColor: 'green',
              },
            },
            interactivePrimary040: {
              base: {
                backgroundColor: '#FF00FF',
              },
            },
          },
        },
      }),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('with interactivePrimary010 for xs, interactivePrimary020 for sm, interactivePrimary030 for md, interactivePrimary040 for lg breakpoints and ignore wrong prop', () => {
    const fragment = renderToFragmentWithTheme(
      OverridableTestSurface,
      {
        stylePresetToUse: {
          xs: 'interactivePrimary010',
          sm: 'interactivePrimary020',
          md: 'interactivePrimary030',
          lg: 'interactivePrimary040',
          wrong: 'interactivePrimary050',
        } as any,
      },
      createTheme({
        name: 'test-style-preset',
        overrides: {
          stylePresets: {
            interactivePrimary010: {
              base: {
                backgroundColor: 'red',
              },
            },
            interactivePrimary020: {
              base: {
                backgroundColor: 'blue',
              },
            },
            interactivePrimary030: {
              base: {
                backgroundColor: 'green',
              },
            },
            interactivePrimary040: {
              base: {
                backgroundColor: '#FF00FF',
              },
            },
            interactivePrimary050: {
              base: {
                backgroundColor: 'white',
              },
            },
          },
        },
      }),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('with no existing style preset key returns empty fragment', () => {
    const fragment = renderToFragmentWithTheme(
      OverridableTestSurfaceWithNoDefault,
      {
        stylePresetToUse: 'NotExistingStylePreset',
      },
      createTheme({
        name: 'test-style-preset',
        overrides: {
          stylePresets: {
            interactives020: {
              base: {
                backgroundColor: '#FF00FF',
              },
            },
          },
        },
      }),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('with no existing style preset state returns empty fragment', () => {
    const fragment = renderToFragmentWithTheme(
      OverridableTestSurfaceWithNoDefault,
      {
        stylePresetToUse: 'testPreset',
        isLoading: true,
      },
      createTheme({
        name: 'test-style-preset',
        overrides: {
          stylePresets: {
            testPreset: {
              base: undefined,
            },
          },
        },
      }),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('with stateOverwrites without base state fallbacks to empty object for base and returns empty fragment', () => {
    const fragment = renderToFragmentWithTheme(
      OverridableTestSurfaceWithNoDefault,
      {
        stylePresetToUse: 'testPreset',
        isDisabled: true,
      },
      createTheme({
        name: 'test-style-preset',
        overrides: {
          stylePresets: {
            testPreset: {
              base: undefined,
              disabled: {
                backgroundColor: '#FFFF00',
              },
            },
          },
        },
      }),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('with loading and selected state', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        isSelected: true,
        isLoading: true,
      },
      createTheme({
        name: 'test-style-preset',
        overrides: {
          stylePresets: {
            iconButtonMinimalPrimary: {
              ...iconButtonMinimalPrimary,
              selected: {
                backgroundColor: '#00ff00',
              },
              loading: {
                backgroundColor: '#ffff00',
              },
            },
          },
        },
      }),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('with disabled and loading state', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        isDisabled: true,
        isLoading: true,
      },
      createTheme({
        name: 'test-style-preset',
        overrides: {
          stylePresets: {
            iconButtonMinimalPrimary: {
              base: {
                color: '#C0C0C0',
              },
              loading: {
                backgroundColor: '#00ff00',
              },
              disabled: {
                backgroundColor: '#FF0000',
              },
            },
          },
        },
      }),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('with visited, visited:focus & visited:hover state', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurfaceLink,
      {},
      createTheme({
        name: 'test-style-preset',
        overrides: {
          stylePresets: {
            linkInline: deepMerge({}, linkInline, {
              visited: {
                color: '#00ff00',
              },
              'visited:hover': {
                color: '#FF0000',
              },
              'visited:focus': {
                color: '#0000FF',
              },
            }),
          },
        },
      }),
    );
    expect(fragment).toMatchSnapshot();
  });

  [
    ['disabled', 'isDisabled'],
    ['selected', 'isSelected'],
    ['checked', 'isChecked'],
    ['loading', 'isLoading'],
    ['focus', 'isFocused'],
    ['valid', 'isValid'],
    ['invalid', 'isInvalid'],
    ['hover', 'isHovered'],
    ['active', 'isActive'],
  ].forEach(([state, prop]) => {
    test(`renders with ${state} state when prop ${prop} is passed`, () => {
      const fragment = renderToFragmentWithTheme(
        TestSurfaceCheckbox,
        {
          [prop]: true,
        },
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              checkboxInput: deepMerge({}, checkboxInput, {
                [state]: {
                  backgroundColor: '#FF0000',
                },
              }),
            },
          },
        }),
      );
      expect(fragment).toMatchSnapshot();
    });
  });

  [
    ['selected', 'selected:hover', 'isSelected'],
    ['selected', 'selected:focus', 'isSelected'],
    ['checked', 'checked:hover', 'isChecked'],
    ['checked', 'checked:focus', 'isChecked'],
    ['valid', 'valid:hover', 'isValid'],
    ['valid', 'valid:focus', 'isValid'],
    ['invalid', 'invalid:hover', 'isInvalid'],
    ['invalid', 'invalid:focus', 'isInvalid'],
  ].forEach(([state, pseudoState, prop]) => {
    test(`with ${pseudoState} pseudoState`, () => {
      const fragment = renderToFragmentWithTheme(
        TestSurfaceCheckbox,
        {
          [prop]: true,
        },
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              checkboxInput: deepMerge({}, checkboxInput, {
                [state]: {
                  backgroundColor: '#00FF00',
                },
                [pseudoState]: {
                  backgroundColor: '#FF0000',
                },
              }),
            },
          },
        }),
      );
      expect(fragment).toMatchSnapshot();
    });
  });

  [
    ['selected:disabled', 'isDisabled'],
    ['selected:focus', 'isFocused'],
    ['selected:valid', 'isValid'],
    ['selected:invalid', 'isInvalid'],
    ['selected:valid:hover', 'isValid'],
    ['selected:invalid:hover', 'isInvalid'],
  ].forEach(([pseudoState, prop]) => {
    test(`renders with ${pseudoState} pseudo state when both isSelected and ${prop} are passed`, () => {
      const fragment = renderToFragmentWithTheme(
        TestSurfaceCheckbox,
        {
          isSelected: true,
          [prop]: true,
        },
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              checkboxInput: deepMerge({}, checkboxInput, {
                [pseudoState]: {
                  backgroundColor: '#FF0000',
                },
              }),
            },
          },
        }),
      );
      expect(fragment).toMatchSnapshot();
    });
  });
  [
    ['checked:disabled', 'isDisabled'],
    ['checked:focus', 'isFocused'],
    ['checked:valid', 'isValid'],
    ['checked:invalid', 'isInvalid'],
    ['checked:valid:hover', 'isValid'],
    ['checked:invalid:hover', 'isInvalid'],
  ].forEach(([pseudoState, prop]) => {
    test(`renders with ${pseudoState} pseudo state when both isChecked and ${prop} are passed`, () => {
      const fragment = renderToFragmentWithTheme(
        TestSurfaceCheckbox,
        {
          isChecked: true,
          [prop]: true,
        },
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              checkboxInput: deepMerge({}, checkboxInput, {
                [pseudoState]: {
                  backgroundColor: '#FF0000',
                },
              }),
            },
          },
        }),
      );
      expect(fragment).toMatchSnapshot();
    });
  });

  [
    ['selected:valid:focus', 'isValid'],
    ['selected:invalid:focus', 'isInvalid'],
  ].forEach(([pseudoState, prop]) => {
    test(`renders with ${pseudoState} state when isSelected, isFocused and ${prop} are passed`, () => {
      const fragment = renderToFragmentWithTheme(
        TestSurfaceCheckbox,
        {
          isSelected: true,
          isFocused: true,
          [prop]: true,
        },
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              checkboxInput: deepMerge({}, checkboxInput, {
                [pseudoState]: {
                  backgroundColor: '#FF0000',
                },
              }),
            },
          },
        }),
      );
      expect(fragment).toMatchSnapshot();
    });
  });

  [
    ['checked:valid:focus', 'isValid'],
    ['checked:invalid:focus', 'isInvalid'],
  ].forEach(([pseudoState, prop]) => {
    test(`renders with ${pseudoState} state when isChecked, isFocused and ${prop} are passed`, () => {
      const fragment = renderToFragmentWithTheme(
        TestSurfaceCheckbox,
        {
          isChecked: true,
          isFocused: true,
          [prop]: true,
        },
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              checkboxInput: deepMerge({}, checkboxInput, {
                [pseudoState]: {
                  backgroundColor: '#FF0000',
                },
              }),
            },
          },
        }),
      );
      expect(fragment).toMatchSnapshot();
    });
  });

  test(`renders with focus-visible state when isFocusedVisible is true`, () => {
    const fragment = renderToFragmentWithTheme(
      TestSurfaceCheckbox,
      {
        isFocusedVisible: true,
      },
      createTheme({
        name: 'test-style-preset',
        overrides: {
          stylePresets: {
            checkboxInput: deepMerge({}, checkboxInput, {
              'focus-visible': {
                safariOutlineOffset: '5px',
              },
            }),
          },
        },
      }),
    );
    expect(fragment).toMatchSnapshot();
  });

  test(`renders with checked:focus-visible state when isFocusedVisible and isChecked are true`, () => {
    const fragment = renderToFragmentWithTheme(
      TestSurfaceCheckbox,
      {
        isChecked: true,
        isFocusedVisible: true,
      },
      createTheme({
        name: 'test-style-preset',
        overrides: {
          stylePresets: {
            checkboxInput: deepMerge({}, checkboxInput, {
              'checked:focus-visible': {
                safariOutlineOffset: '5px',
              },
            }),
          },
        },
      }),
    );
    expect(fragment).toMatchSnapshot();
  });

  [
    ['checked:invalid:focus-visible', 'isInvalid'],
    ['checked:valid:focus-visible', 'isValid'],
    ['checked:focus-visible:hover', 'isHovered'],
  ].forEach(([pseudoState, prop]) => {
    test(`renders with ${pseudoState} state when isChecked, isFocused and ${prop} are passed`, () => {
      const fragment = renderToFragmentWithTheme(
        TestSurfaceCheckbox,
        {
          isChecked: true,
          isFocusedVisible: true,
          [prop]: true,
        },
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              checkboxInput: deepMerge({}, checkboxInput, {
                [pseudoState]: {
                  safariOutlineOffset: '5px',
                },
              }),
            },
          },
        }),
      );
      expect(fragment).toMatchSnapshot();
    });
  });

  [
    ['invalid:focus-visible', 'isInvalid'],
    ['valid:focus-visible', 'isValid'],
  ].forEach(([pseudoState, prop]) => {
    test(`renders with ${pseudoState} state when isChecked, isFocused and ${prop} are passed`, () => {
      const fragment = renderToFragmentWithTheme(
        TestSurfaceCheckbox,
        {
          isFocusedVisible: true,
          [prop]: true,
        },
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              checkboxInput: deepMerge({}, checkboxInput, {
                [pseudoState]: {
                  safariOutlineOffset: '5px',
                },
              }),
            },
          },
        }),
      );
      expect(fragment).toMatchSnapshot();
    });
  });

  test('with isSvg ', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        isSvg: true,
      },
      createTheme({
        name: 'test-style-preset',
        overrides: {
          stylePresets: {
            iconButtonMinimalPrimary: {
              ...iconButtonMinimalPrimary,
              base: {
                iconColor: '#00ff00',
              },
              hover: {
                iconColor: '#FF0000',
              },
            },
          },
        },
      }),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('without background-color styles', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        omitStyles: ['backgroundColor'],
      },
      themeIconButtonMinimalPrimary,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('without disabled state styles', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        omitStates: ['disabled'],
      },
      themeIconButtonMinimalPrimary,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('with nestedCssSelector adds the nested element class to all state selectors', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        nestedCssSelector: '.nested-element-class',
      },
      themeIconButtonMinimalPrimary,
    );
    expect(fragment).toMatchSnapshot();
  });
});

describe('getPresetStyles', () => {
  test('to return the same styles and empty borderRadius when no options param provided', () => {
    const result = getPresetStyles({backgroundColor: 'red'});
    expect(result).toEqual({backgroundColor: 'red'});
  });

  test('to return backgroundColor when filtering by it', () => {
    const result = getPresetStyles(
      {backgroundColor: 'red', color: 'blue', iconColor: 'green'},
      {filterStyles: ['backgroundColor']},
    );
    expect(result).toEqual({backgroundColor: 'red'});
  });
});

describe('getSingleStylePreset', () => {
  test('return empty when stylePreset does not exist', () => {
    const result = getSingleStylePreset(
      compileTheme(themeIconButtonMinimalPrimary),
      'base',
      'placeholderColor',
      'nonExistinOne',
    );
    expect(result).toEqual('');
  });
  test('return correct state from stylePreset', () => {
    const result = getSingleStylePreset(
      compileTheme(themeIconButtonMinimalPrimary),
      'hover',
      'backgroundColor',
      'iconButtonMinimalPrimary',
    );
    expect(result).toEqual('#ECF1FF');
  });
});
