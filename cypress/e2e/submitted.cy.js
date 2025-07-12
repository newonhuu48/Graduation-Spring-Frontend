describe('Submitted Theses Table View and Actions', () => {
  beforeEach(() => {
    cy.loginAsTeacher().then(() => {

      cy.intercept('GET', 'http://localhost:8080/api/theses/submitted*').as('getSubmittedTheses');
      //cy.visit('/theses/submitted');
      cy.get('[data-cy=tab-submitted]').click();
      cy.wait('@getSubmittedTheses');
    })
  });


  it('Should display the submitted theses table with data', () => {
    cy.get('[data-cy=submitted-table]').should('be.visible');
    cy.get('[data-cy=submitted-row]').should('have.length.greaterThan', 0);
  });


  it('Should show submitted theses details in each row', () => {
    cy.get('[data-cy=submitted-row]').each(($row) => {
      cy.wrap($row).within(() => {
        cy.get('[data-cy=submitted-id]').should('exist');
        cy.get('[data-cy=submitted-title]').should('exist');
        cy.get('[data-cy=submitted-student-number]').should('exist');
        cy.get('[data-cy=submitted-student-id]').should('exist');
      });
    });
  });

  it('Should show Edit and Approve buttons for teacher user', () => {
    cy.get('[data-cy=submitted-row]').first().within(() => {
      cy.get('[data-cy=edit-button]').should('exist');
      cy.get('[data-cy=approve-button]').should('exist');
    });
  });

  it('Should open Submit Thesis Page without Error', () => {
    cy.get('[data-cy=create-button]').click();

    cy.get('[data-cy=error-message]').should('not.exist');
  });

  it('Should open Edit Submitted Thesis Page without Error', () => {
    cy.intercept('GET', 'http://localhost:8080/api/theses/submitted/*').as('getInitialData');

    cy.get('[data-cy=submitted-row]').first().within(() => {
      cy.get('[data-cy=edit-button]').click();
    });

    cy.wait('@getInitialData');

    cy.get('[data-cy=error-message]').should('not.exist');
  });
});