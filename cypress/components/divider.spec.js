import {VIEWPORTS} from '../support/viewports';

const sizes = [VIEWPORTS.EXTRA_SMALL, VIEWPORTS.SMALL, VIEWPORTS.MEDIUM];
const pagePath = '?name=divider';

describe('Divider component', () => {
  it('should pass basic a11y test', () => {
    cy.visit(pagePath);
    cy.injectAxe();
    cy.checkA11y();
  });

  sizes.forEach(size => {
    it(`should pass visual regression test on ${size} viewport`, () => {
      cy.visitViewport(size, pagePath);
      cy.takeSnapshot(size);
    });
  });
});
