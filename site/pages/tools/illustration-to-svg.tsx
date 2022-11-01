/* eslint-disable global-require */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Block, P, ThemeProvider} from 'newskit';
import Layout, {LayoutProps} from '../../components/layout';
import {pathToID} from '../../components/illustrations/utils';
import {docsThemeLight} from '../../theme/doc-theme';

const RUN = true;

if (typeof window === 'undefined' && RUN) {
  // @ts-ignore
  const getComponent = imports => {
    if (imports.default) return imports.default;

    const exports = Object.values(imports);
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
      {},
    );

    const importPaths = paths
      .slice(0, 1500)
      .map((importPath: string) =>
        importPath
          .replace(`${processDir}/site/components/illustrations/`, '')
          .replace('.tsx', ''),
      )
      .filter((importPath: string) => !ignoreList.includes(importPath));

    const components = importPaths.map(
      importPath => import(`../../components/illustrations/${importPath}`),
    );

    const importedComponents = await Promise.all(components);
    const svgComponents = importedComponents.map((importedComponent, indx) => {
      const Component = getComponent(importedComponent);

      if (!Component) {
        console.log(`no default for:${importPaths[indx]}`);
      }

      const id = pathToID(importPaths[indx]);

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

    const ensureDirectoryExistence = (filePath: string) => {
      const dirname = path.dirname(filePath);
      if (fs.existsSync(dirname)) {
        return true;
      }
      ensureDirectoryExistence(dirname);
      fs.mkdirSync(dirname);
      return null;
    };

    let maskCounter = 0;
    const listOfPaths: string[] = [];

    svgComponents.forEach((svgContent, indx) => {
      const filePath = `${importPaths[indx]}.svg`;
      const fullPath = `${processDir}/site/public/static/illustrations/${filePath}`;
      ensureDirectoryExistence(fullPath);

      const hasMask = svgContent.includes('<mask');
      if (hasMask) {
        maskCounter += 1;
        listOfPaths.push(importPaths[indx]);
      }

      fs.writeFileSync(fullPath, svgContent, {flag: 'w'});
    });

    console.log('Total files with mask', maskCounter);
    console.log(listOfPaths);
    // fs.writeFileSync('./list.txt', listOfPaths.join('\n'), {flag: 'w'});
  })();
}

const PreviewIllustrationExport = (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage hideSidebar>
    <Block>
      <P>The script is {RUN ? 'enabled' : 'disabled'}.</P>
      <P>
        For more info please navigate to
        &quot;site/pages/tools/illustration-to-svg.tsx&quot;
      </P>
    </Block>
  </Layout>
);

export default PreviewIllustrationExport;
