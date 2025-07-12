describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('/'); // base URL, but any route would show login if logged out
  });


  it('Displays Login Form when not logged in', () => {
    cy.get('[data-cy=username-input]').should('be.visible');
    cy.get('[data-cy=password-input]').should('be.visible');
  });


  it('Logs in as Teacher successfully and sees IndexPage', () => {
    cy.loginAsTeacher();

    cy.get('[data-cy=username-input]').should('not.exist');

    cy.contains('Welcome to My Graduation App').should('be.visible');
    cy.get('[data-cy=tab-students]').should('be.visible');
    cy.get('[data-cy=tab-teachers]').should('be.visible');
    cy.get('[data-cy=tab-submitted]').should('be.visible');
    cy.get('[data-cy=tab-approved]').should('be.visible');
    cy.get('[data-cy=tab-defended]').should('be.visible');

    cy.url().should('eq', Cypress.config('baseUrl') + '/');
  });


  it('Logs in as Student successfully and sees IndexPage', () => {
    cy.loginAsStudent();

    cy.get('[data-cy=username-input]').should('not.exist');

    cy.contains('Welcome to My Graduation App').should('be.visible');
    cy.get('[data-cy=tab-graduation-thesis]').should('be.visible');

    cy.url().should('eq', Cypress.config('baseUrl') + '/');
  });


  it('Login fails and Error Message is Displayed for non-existent user', () => {
    // Fill in wrong credentials
    cy.login("nonexistentusername", "nonexistentpassword");

    // Expect error message to be shown
    cy.get('[data-cy=login-error]').should('be.visible');

    // Optionally, check that login form is still present
    cy.get('[data-cy=username-input]').should('be.visible');
  });


  it('Logs in then logs out', () => {
    cy.loginAsTeacher();
    // After login, the login form should disappear
    cy.get('[data-cy=username-input]').should('not.exist');

    // The IndexPage content should appear
    cy.contains('Welcome to My Graduation App').should('be.visible');

    //Logout
    cy.get('[data-cy=logout-button]').click();

    //Login Form should be visible
    cy.get('[data-cy=username-input]').should('be.visible');
    cy.get('[data-cy=password-input]').should('be.visible');
  });
});