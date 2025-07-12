// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username, password) => {
  return cy.visit('/login')
    .get('[data-cy=username-input]').type(username)
    .get('[data-cy=password-input]').type(password)
    .get('[data-cy=login-button]').click();
});

Cypress.Commands.add('loginAsTeacher', () => {
  return cy.login("teacher1", "teacher1");
});


Cypress.Commands.add('loginAsStudent', (username, password) => {
  return cy.login("student1", "student1");
});
