import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import {ThemeProvider} from 'newskit';
import Layout, {LayoutProps} from '../../components/layout';
// import {pathToID} from '../../components/illustrations/utils';
// import {docsThemeLight} from '../../theme/doc-theme';

// const RUN = false;

// if (!process.browser && RUN) {
//   // const files = globby('**/*.tsx', {cwd: '../../components/illustrations/'});
//   // console.log({files});

//   // import Component from '../../components/illustrations/components/checkbox/hero';

//   // // render to string as ReactDOM.renderToString

//   // const html = ReactDOMServer.renderToStaticMarkup(
//   //   <ThemeProvider theme={newskitLightTheme}>
//   //     <Component />
//   //   </ThemeProvider>,
//   // );

//   // console.log(html);

//   // @ts-ignore
//   const getComponent = imprt => {
//     if (imprt.default) return imprt.default;

//     const exports = Object.values(imprt);
//     return exports[0];
//   };

//   (async () => {
//     const g = await import('globby');
//     const fs = require('fs');
//     const path = require('path');

//     const processDir = process.cwd();

//     const ignoreList = [
//       'circle',
//       'ellipse',
//       'illustration-loader',
//       'path',
//       'rect',
//       'svg',
//     ];

//     const paths = await g.globby(
//       path.join(processDir, 'site/components/illustrations/**/*.tsx'),
//       // __dirname + '../../components/illustrations/**/*.tsx',
//       {},
//     );

//     const imprtPaths = paths

//       .slice(0, 1500)
//       .map((path: string) =>
//         path
//           .replace(`${processDir}/site/components/illustrations/`, '')
//           .replace('.tsx', ''),
//       )
//       .filter((path: string) => !ignoreList.includes(path));

//     console.log({short: imprtPaths});
//     const components = imprtPaths.map(
//       path => import(`../../components/illustrations/${path}`),
//     );

//     const importedComponents = await Promise.all(components);
//     const svgComponents = importedComponents.map((imprt, indx) => {
//       const Component = getComponent(imprt);

//       if (!Component) {
//         console.log(`no default for:${imprtPaths[indx]}`);
//       }

//       const id = pathToID(imprtPaths[indx]);
//       // render to string
//       const svg = ReactDOMServer.renderToStaticMarkup(
//         <ThemeProvider theme={docsThemeLight}>
//           <Component />
//         </ThemeProvider>,
//       );

//       // add id and style
//       const styledSVG = svg.replace(
//         '<svg ',
//         `<svg id="${id}" style="width: 100%; height: 100%" `,
//       );

//       return styledSVG;
//     });

//     function ensureDirectoryExistence(filePath: string) {
//       const dirname = path.dirname(filePath);
//       if (fs.existsSync(dirname)) {
//         return true;
//       }
//       ensureDirectoryExistence(dirname);
//       fs.mkdirSync(dirname);
//     }

//     svgComponents.forEach((svgContent, indx) => {
//       const filePath = `${imprtPaths[indx]}.svg`;
//       const fullPath = `${processDir}/site/public/static/illustrations/${filePath}`;
//       console.log(fullPath);
//       ensureDirectoryExistence(fullPath);

//       fs.writeFileSync(fullPath, svgContent, {flag: 'w'});
//     });
//   })();
// }

// grap all files from folder

// read a single file
// import Component from '../components/illustrations/components/checkbox/hero';

// replace fill colors

// add reference id="name-of-file"

// save file as svg

const PreviewIllustrationExport = (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage hideSidebar>
    <div>its ok</div>
  </Layout>
);

export default PreviewIllustrationExport;
