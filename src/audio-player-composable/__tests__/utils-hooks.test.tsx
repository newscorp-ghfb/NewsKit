import React from 'react';
import {renderHook} from '../../test/test-utils';
import {NewsKitProvider} from '../../newskit-provider';
import {compileTheme, createTheme} from '../../theme';
import {useButtonOverrides} from '../utils';

const audioPlayerTheme = compileTheme(
  createTheme({
    overrides: {
      componentDefaults: {
        audioPlayerPlayPauseButton: {
          stylePreset: 'iconButtonSolidPrimary',
        },
      },
    },
  }),
);

const themeWrapper = ({children}: {children: React.ReactNode}) => (
  <NewsKitProvider theme={audioPlayerTheme}>{children}</NewsKitProvider>
);

describe('useButtonOverrides', () => {
  it('should merge theme defaults with prop overrides', () => {
    const {result} = renderHook(
      () =>
        useButtonOverrides(
          {overrides: {stylePreset: 'customButtonStylePreset'}},
          'audioPlayerPlayPauseButton',
        ),
      {wrapper: themeWrapper},
    );

    expect(result.current).toEqual({
      stylePreset: 'customButtonStylePreset',
    });
  });

  it('should filter out falsy override values', () => {
    const {result} = renderHook(
      () =>
        useButtonOverrides(
          {overrides: {stylePreset: '', loadingIndicator: undefined}},
          'audioPlayerPlayPauseButton',
        ),
      {wrapper: themeWrapper},
    );

    expect(result.current).toEqual({
      stylePreset: 'iconButtonSolidPrimary',
    });
  });
});
