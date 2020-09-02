const a11yComponentRules = [
  {name: 'byline', disabledRules: ['color-contrast']},
  {name: 'headline', disabledRules: ['heading-order']},
  {name: 'audio-player', disabledRules: ['color-contrast', 'landmark-unique']},
  {name: 'radio-player', disabledRules: ['color-contrast', 'landmark-unique']},
  {
    name: 'tracked-radio-player',
    disabledRules: ['color-contrast'],
  },
  {name: 'block'},
  {name: 'button', disabledRules: ['color-contrast']},
  {name: 'date-time', disabledRules: ['color-contrast']},
  {name: 'divider'},
  {name: 'icons'},
  {name: 'image'},
  {name: 'ordered-list'},
  {name: 'scroll', disabledRules: ['color-contrast']},
  {name: 'share-bar'},
  {name: 'slider', disabledRules: ['color-contrast']},
  {name: 'standfirst'},
  {name: 'tab', disabledRules: ['color-contrast']},
  {name: 'text-block'},
  {name: 'volume-control'},
  {name: 'tag', disabledRules: ['color-contrast']},
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
