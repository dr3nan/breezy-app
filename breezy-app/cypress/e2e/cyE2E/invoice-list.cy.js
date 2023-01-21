/// <reference types="cypress" />

describe('Tests of index / home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/members-only/invoice-list')
  })

  it('The number of invoices fetched equals the number of invoices rendered', () => {
    it('The number of invoices fetched equals the number of invoices rendered', () => {
      cy.intercept('GET', 'http://localhost:3000/api/hello').as('getElements');
      cy.get('.fetch-elements-button').click();
      cy.wait('@getElements').then((xhr) => {
        const numElements = xhr.response.body.length;
        cy.get('.invoicesTable').then((elements) => {
          const numRenderedElements = elements.length;
          expect(numElements).to.equal(numRenderedElements);
        });
      });
    });
  })

  it('if a invoice is clicked then navigatation to url to see invoice details OK', () => {
    let hrefValue;
    cy.get('[data-cy="link-0"]').then(($a) => {
      hrefValue = $a.attr('href');
      console.log(hrefValue);
    })
    cy.get('.button-0').click()
    cy.wait(4000)
    cy.url().should('include', `${hrefValue}`)
  })

  /* it('input button should not be visible at the beggining', () => {

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
  }) */

})