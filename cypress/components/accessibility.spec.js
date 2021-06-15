const a11yComponentRules = [
  {name: 'byline'},
  {name: 'headline'},
  {name: 'audio-player'},
  // color-contrast rule is being disabled for the banner
  // because of an error with the notice variant of the banner.
  // Design team are looking for possible fix. After the color
  // is changed, the rule can be enabled again.
  {name: 'banner', disabledRules: ['color-contrast']},
  {name: 'block'},
  // Color contrast rule is being disabled for button, tab and text-input as when a button component
  // is in disabled the span contained inside the button fails the rule. This might need a fix. As it is stopping us from testing color.
  // contrast of few components.
  {name: 'button', disabledRules: ['color-contrast']},
  {name: 'date-time'},
  {name: 'divider'},
  {name: 'icons'},
  {name: 'image'},
  {name: 'ordered-list'},
  {name: 'scroll'},
  {name: 'share-bar'},
  {name: 'slider'},
  {name: 'standfirst'},
  {name: 'tab', disabledRules: ['color-contrast']},
  {name: 'text-block'},
  {name: 'text-input', disabledRules: ['color-contrast']},
  {name: 'volume-control'},
  {name: 'tag'},
  {name: 'flag'},
  {name: 'typography/heading'},
  {name: 'typography/paragraph'},
  {name: 'unordered-list'},
];

a11yComponentRules.forEach(component => {
  describe(`${component.name} component`, () => {
    it('should pass basic a11y test', () => {
      cy.visit(`?name=${component.name}`);
      cy.injectAxe();

      if (component.disabledRules === undefined) {
        cy.checkA11yWithDefaultRules();
      } else {
        cy.checkA11yWithCustomRule(component.disabledRules);
      }
    });
  });
});
