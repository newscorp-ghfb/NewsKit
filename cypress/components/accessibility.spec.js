const a11yComponentRules = [
  {name: 'audio-player'},
  // color-contrast rule is being disabled for the banner
  // because of an error with the notice variant of the banner.
  // Design team are looking for possible fix. After the color
  // is changed, the rule can be enabled again.
  {name: 'banner', disabledRules: ['color-contrast']},
  {name: 'block'},
  // Color contrast rule is being disabled for button, tab and text-input as when a button component
  // is in disabled the span contained inside the button fails the rule.
  // This might need a fix as it is stopping us from testing color.
  // contrast of few components.
  {name: 'button', disabledRules: ['color-contrast']},
  {name: 'byline'},
  // {name: 'caption'},
  // {name: 'card'},
  {name: 'date-time'},
  {name: 'divider'},
  // {name: 'drawer'},
  // {name: 'email-input'},
  {name: 'flag'},
  // {name: 'form'},
  // {name: 'grid'},
  {name: 'headline'},
  {name: 'icon-button'},
  {name: 'icons'},
  {name: 'image'},
  // {name: 'inline-message'},
  //  {name: 'link'},
  // Disabled links are not required to meet the color contrast rules
  {name: 'menu', disabledRules: ['color-contrast']},
  {name: 'ordered-list'},
  // {name: 'overlay'},
  // {name: 'screen-reader-only'},
  {name: 'scroll'},
  {name: 'share-bar'},
  {name: 'slider'},
  // {name: 'stack'},
  // {name: 'stack-child'},
  {name: 'standfirst'},
  // {name: 'structured-list'},
  {name: 'tab', disabledRules: ['color-contrast']},
  // {name: 'tabs'},
  {name: 'tag'},
  {name: 'text-block'},
  {name: 'text-input', disabledRules: ['color-contrast']},
  // {name: 'title-bar'},
  // {name: 'toast'},
  {name: 'typography/heading'},
  {name: 'typography/paragraph'},
  {name: 'unordered-list'},
  {name: 'volume-control'},
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
