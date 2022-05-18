/* eslint-env browser */
import * as React from 'react';
import ReactDOM from 'react-dom';
import tests from './tests';
import {newskitLightTheme, compileTheme, NewskitProvider} from '../src';

const app = (
  <NewskitProvider theme={compileTheme(newskitLightTheme)}>
    {tests()}
  </NewskitProvider>
);

ReactDOM.render(app, document.getElementById('root'));
