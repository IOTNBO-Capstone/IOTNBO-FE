describe('Outbound Page', () => {
  beforeEach(() => {
    cy.intercept("POST", "https://equilibrium.herokuapp.com/graphql", {
      fixture: "data1.json"
    });
    cy.visit('http://localhost:3000/outbound');
  });

  it('Should have a list of project contributers', () => {
    cy.get('[data-cy="outbound-container"]')
      .should('exist');
  });

  it('Should have a thank you message', () => {
    cy.get('[data-cy="thanks"]')
      .should('exist')
      .contains('Thank you for viewing our application.');
  });

  it('Should have links to all of the creators\' Github and LinkedIn profiles', () => {
    cy.get('[data-cy="ali"]')
      .should('exist')
      .get('[data-cy="ali"] > h4')
      .should('exist')
      .contains('Ali Nix')
      .get('[data-cy="ali"] > .link-icons')
      .should('exist')
      .get('[data-cy="ali-github"]')
      .should('exist')
      .get('[data-cy="ali-github-link"]')
      .should('exist')
      .get('[data-cy="ali-linkedin"]')
      .should('exist')
      .get('[data-cy="ali-linkedin-link"]')
      .should('exist');

    cy.get('[data-cy="candace"]')
      .should('exist')
      .get('[data-cy="candace"] > h4')
      .should('exist')
      .contains('Candace Eckels')
      .get('[data-cy="candace"] .link-icons')
      .should('exist')
      .get('[data-cy="candace-github"]')
      .should('exist')
      .get('[data-cy="candace-github-link"]')
      .should('exist')
      .get('[data-cy="candace-linkedin"]')
      .should('exist')
      .get('[data-cy="candace-linkedin-link"]')
      .should('exist');

    cy.get('[data-cy="dana"]')
      .should('exist')
      .get('[data-cy="dana"] > h4')
      .should('exist')
      .contains('Dana Chapman')
      .get('[data-cy="dana"] > .link-icons')
      .should('exist')
      .get('[data-cy="dana-github"]')
      .should('exist')
      .get('[data-cy="dana-github-link"]')
      .should('exist')
      .get('[data-cy="dana-linkedin"]')
      .should('exist')
      .get('[data-cy="dana-linkedin-link"]')
      .should('exist');

    cy.get('[data-cy="emily"]')
      .should('exist')
      .get('[data-cy="emily"] > h4')
      .should('exist')
      .contains('Emily Miles')
      .get('[data-cy="emily"] > .link-icons')
      .should('exist')
      .get('[data-cy="emily-github"]')
      .should('exist')
      .get('[data-cy="emily-github-link"]')
      .should('exist')
      .get('[data-cy="emily-linkedin"]')
      .should('exist')
      .get('[data-cy="emily-linkedin-link"]')
      .should('exist');

    cy.get('[data-cy="taryn"]')
      .should('exist')
      .get('[data-cy="taryn"] > h4')
      .should('exist')
      .contains('Taryn Orlemann')
      .get('[data-cy="taryn"] > .link-icons')
      .should('exist')
      .get('[data-cy="taryn-github"]')
      .should('exist')
      .get('[data-cy="taryn-github-link"]')
      .should('exist')
      .get('[data-cy="taryn-linkedin"]')
      .should('exist')
      .get('[data-cy="taryn-linkedin-link"]')
      .should('exist');

    cy.get('[data-cy="thomas"]')
      .should('exist')
      .get('[data-cy="thomas"] > h4')
      .should('exist')
      .contains('Thomas Hayes')
      .get('[data-cy="thomas"] > .link-icons')
      .should('exist')
      .get('[data-cy="thomas-github"]')
      .should('exist')
      .get('[data-cy="thomas-github-link"]')
      .should('exist')
      .get('[data-cy="thomas-linkedin"]')
      .should('exist')
      .get('[data-cy="thomas-linkedin-link"]')
      .should('exist');

    cy.get('[data-cy="will"]')
      .should('exist')
      .get('[data-cy="will"] > h4')
      .should('exist')
      .contains('Will Hobson')
      .get('[data-cy="will"] > .link-icons')
      .should('exist')
      .get('[data-cy="will-github"]')
      .should('exist')
      .get('[data-cy="will-github-link"]')
      .should('exist')
      .get('[data-cy="will-linkedin"]')
      .should('exist')
      .get('[data-cy="will-linkedin-link"]')
      .should('exist');
  });

  it('Should be able to go back to the Landing Page', () => {
    cy.get('button')
      .click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});