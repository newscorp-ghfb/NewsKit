const a11yComponentRules = require('../config/a11y-components.json');

const runAccessibilityTests = (theme: 'light' | 'dark') => {
  const excludeList = ['use-media-query-hook', 'tab', 'grid-layout'];

  return a11yComponentRules
    .filter(component => !excludeList.includes(component.title))
    .forEach(component => {
      describe(`${component.title} component`, () => {
        it('should pass basic a11y test', () => {
          cy.visit(`?name=${component.title}&theme=${theme}`);
          cy.injectAxe();

          if (component.disabledRules === undefined) {
            cy.checkA11yWithDefaultRules();
          } else {
            cy.checkA11yWithCustomRule(component.disabledRules);
          }
        });
      });
    });
};

runAccessibilityTests('light');
runAccessibilityTests('dark');
