const checkViewport = viewport => {
  if (viewport.includes('Landscape')) {
    cy.viewport(viewport, 'landscape');
  } else {
    cy.viewport(viewport);
  }
};

Cypress.Commands.add('visitViewport', (viewport, url) => {
  checkViewport(viewport);
  cy.visit(url);
});

Cypress.Commands.add('checkA11yWithDefaultRules', () => {
  cy.checkA11y({
    rules: {
      'page-has-heading-one': {enabled: false},
    },
  });
});

Cypress.Commands.add('checkA11yWithCustomRule', customRule => {
  cy.checkA11y({
    rules: {
      'page-has-heading-one': {enabled: false},
      [customRule]: {enabled: false},
    },
  });
});
