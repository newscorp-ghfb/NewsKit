import {VIEWPORTS} from '../../support/viewports';

const sizes = [VIEWPORTS.EXTRA_SMALL, VIEWPORTS.SMALL, VIEWPORTS.MEDIUM];

describe('Typography/Headings', () => {
  it('should pass basic a11y test', () => {
    cy.visit('?name=typography/heading');
    cy.injectAxe();
    cy.checkA11y({
      rules: {
        'page-has-heading-one': {enabled: false},
      },
    });
  });

  sizes.forEach(size => {
    it(`should pass visual regression test on ${size} viewport`, () => {
      cy.visitViewport(size, '?name=typography/heading');
      cy.takeSnapshot(size);
    });
  });
});
