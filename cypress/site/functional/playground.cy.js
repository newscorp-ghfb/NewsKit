// / <reference types="Cypress" />

const playgroundElement = '[data-testid="playground-element"]';

describe('Documentation Site - playground', () => {
  before(() => {
    cy.mockConsentAndVisit('/components/tag');
    // Hack for Next 13 - this could be removed AFTER upgrading Cypress to v.12
    cy.get('section[id="interactive-demo"]').should('be.visible');
  });

  it('Tag playground should update the content', () => {
    cy.get('input[name="Content"]').clear({force: true}).type('Chelsea');
    cy.get('input[name="Link"]')
      .clear({force: true})
      .type('https://test.co.uk');
    cy.get(`${playgroundElement} [data-testid="tag"]`)
      .should('have.attr', 'href', 'https://test.co.uk')
      .contains('Chelsea');
    cy.get('[data-testid="true"]').click({force: true});
  });
});

describe('Documentation Site - playground - Unordered List', () => {
  before(() => {
    cy.mockConsentAndVisit('/components/unordered-list');
    // Hack for Next 13 - this could be removed AFTER upgrading Cypress to v.12
    cy.get('section[id="interactive-demo"]').should('be.visible');
  });

  const ulArrayKnob = '[data-testid="array-knob-list-data"]';
  const buttonAdd = '[data-testid="array-knob-button-add"]';
  const buttonRemove = '[data-testid="array-knob-button-remove"]';
  const textKnobLabel = '[data-testid="input-knob-list-data"]';
  const testTagText = 'T'; // https://github.com/cypress-io/cypress/issues/5480 - the reason why it's a single character

  it('Create a new tag, populate it with data and remove it', () => {
    cy.get(`${playgroundElement} ul>li`).should('have.length', 3);
    cy.get(`${ulArrayKnob} ${buttonAdd}`).click({force: true});
    cy.get(`${playgroundElement} ul>li`).should('have.length', 4);

    cy.get(`${textKnobLabel}:last`).clear({force: true});
    cy.get(`${textKnobLabel}:last`).type(testTagText);
    cy.get(`${playgroundElement} ul>li:last`).should('have.text', testTagText);

    cy.get(`${ulArrayKnob} ${buttonRemove}:last`).click({force: true});
    cy.get(`${playgroundElement} ul>li`).should('have.length', 3);
  });
});

describe('Documentation Site - playground', () => {
  before(() => {
    cy.mockConsentAndVisit('/components/flag');
    // Hack for Next 13 - this could be removed AFTER upgrading Cypress to v.12
    cy.get('section[id="interactive-demo"]').should('be.visible');
  });

  it('Flag playground should update the content', () => {
    cy.get('input[name="Content"]').clear({force: true}).type('Chelsea');
    cy.get(`${playgroundElement} [data-testid="flag"]`).contains('Chelsea');
  });
});
