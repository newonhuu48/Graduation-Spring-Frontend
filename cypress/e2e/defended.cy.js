describe('Defended Theses Table View and Actions', () => {
  beforeEach(() => {
    cy.loginAsTeacher().then(() => {

      cy.intercept('GET', 'http://localhost:8080/api/theses/defended*').as('getDefendedTheses');
      //cy.visit('/theses/defended');
      cy.get('[data-cy=tab-defended]').click();
      cy.wait('@getDefendedTheses');
    })
  });


  it('Should display the defended theses table with data', () => {
    cy.get('[data-cy=defended-table]').should('be.visible');
    cy.get('[data-cy=defended-row]').should('have.length.greaterThan', 0);
  });


  it('Should show defended theses details in each row', () => {
    cy.get('[data-cy=defended-row]').each(($row) => {
      cy.wrap($row).within(() => {
        cy.get('[data-cy=defended-id]').should('exist');
        cy.get('[data-cy=defended-title]').should('exist');
        cy.get('[data-cy=defended-student-number]').should('exist');
        cy.get('[data-cy=defended-student-id]').should('exist');
        cy.get('[data-cy=defended-grade]').should('exist');
      });
    });
  });

  it('Should show Edit and Delete buttons for teacher user', () => {
    cy.get('[data-cy=defended-row]').first().within(() => {
      cy.get('[data-cy=edit-button]').should('exist');
      cy.get('[data-cy=delete-button]').should('exist');
    });
  });

  it('Should open Edit Defended Thesis Page without error', () => {
    cy.intercept('GET', 'http://localhost:8080/api/theses/defended/*').as('getInitialData');

    cy.get('[data-cy=defended-row]').first().within(() => {
      cy.get('[data-cy=edit-button]').click();
    });

    cy.wait('@getInitialData');

    cy.get('[data-cy=error-message]').should('not.exist');
  });
});