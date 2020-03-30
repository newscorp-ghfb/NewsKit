const a11yComponentRules = [
  {name: 'article-byline'},
  {name: 'article-content'},
  {name: 'article-headline'},
  {name: 'article-standfirst'},
  {name: 'audio-player', disabledRules: ['color-contrast', 'landmark-unique']},
  {name: 'radio-player', disabledRules: ['color-contrast', 'landmark-unique']},
  {
    name: 'tracked-radio-player',
    disabledRules: ['color-contrast'],
  },
  {name: 'block'},
  {name: 'button', disabledRules: ['color-contrast']},
  {name: 'date-line'},
  {name: 'divider'},
  {name: 'icons'},
  {name: 'image'},
  {name: 'ordered-list'},
  {name: 'scroll', disabledRules: ['color-contrast']},
  {name: 'share-bar'},
  {name: 'slider', disabledRules: ['color-contrast']},
  {name: 'volume-control'},
  {name: 'tag-list', disabledRules: ['color-contrast']},
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
