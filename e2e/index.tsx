/* eslint-env browser */
import * as React from 'react';
import ReactDOM from 'react-dom';
import tests from './tests';
import {newskitLightTheme, compileTheme, NewsKitProvider} from '../src';

const app = (
  <NewsKitProvider theme={compileTheme(newskitLightTheme)}>
    {tests()}
  </NewsKitProvider>
);

ReactDOM.render(app, document.getElementById('root'));
