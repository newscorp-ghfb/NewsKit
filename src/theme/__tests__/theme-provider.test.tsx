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
      <ThemeProvider theme={newskitLightTheme} exposeCSSVariables>
        app
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders as css variables in nested providers', () => {
    const childrenTheme = createTheme({
      name: 'children-theme',
      baseTheme: newskitLightTheme,
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
      <ThemeProvider theme={newskitLightTheme} exposeCSSVariables>
        1st level
        <ThemeProvider theme={childrenTheme} exposeCSSVariables>
          2nd level
        </ThemeProvider>
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it.only('themeDiff -> different token', () => {
    const parentTheme = {
      colors: {
        ink: 'ink',
        inkBase: 'inkBase',
        blue010: 'blue',
      },
      sizing: {
        sizing010: '10px',
        sizing020: '20px',
      },
      borders: {
        borderWidth010: '1px',
      },
      fonts: {
        fontFamily010: {
          fontFamily: 'Roboto',
        },
        fontFamily020: {
          fontFamily: 'Test',
        },
      },
    };

    const childTheme = {
      colors: {
        ink: 'black',
        blue010: 'blue',
      },
      borders: {
        borderWidth010: '2px',
      },
      fonts: {
        fontFamily010: {
          fontFamily: 'Ubuntu',
        },
        fontFamily020: {
          fontFamily: 'Test',
        },
      },
    };

    expect(themeDiff(parentTheme, childTheme)).toEqual({
      colors: {
        ink: 'black',
      },
      borders: {
        borderWidth010: '2px',
      },
      fonts: {
        fontFamily010: {
          fontFamily: 'Ubuntu',
        },
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

    expect(themeDiff(parentTheme, childTheme)).toEqual(childTheme);
  });
});
