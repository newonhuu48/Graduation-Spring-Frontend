describe('Student Table View and Actions', () => {
  beforeEach(() => {
    cy.loginAsTeacher().then(() => {

      cy.intercept('GET', 'http://localhost:8080/api/students*').as('getStudents');
      //cy.visit('/students');
      cy.get('[data-cy=tab-students]').click();
      cy.wait('@getStudents');
    })
  });

  //Place tests under me
  it('should display the student table with data', () => {
    cy.get('[data-cy=student-table]').should('be.visible');
    cy.get('[data-cy=student-row]').should('have.length.greaterThan', 0);
  });


  it('should show student details in each row', () => {
    cy.get('[data-cy=student-row]').each(($row) => {
      cy.wrap($row).within(() => {
        cy.get('[data-cy=student-id]').should('exist');
        cy.get('[data-cy=student-first-name]').should('exist');
        cy.get('[data-cy=student-last-name]').should('exist');
        cy.get('[data-cy=student-number]').should('exist');
      });
    });
  });

  it('should show Edit and Delete buttons for teacher user', () => {
      cy.get('[data-cy=student-row]').first().within(() => {
        cy.get('[data-cy=edit-button]').should('exist');
        cy.get('[data-cy=delete-button]').should('exist');
      });
    });

  it('should open Add Student Page without Error', () => {
    cy.get('[data-cy=create-button]').click();

    cy.get('[data-cy=error-message]').should('not.exist');
  });

  it('should open Edit Student Page without Error', () => {
    cy.intercept('GET', 'http://localhost:8080/api/students/*/edit').as('getInitialData');

    cy.get('[data-cy=student-row]').first().within(() => {
      cy.get('[data-cy=edit-button]').click();
    });

    cy.wait('@getInitialData');

    cy.get('[data-cy=error-message]').should('not.exist');
  });
});