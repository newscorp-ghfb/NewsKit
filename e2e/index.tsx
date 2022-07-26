import * as React from 'react';
import {createRoot} from 'react-dom/client';
import tests from './tests';
import {newskitLightTheme, compileTheme, NewsKitProvider} from '../src';

const container = document.getElementById('root');
const root = createRoot(container!);

const app = (
  <NewsKitProvider theme={compileTheme(newskitLightTheme)}>
    {tests()}
  </NewsKitProvider>
);

root.render(app);
