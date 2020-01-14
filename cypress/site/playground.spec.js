// / <reference types="Cypress" />

const playgroundElement = '[data-testid="playground-element"]';

describe('Documentation Site - playground', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('DOC_SITE_URL')}/components/tag`);
  });

  it('Tag playground should update the content', () => {
    cy.get('input[name="Content"]')
      .clear()
      .type('Chelsea');
    cy.get('input[name="Link"]')
      .clear()
      .type('https://test.co.uk');
    cy.get(`${playgroundElement} > a`)
      .contains('Chelsea')
      .should('have.attr', 'href', 'https://test.co.uk');

    cy.get('[data-testid="true"]').click({force: true});
    cy.get(`${playgroundElement} > a`).should('not.exist');
  });
});

describe('Documentation Site - playground - Tag list', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('DOC_SITE_URL')}/components/tag-list`);
  });

  const tagsArrayKnob = '[data-testid="array-knob-tags"]';
  const buttonAdd = '[data-testid="array-knob-button-add"]';
  const buttonRemove = '[data-testid="array-knob-button-remove"]';
  const textKnobLabel = '[data-testid="input-knob-label"]';
  const textKnobHref = '[data-testid="input-knob-href"]';
  const testTagText = 'Test Tag';
  const testTagUrl = 'http://www.test-tag.com';

  it('Create a new tag, populate it with data and remove it', () => {
    cy.get(`${playgroundElement} ul>li`).should('have.length', 3);
    cy.get(`${tagsArrayKnob} ${buttonAdd}`).click();
    cy.get(`${playgroundElement} ul>li`).should('have.length', 4);

    cy.get(`${textKnobLabel}:last`)
      .clear()
      .type(testTagText);
    cy.get(`${playgroundElement} ul>li:last a`).should(
      'have.text',
      testTagText,
    );
    cy.get(`${textKnobHref}:last`)
      .clear()
      .type(testTagUrl);
    cy.get(`${playgroundElement} ul>li:last a`).should(
      'have.attr',
      'href',
      testTagUrl,
    );

    cy.get(`${tagsArrayKnob} ${buttonRemove}:last`).click();
    cy.get(`${playgroundElement} ul>li`).should('have.length', 3);
  });
});
