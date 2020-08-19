/* eslint-env browser */
import * as React from 'react';
import ReactDOM from 'react-dom';
import tests from './tests';
import {newskitLightTheme, ThemeProvider, compileTheme} from '../src/theme';

const app = (
  <ThemeProvider theme={compileTheme(newskitLightTheme)}>
    {tests()}
  </ThemeProvider>
);

ReactDOM.render(app, document.getElementById('root'));
