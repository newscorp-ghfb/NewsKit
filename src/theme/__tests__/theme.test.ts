import fs from 'fs';
import {compileTheme} from '../compiler';
import {newskitLightTheme} from '../newskit-light';
import {newskitDarkTheme, newskitDarkThemeOverrides} from '../newskit-dark';
import {createTheme} from '../creator';
import {StylePreset} from '../presets/types';
import {requireContext} from '../../test/require-context';

describe('NewsKit Light theme', () => {
  it('should compile without errors', () => {
    const errorLogger = jest.fn();

    compileTheme(newskitLightTheme, {errorLogger});

    expect(errorLogger).not.toHaveBeenCalled();
  });

  it('combine all component defaults', () => {
    const defaultsFiles = requireContext('../../src/', true, /\/defaults.ts$/);
    const files = defaultsFiles.map(fileData => fileData.default);
    const combineTheme = files.reduce(
      (
        combinedTheme: Record<string, StylePreset>,
        componentTheme: Record<string, StylePreset>,
      ) => ({...combinedTheme, ...componentTheme}),
      {},
    );

    // fs.writeFileSync('./src/theme/defaults.json', JSON.stringify(combineTheme));

    expect(combineTheme).toMatchSnapshot();
  });

  it('combine all style presets', () => {
    const stylePresetsFiles = requireContext(
      '../../src/',
      true,
      /\/style-presets.ts$/,
    );
    const files = stylePresetsFiles
      .filter(
        fileData =>
          // filter out style-preset files without default or 'stylePresets' export
          ('default' in fileData && typeof fileData.default === 'object') ||
          ('stylePresets' in fileData &&
            typeof fileData.stylePresets === 'object'),
      )
      .map(fileData => fileData?.default || fileData?.stylePresets);

    const combineTheme = files.reduce(
      (
        combinedTheme: Record<string, StylePreset>,
        componentTheme: Record<string, StylePreset>,
      ) => {
        const combinedThemeStylePresetsNames = Object.keys(combinedTheme);
        const componentThemeStylePresetsNames = Object.keys(componentTheme);

        // check if a style preset is already defined in another file
        componentThemeStylePresetsNames.forEach(stylePresetName => {
          if (combinedThemeStylePresetsNames.includes(stylePresetName)) {
            throw new Error(
              `StylePreset ${stylePresetName} is already defined in another file`,
            );
          }
        });
        return {...combinedTheme, ...componentTheme};
      },
      {},
    );

    // fs.writeFileSync(
    //   './src/theme/all-style-presets.json',
    //   JSON.stringify(combineTheme),
    // );
    expect(combineTheme).toMatchSnapshot();
  });
});

describe('NewsKit Dark theme', () => {
  it('should match expected snapshot', () => {
    expect(newskitDarkTheme).toMatchSnapshot();
  });

  it('should not override uneccessarily', () => {
    const warningLogger = jest.fn();

    createTheme({
      overrides: newskitDarkThemeOverrides,
      checkOverrides: true,
      warningLogger,
    });

    expect(warningLogger).not.toHaveBeenCalled();
  });

  it('should compile without errors', () => {
    const errorLogger = jest.fn();

    compileTheme(newskitDarkTheme, {errorLogger});

    expect(errorLogger).not.toHaveBeenCalled();
  });
});
