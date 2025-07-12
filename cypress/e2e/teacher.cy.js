describe('Teacher Table View and Actions', () => {
  beforeEach(() => {
    cy.loginAsTeacher().then(() => {

      cy.intercept('GET', 'http://localhost:8080/api/teachers*').as('getTeachers');
      //cy.visit('/students');
      cy.get('[data-cy=tab-teachers]').click();
      cy.wait('@getTeachers');
    })
  });

  //Place tests under me
  it('should display the teacher table with data', () => {
    cy.get('[data-cy=teacher-table]').should('be.visible');
    cy.get('[data-cy=teacher-row]').should('have.length.greaterThan', 0);
  });


  it('should show teacher details in each row', () => {
    cy.get('[data-cy=teacher-row]').each(($row) => {
      cy.wrap($row).within(() => {
        cy.get('[data-cy=teacher-id]').should('exist');
        cy.get('[data-cy=teacher-first-name]').should('exist');
        cy.get('[data-cy=teacher-last-name]').should('exist');
        cy.get('[data-cy=teacher-number]').should('exist');
      });
    });
  });

  it('should show Edit and Delete buttons for teacher user', () => {
    cy.get('[data-cy=teacher-row]').first().within(() => {
      cy.get('[data-cy=edit-button]').should('exist');
      cy.get('[data-cy=delete-button]').should('exist');
    });
  });

  it('should open Add Teacher Page without Error', () => {
    cy.get('[data-cy=create-button]').click();

    cy.get('[data-cy=error-message]').should('not.exist');
  });

  it('should open Edit Teacher Page without Error', () => {
    cy.intercept('GET', 'http://localhost:8080/api/teachers/*/edit').as('getInitialData');

    cy.get('[data-cy=teacher-row]').first().within(() => {
      cy.get('[data-cy=edit-button]').click();
    });

    cy.wait('@getInitialData');

    cy.get('[data-cy=error-message]').should('not.exist');
  });
});