import React from 'react';
import {render} from '@testing-library/react';
import {ThemeProvider} from '../emotion';
import {themeDiff} from '../css-variables';
import {newskitLightTheme} from '../newskit-light';
import {createTheme} from '../creator';

describe('ThemeProvider', () => {
  it('renders as default', () => {
    const {asFragment} = render(
      <ThemeProvider theme={newskitLightTheme}>app</ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('theme as function', () => {
    const themeMock = jest.fn(x => ({x}));

    // @ts-ignore
    render(<ThemeProvider theme={themeMock}>app</ThemeProvider>);
    expect(themeMock).toHaveBeenCalled();
  });

  it('renders as css variables', () => {
    const {asFragment} = render(
      <ThemeProvider theme={newskitLightTheme} exposeCssVariables>
        app
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders as css variables in nested providers', () => {
    const childrenTheme = createTheme({
      name: 'children-theme',
      overrides: {
        borders: {
          borderWidth010: '20px',
        },
        fonts: {
          fontFamily010: {
            fontFamily: 'Roboto',
          },
        },
        colors: {
          blue010: '#00a',
        },
      },
    });

    const {asFragment} = render(
      <ThemeProvider theme={newskitLightTheme} exposeCssVariables>
        1st level
        <ThemeProvider theme={childrenTheme} exposeCssVariables>
          2nd level
        </ThemeProvider>
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('themeDiff -> different token', () => {
    const parentTheme = {
      colors: {
        ink: 'ink',
        inkBase: 'inkBase',
      },
      sizing: {
        sizing010: '10px',
        sizing020: '20px',
      },
      borders: {
        borderWidth010: '1px',
      },
    };

    const childTheme = {
      colors: {
        ink: 'black',
      },
      borders: {
        borderWidth010: '2px',
      },
    };

    expect(themeDiff(parentTheme, childTheme)).toEqual({
      colors: {
        ink: 'black',
      },
      borders: {
        borderWidth010: '2px',
      },
    });
  });

  it('themeDiff -> new token', () => {
    const parentTheme = {
      colors: {
        ink: 'ink',
        inkBase: 'inkBase',
      },
      sizing: {
        sizing010: '10px',
        sizing020: '20px',
      },
    };

    const childTheme = {
      colors: {
        interfaceBrand: 'green',
      },
      borders: {
        borderWidth010: '1px',
      },
    };

    expect(themeDiff(parentTheme, childTheme)).toEqual({
      colors: {
        interfaceBrand: 'green',
      },
      borders: {
        borderWidth010: '1px',
      },
    });
  });

  it('themeDiff -> no parent theme', () => {
    const parentTheme = {};

    const childTheme = {
      colors: {
        interfaceBrand: 'green',
      },
      borders: {
        borderWidth010: '1px',
      },
    };

    // @ts-ignore
    expect(themeDiff(parentTheme, childTheme)).toEqual(childTheme);
  });
});
