import fse from 'fs-extra';

import {routes as siteRoutes} from '../site/routes';

interface Route {
  id: string;
  subNav?: Array<Route>;
}

const flattenRoutes = (routes: Route[]): Array<String> =>
  routes
    .map(r =>
      r.subNav ? ([r.id, ...flattenRoutes(r.subNav)] as Array<String>) : [r.id],
    )
    .flat();

const fileForRoute = (route: String) => {
  const relativeImportDepth = route.split('').filter(f => f === '/').length;
  const importPath = `${'../'.repeat(relativeImportDepth)}accessibility.common`;
  return `// / <reference types="Cypress" />
import {runA11yTestForRoute} from '${importPath}';

runA11yTestForRoute('${route}');
`;
};

const path = 'cypress/site/functional/a11y';
const fileNameForRoute = (route: String) => `${path}${route}.cy.js`;

(async () => {
  const flatRoutes = flattenRoutes(siteRoutes);
  await fse.emptyDirSync(path);
  // Special case as not included in routes object
  await fse.outputFile(fileNameForRoute('/home'), fileForRoute('/'));

  flatRoutes.forEach(async fr => {
    await fse.outputFile(fileNameForRoute(fr), fileForRoute(fr));
  });
})();
