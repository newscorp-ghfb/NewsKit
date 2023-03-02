import {SCROLL_THRESHOLD} from '../../src/scroll/utils';

const assertScrollValueZoomAgnostic = ($el, prop, expectedValue) => {
  cy.wrap($el)
    .invoke(prop)
    .then(value =>
      expect(value).to.be.closeTo(expectedValue, SCROLL_THRESHOLD),
    );
};

describe('scroll', () => {
  it('horizontal flow', () => {
    const defaultStepDistance = 160;
    cy.visit('?name=scroll');

    cy.get('[data-testid="horizontal-scroll-component"]').within(() => {
      cy.get('[data-testid="scroll-container"]').as('scrollContainer');
      cy.get('[data-testid="scroll-arrow-right"]').as('scrollArrowRight');

      // 1. Render initial component - left arrow disabled(not rendered), right arrow enabled, scroll position 0
      cy.get('[data-testid="scroll-arrow-left"]').should('not.exist');
      cy.get('@scrollArrowRight').should('be.enabled');
      cy.get('@scrollContainer').then($element => {
        assertScrollValueZoomAgnostic($element, 'scrollLeft', 0);
      });

      // 2. Click right arrow - left arrow enabled, new scroll position
      cy.get('@scrollArrowRight').click({force: true});

      cy.get('[data-testid="scroll-arrow-left"]').as('scrollArrowLeft');

      cy.get('@scrollArrowLeft').should('be.enabled');
      cy.get('@scrollContainer').then($element => {
        assertScrollValueZoomAgnostic(
          $element,
          'scrollLeft',
          defaultStepDistance,
        );
      });

      // 3. Manual scroll to the right end - left arrow enabled, right arrow disabled(not rendered),
      // scroll position right end
      // cy.get('@scrollContainer').scrollTo('right');
      // Doesn't work since scroll container has overflow:hidden and there is no cy.hover() method
      // https://docs.cypress.io/api/commands/hover.html#Workarounds

      cy.get('@scrollContainer').then($element => {
        // Workaround
        const element = $element[0];
        element.scrollLeft = element.scrollWidth - element.clientWidth;
      });

      cy.get('@scrollArrowLeft').should('be.enabled');
      cy.get('@scrollArrowRight').should('not.exist');

      // 4. Left Scroll - left arrow enabled, right arrow enabled, new scroll position
      cy.get('@scrollArrowLeft').click({force: true});

      cy.get('@scrollArrowRight').should('be.enabled');
      cy.get('@scrollContainer').then($element => {
        const element = $element[0];
        const currentScrollPosition =
          element.scrollWidth - element.clientWidth - defaultStepDistance;
        assertScrollValueZoomAgnostic(
          $element,
          'scrollLeft',
          currentScrollPosition,
        );
      });

      // 5. Manual scroll to the left end - left arrow disabled, right arrow enabled, scroll position 0
      cy.get('@scrollContainer').then($element => {
        // Workaround
        const element = $element[0];
        element.scrollLeft = 0;
      });

      cy.get('@scrollArrowLeft').should('not.exist');
      cy.get('@scrollArrowRight').should('be.enabled');
    });
  });

  it('vertical flow', () => {
    const defaultStepDistance = 114;
    cy.visit('?name=scroll');

    cy.get('[data-testid="vertical-scroll-component"]').within(() => {
      cy.get('[data-testid="scroll-container"]').as('scrollContainer');
      cy.get('[data-testid="scroll-arrow-bottom"]').as('scrollArrowBottom');

      // 1. Render initial component - top arrow disabled(not rendered), bottom arrow enabled, scroll position 0
      cy.get('[data-testid="scroll-arrow-top"]').should('not.exist');
      cy.get('@scrollArrowBottom').should('be.enabled');
      cy.get('@scrollContainer').then($element => {
        assertScrollValueZoomAgnostic($element, 'scrollTop', 0);
      });

      // 2. Click bottom arrow - top arrow enabled, new scroll position
      cy.get('@scrollArrowBottom').click({force: true});

      cy.get('[data-testid="scroll-arrow-top"]').as('scrollArrowTop');

      cy.get('@scrollArrowTop').should('be.enabled');
      cy.get('@scrollContainer').then($element => {
        assertScrollValueZoomAgnostic(
          $element,
          'scrollTop',
          defaultStepDistance,
        );
      });

      // 3. Manual scroll to the right end - left arrow enabled, right arrow disabled, scroll position right end
      // cy.get('@scrollContainer').scrollTo('right');
      // Doesn't work since scroll container has overflow:hidden and there is no cy.hover() method
      // https://docs.cypress.io/api/commands/hover.html#Workarounds

      cy.get('@scrollContainer').then($element => {
        // Workaround
        const element = $element[0];
        element.scrollTop = element.scrollHeight - element.clientHeight;
      });

      cy.get('@scrollArrowTop').should('be.enabled');
      cy.get('@scrollArrowBottom').should('not.exist');

      // 4. Top scroll - bottom arrow enabled, top arrow enabled, new scroll position
      cy.get('@scrollArrowTop').click({force: true});

      cy.get('@scrollArrowBottom').should('be.enabled');
      cy.get('@scrollContainer').then($element => {
        const element = $element[0];
        const currentScrollPosition =
          element.scrollHeight - element.clientHeight - defaultStepDistance;
        assertScrollValueZoomAgnostic(
          $element,
          'scrollTop',
          currentScrollPosition,
        );
      });

      // 5. Manual scroll to the top end - top arrow not rendered, bottom arrow enabled, scroll position 0
      cy.get('@scrollContainer').then($element => {
        // Workaround
        const element = $element[0];
        element.scrollTop = 0;
      });

      cy.get('@scrollArrowTop').should('not.exist');
      cy.get('@scrollArrowBottom').should('be.enabled');
    });
  });
});
