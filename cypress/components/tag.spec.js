import {VIEWPORTS} from '../support/viewports';

const sizes = [VIEWPORTS.EXTRA_SMALL, VIEWPORTS.SMALL, VIEWPORTS.MEDIUM];

describe('Tag component', () => {
  it('should pass basic a11y test', () => {
    cy.visit('?name=tag');
    cy.injectAxe();
    cy.checkA11y({
      rules: {
        'color-contrast': {enabled: false},
      },
    });
  });

  sizes.forEach(size => {
    it(`should pass visual regression test on ${size} viewport`, () => {
      cy.visitViewport(size, '?name=tag');
      cy.takeSnapshot(size);
    });
  });
});
