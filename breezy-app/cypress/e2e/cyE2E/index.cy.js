/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Tests of index / home', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000/')
  })

  it('displays Login & PayInvoice Buttons', () => {

    cy.get('.FreelancerLoginButton').should('be.visible');
    cy.get('.PayAnInvoiceButton').should('be.visible');
    cy.get('.PayAnInvoiceButton').should('be.visible');
  })

  it('input button should not be visible at the beggining', () => {

    cy.get('.landing-page_inputBox__8M4LO').should('not.be.visible');
  })

  it('if button FreelanceLogin clicked then navigation to members-only OK', () =>{
    cy.get('.FreelancerLoginButton').click()
    cy.wait(4000)
    cy.url().should('include', 'http://localhost:3000/members-only')
  })

  it('if button PayAnInvoice clicked then the input to insert PO is VISIBLE', () =>{
    cy.get('.PayAnInvoiceButton').click()
    cy.wait(4000)
    cy.get('.landing-page_inputBox__8M4LO').should('be.visible');
  })

})
