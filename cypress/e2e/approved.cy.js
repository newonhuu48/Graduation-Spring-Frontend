describe('Approved Theses Table View and Actions', () => {
  beforeEach(() => {
    cy.loginAsTeacher().then(() => {

      cy.intercept('GET', 'http://localhost:8080/api/theses/approved*').as('getApprovedTheses');
      //cy.visit('/theses/approved');
      cy.get('[data-cy=tab-approved]').click();
      cy.wait('@getApprovedTheses');
    })
  });


  it('Should display the approved theses table with data', () => {
    cy.get('[data-cy=approved-table]').should('be.visible');
    cy.get('[data-cy=approved-row]').should('have.length.greaterThan', 0);
  });


  it('Should show approved theses details in each row', () => {
    cy.get('[data-cy=approved-row]').each(($row) => {
      cy.wrap($row).within(() => {
        cy.get('[data-cy=approved-id]').should('exist');
        cy.get('[data-cy=approved-title]').should('exist');
        cy.get('[data-cy=approved-student-number]').should('exist');
        cy.get('[data-cy=approved-student-id]').should('exist');
      });
    });
  });

  it('Should show Defend button for teacher user', () => {
    cy.get('[data-cy=approved-row]').first().within(() => {
      cy.get('[data-cy=defend-button]').should('exist');
    });
  });

  it("Should open Defend Thesis page without errors", () => {
    cy.get('[data-cy=approved-row]').first().within(() => {
      cy.get('[data-cy=defend-button]').click();
    });

    cy.get('[data-cy=error-message]').should('not.exist');
  });
});