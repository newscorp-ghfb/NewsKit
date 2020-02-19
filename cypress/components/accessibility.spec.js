const a11yComponentRules = [
  {name: 'article-byline'},
  {name: 'article-content'},
  {name: 'article-headline'},
  {name: 'article-standfirst'},
  {name: 'audio-player', a11yRule: 'color-contrast'},
  {name: 'tracked-audio-player', a11yRule: 'color-contrast'},
  {name: 'block'},
  {name: 'button', a11yRule: 'color-contrast'},
  {name: 'date-line'},
  {name: 'divider'},
  {name: 'icons'},
  {name: 'image'},
  {name: 'ordered-list'},
  {name: 'scroll', a11yRule: 'color-contrast'},
  {name: 'share-bar'},
  {name: 'slider', a11yRule: 'color-contrast'},
  {name: 'volume-control'},
  {name: 'tag-list', a11yRule: 'color-contrast'},
  {name: 'tag', a11yRule: 'color-contrast'},
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

      if (component.a11yRule === undefined) {
        cy.checkA11yWithDefaultRules();
      } else {
        cy.checkA11yWithCustomRule(component.a11yRule);
      }
    });
  });
});
