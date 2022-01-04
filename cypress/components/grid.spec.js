import {VIEWPORTS} from '../support/viewports';

const sizes = [
  VIEWPORTS.EXTRA_SMALL,
  VIEWPORTS.SMALL,
  VIEWPORTS.MEDIUM,
  VIEWPORTS.LARGE,
];

describe('Grid components', () => {
  sizes.forEach(size => {
    it(`should pass visual regression test on ${size} viewport`, () => {
      cy.visitViewport(size, '?name=grid');
      cy.takeSnapshot(size);
    });
  });
});
