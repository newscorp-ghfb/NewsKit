const a11yComponentRules = [
  {name: 'byline'},
  {name: 'headline'},
  {name: 'audio-player'},
  // TODO: we should revisit the below disabled rule once the color restructure work is done
  {name: 'radio-player', disabledRules: ['color-contrast']},
  {name: 'tracked-radio-player'},
  {name: 'block'},
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
