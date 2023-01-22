/// <reference types="cypress" />

Cypress.Commands.add('getParamExists', (selector) => {
  return cy.get(`input[name=${selector}]`)
})

describe('Create invoice', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/members-only/create-invoice')
  })

  it('should check form fields exist and are of correct type', () => {
    cy.getParamExists('fullName').and('have.attr', 'type', 'text');
    cy.getParamExists('address').and('have.attr', 'type', 'text');
    cy.getParamExists('phoneNumber').and('have.attr', 'type', 'number');
    cy.getParamExists('email').and('have.attr', 'type', 'email');
    cy.getParamExists('clientFullName').and('have.attr', 'type', 'text');
    cy.getParamExists('clientAddress').and('have.attr', 'type', 'text');
    cy.getParamExists('clientPhoneNumber').and('have.attr', 'type', 'number');
    cy.getParamExists('clientEmail').and('have.attr', 'type', 'email');
    cy.getParamExists('purchaseOrderNumber').and('have.attr', 'type', 'number');
    cy.getParamExists('description').and('have.attr', 'type', 'text');
    cy.getParamExists('rate').and('have.attr', 'type', 'number');
    cy.getParamExists('date').and('have.attr', 'type', 'datetime-local');
  })

  it('should return status and check for submit button', () => {
    cy.request('http://localhost:3000/members-only/create-invoice')
      .should((response) => {
        expect(response.status).to.eq(200)
      })
    cy.get('input[type="submit"][value="CREATE INVOICE"]').should('exist')
  })

  it('should show an alert upon submit with PO number', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);
    cy.get('form').submit();
    cy.wrap(stub).should('be.called');
  })
})