import {VIEWPORTS} from '../support/viewports';

const sizes = [VIEWPORTS.EXTRA_SMALL, VIEWPORTS.SMALL, VIEWPORTS.MEDIUM];

describe('Slider component', () => {
  it('should pass basic a11y test', () => {
    cy.visit('?name=slider');
    cy.injectAxe();
    cy.checkA11y();
  });

  sizes.forEach(size => {
    it(`should pass visual regression test on ${size} viewport`, () => {
      cy.visitViewport(size, '?name=slider');
      cy.takeSnapshot(size);
    });
  });
});
