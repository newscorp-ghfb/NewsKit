const pages = [
  '/',
  '/about/why-use-newskit',
  '/theme/foundation/borders',
  '/components/button',
  '/components/modal',
];

describe('social tags', () => {
  pages.forEach(path => {
    it(`should contain open graph tags for ${Cypress.config(
      'baseUrl',
    )}${path}`, () => {
      const ogTags = [
        'og:title',
        'og:type', 
        'og:url',
        'og:description',
        'og:image',
        'og:image:height',
        'og:image:width',
      ];
      
      cy.mockConsentAndVisit(path);
      
      // Wait for React 19 hydration to complete
      // NextSeo renders meta tags after hydration
      cy.get('body').should('be.visible');
      
      // Wait specifically for NextSeo to render at least one OG tag
      // React 19 can have different timing for client-side meta tag injection
      cy.get('head', { timeout: 15000 }).within(() => {
        cy.get('meta[property="og:title"]').should('exist');
      });
      
      // Verify all required Open Graph meta tags exist with content
      ogTags.forEach(property => {
        cy.get('head')
          .find(`meta[property="${property}"]`)
          .should('exist')
          .and('have.attr', 'content')
          .and('not.be.empty');
      });
      
      // Additional verification for specific content patterns
      cy.get('meta[property="og:title"]')
        .invoke('attr', 'content')
        .should('include', 'NewsKit');
        
      cy.get('meta[property="og:type"]')
        .should('have.attr', 'content', 'website');
        
      cy.get('meta[property="og:image"]')
        .invoke('attr', 'content')
        .should('match', /\.(png|jpg|jpeg)$/);
    });
  });
});
