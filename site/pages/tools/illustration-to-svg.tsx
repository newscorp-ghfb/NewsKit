/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable global-require */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {ThemeProvider} from 'newskit';
import Layout, {LayoutProps} from '../../components/layout';
import {pathToID} from '../../components/illustrations/utils';
import {docsThemeLight} from '../../theme/doc-theme';

const RUN = true;

if (!process.browser && RUN) {
  // @ts-ignore
  const getComponent = imprt => {
    if (imprt.default) return imprt.default;

    const exports = Object.values(imprt);
    return exports[0];
  };

  (async () => {
    const g = await import('globby');
    const fs = require('fs');
    const path = require('path');

    const processDir = process.cwd();

    const ignoreList = [
      'circle',
      'ellipse',
      'illustration-loader',
      'path',
      'rect',
      'svg',
    ];

    const paths = await g.globby(
      path.join(processDir, 'site/components/illustrations/**/*.tsx'),
      // __dirname + '../../components/illustrations/**/*.tsx',
      {},
    );

    const imprtPaths = paths

      .slice(0, 1500)
      .map((path: string) =>
        path
          .replace(`${processDir}/site/components/illustrations/`, '')
          .replace('.tsx', ''),
      )
      .filter((path: string) => !ignoreList.includes(path));

    const components = imprtPaths.map(
      path => import(`../../components/illustrations/${path}`),
    );

    const importedComponents = await Promise.all(components);
    const svgComponents = importedComponents.map((imprt, indx) => {
      const Component = getComponent(imprt);

      if (!Component) {
        console.log(`no default for:${imprtPaths[indx]}`);
      }

      const id = pathToID(imprtPaths[indx]);
      // render to string
      const svg = ReactDOMServer.renderToStaticMarkup(
        <ThemeProvider theme={docsThemeLight}>
          <Component />
        </ThemeProvider>,
      );

      // add id and style
      const styledSVG = svg.replace(
        '<svg ',
        `<svg id="${id}" style="width: 100%; height: 100%" `,
      );

      return styledSVG;
    });

    function ensureDirectoryExistence(filePath: string) {
      const dirname = path.dirname(filePath);
      if (fs.existsSync(dirname)) {
        return true;
      }
      ensureDirectoryExistence(dirname);
      fs.mkdirSync(dirname);
    }

    let maskCounter = 0;
    const listOfPaths: string[] = [];

    svgComponents.forEach((svgContent, indx) => {
      const filePath = `${imprtPaths[indx]}.svg`;
      const fullPath = `${processDir}/site/public/static/illustrations/${filePath}`;
      ensureDirectoryExistence(fullPath);

      const hasMask = svgContent.includes('<mask');
      if (hasMask) {
        console.log(filePath, ' includes mask ');
        maskCounter++;
        listOfPaths.push(imprtPaths[indx]);
      }
      fs.writeFileSync(fullPath, svgContent, {flag: 'w'});
    });

    console.log('Total files with mask', maskCounter);
    // console.log(listOfPaths);
    // fs.writeFileSync('./list.txt', listOfPaths.join('\n'), {flag: 'w'});
  })();
}

const PreviewIllustrationExport = (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage hideSidebar>
    <div>its ok</div>
  </Layout>
);

export default PreviewIllustrationExport;
