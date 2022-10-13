import * as React from 'react';
import {createRoot} from 'react-dom/client';
import tests from './tests';
import {
  newskitLightTheme,
  newskitDarkTheme,
  compileTheme,
  NewsKitProvider,
  styled,
  getColorCssFromTheme,
} from '../src';

const container = document.getElementById('root');
const root = createRoot(container!);
const urlSearchParams = new URLSearchParams(window.location.search);
const themeParam = urlSearchParams.get('theme');

const theme = compileTheme(
  themeParam === 'dark' ? newskitDarkTheme : newskitLightTheme,
);

const TestsContainer = styled.div`
  ${getColorCssFromTheme('backgroundColor', theme.colors.interfaceBackground)}
`;

const app = (
  <NewsKitProvider theme={theme}>
    <TestsContainer>{tests(themeParam)}</TestsContainer>
  </NewsKitProvider>
);

root.render(app);
