Cypress.Commands.add('mockConsentAndVisit', url => {
  cy.setCookie('nukt_sp_consent', 'JABCDEFGHI');
  cy.setCookie('consentUUID', '421e3aef-4f3c-4d41-a425-fb9b5f745896_12');
  cy.setCookie('_sp_sampled_user', JSON.stringify(false));
  cy.wrap([
    '_sp_local_state',
    '_sp_user_consent_5623',
    '_sp_non_keyed_local_state',
  ]).each(key => {
    cy.fixture(`consent/local-storage/${key}.json`).then(value => {
      localStorage.setItem(key, JSON.stringify(value));
    });
  });
  cy.intercept('https://cdn.privacy-mgmt.com/wrapper/v2/meta-data*', {
    fixture: 'consent/stubs/meta.json',
  }).as('consentMeta');
  cy.intercept('https://cdn.privacy-mgmt.com/mms/v2/get_site_data*', {
    fixture: 'consent/stubs/site-data.json',
  }).as('consentSiteData');
  cy.intercept('https://cdn.privacy-mgmt.com/wrapper/v2/pv-data*', {
    fixture: 'consent/stubs/pv-data.json',
  }).as('consentSiteData');
  cy.visit(url);
});

const globalRulesConfig = {
  'page-has-heading-one': {enabled: false},
  // we don't need this rule when testing components, its disabled because our Layer component is attached to body and need a region
  'landmark-one-main': {enabled: false},
};

Cypress.Commands.add('checkA11yWithDefaultRules', () => {
  cy.checkA11y(null, {
    rules: globalRulesConfig,
  });
});

Cypress.Commands.add('checkA11yWithCustomRule', disabledRules => {
  cy.checkA11y(null, {
    rules: disabledRules.reduce((acc, rule) => {
      acc[rule] = {enabled: false};
      return acc;
    }, globalRulesConfig),
  });
});

Cypress.Commands.add('acceptCookieBanner', () => {
  cy.get('body').then(body => {
    if (body.find("iframe[id^='sp_message_iframe']").length > 0) {
      cy.get("iframe[id^='sp_message_iframe']").then(iframe => {
        const innerBody = iframe.contents().find('body');
        cy.wrap(innerBody)
          .find('.message-component.message-button')
          /*
            match case false can be removed once the Non TCF banner PPSC-1504 is rolled out to production
            this was added so e2e tests wouldn't break as part part of the rollout due to the copy change.
          */
          .contains('I Agree', {matchCase: false})
          .click();
      });
    }
  });
  cy.setCookieConsent();
});

Cypress.Commands.add('setCookieConsent', () => {
  cy.setCookie('euconsent-v2', 'testCookieValue');
  cy.setCookie('consentUUID', 'testCookieValue');
});

export const flatRoutes = (routes, routeKey) =>
  routes.reduce((acc, route) => {
    if (route.page) {
      acc.push(route[routeKey]);
      return acc;
    }

    if (route.subNav) {
      return acc.concat(flatRoutes(route.subNav, routeKey));
    }

    throw new Error(
      `Route object has no page or subNav property! ${JSON.stringify(route)}`,
    );
  }, []);
