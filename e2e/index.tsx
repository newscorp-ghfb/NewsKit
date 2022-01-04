/* eslint-env browser */
import * as React from 'react';
import ReactDOM from 'react-dom';
import tests from './tests';
import {newskitLightTheme, ThemeProvider} from '../src/themes';

const app = (
  <ThemeProvider theme={newskitLightTheme as {}}>{tests()}</ThemeProvider>
);

ReactDOM.render(app, document.getElementById('root'));
