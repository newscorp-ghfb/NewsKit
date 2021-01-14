Cypress.Commands.add('mockConsentAndVisit', url => {
  cy.intercept('GET', '**/wrapper/tcfv2/v1/gdpr/**', 'fx:consent-request');
  cy.visit(url);
});

Cypress.Commands.add('checkA11yWithDefaultRules', () => {
  cy.checkA11y(null, {
    rules: {
      'page-has-heading-one': {enabled: false},
    },
  });
});

Cypress.Commands.add('checkA11yWithCustomRule', disabledRules => {
  cy.checkA11y(null, {
    rules: disabledRules.reduce(
      (acc, rule) => {
        acc[rule] = {enabled: false};
        return acc;
      },
      {
        'page-has-heading-one': {enabled: false},
      },
    ),
  });
});

Cypress.Commands.add('acceptCookieBanner', () => {
  cy.get('body').then(body => {
    if (body.find("iframe[id^='sp_message_iframe']").length > 0) {
      cy.get("iframe[id^='sp_message_iframe']").then(iframe => {
        const innerBody = iframe.contents().find('body');
        cy.wrap(innerBody)
          .find('.message-component.message-button')
          .contains('Yes, I agree')
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
