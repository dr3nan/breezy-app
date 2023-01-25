/* /// <reference types="cypress" />

describe('members-only', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/members-only')
  })

  it('should display one sidebar', () => {
    cy.get('.sidebar_sidebar__1af5q').should('have.length', 1).should('be.visible')
  })

  it('should have a ul element with class styles.menuItems', () => {
    cy.get('.sidebar_menuItems__N7HT2').should('exist').should('be.visible')
  })

  it('if button Create Invoice clicked navigate to create invoice OK', () => {
    cy.get('[data-cy="link-0"]').click()
    cy.wait(4000)
    cy.url().should('include', 'http://localhost:3000/members-only/create-invoice')
  })

  it('if button Create Invoice clicked navigate to invoice list OK', () => {
    cy.get('[data-cy="link-1"]').click()
    cy.wait(4000)
    cy.url().should('include', 'http://localhost:3000/members-only/invoice-list')
  })

  it('if button Create Invoice clicked navigate to clients OK', () => {
    cy.get('[data-cy="link-2"]').click()
    cy.wait(4000)
    cy.url().should('include', 'http://localhost:3000/members-only/clients')
  })

  it('if button LOGOUT clicked navigate to home OK', () => {
    cy.get('.logout-button').click()
    cy.wait(4000)
    cy.url().should('include', 'http://localhost:3000/')
  })
});
 */