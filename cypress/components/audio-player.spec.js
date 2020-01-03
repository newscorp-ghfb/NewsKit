import {VIEWPORTS} from '../support/viewports';

const sizes = [VIEWPORTS.EXTRA_SMALL, VIEWPORTS.SMALL, VIEWPORTS.MEDIUM];

describe('Player component', () => {
  it('should pass basic a11y test', () => {
    cy.visit('?name=audio-player');
    cy.injectAxe();
    cy.checkA11y({
      rules: {
        'page-has-heading-one': {enabled: false},
        'color-contrast': {enabled: false},
      },
    });
  });

  sizes.forEach(size => {
    it(`should pass visual regression test on ${size} viewport`, () => {
      cy.visitViewport(size, '?name=audio-player');
      cy.takeSnapshot(size);
    });
  });
});
