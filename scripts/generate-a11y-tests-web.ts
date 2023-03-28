import { routes } from './../site/routes';
import fse from 'fs-extra';
import fs from 'node:fs';

const path = "cypress/site/functional/a11y/";

interface route {
    id: string;
    subNav?: Array<route>;
}

const flattenRoutes = (routes: route[]): Array<String> => routes
    .map(r => r.subNav ? [r.id, ...flattenRoutes(r.subNav)] as Array<String> : [r.id])
    .flat();

const flatRoutes = flattenRoutes(routes);

fse.emptyDirSync(path, { recursive: true });

const fileForRoute = (route: String) =>
    `// / <reference types="Cypress" />
import {runA11yTestForRoute} from './../accessibility.common';

runA11yTestForRoute('${route}');
`;

const fileNameForRoute = (route: String) => `${path}${route}.cy.js`;

flatRoutes.forEach(async fr => {
    await fs.writeFile(fileNameForRoute(fr), fileForRoute(fr), (err) => {
        if (err) throw 'failed to write file';
    });
});


console.log(flattenRoutes(routes).length);
console.log(flattenRoutes(routes).join(','));

