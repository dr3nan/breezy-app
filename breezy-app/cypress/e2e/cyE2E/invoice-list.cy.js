/// <reference types="cypress" />

describe('Tests of index / home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/members-only/invoice-list')
  })

  it('The number of invoices fetched equals the number of invoices rendered', () => {
    cy.request('http://localhost:3000/api/hello').then((fetchedInvoices)=> {
      const invoicesFetched = fetchedInvoices.body.length;
      cy.get('.invoicesTable').then((invoiceTable) => {
        const numRenderedElements = invoiceTable[0].childNodes.length;
        expect(invoicesFetched).to.equal(numRenderedElements);
      });
    })
  })

  it('if a invoice is clicked then navigatation to url to see invoice details CORRECT', () => {
    cy.get('.linkClick-0').then(($a) => {
      const hrefValue = $a.attr('href');
      console.log(hrefValue);
      cy.get('.linkClick-0').click()
      cy.wait(4000)
      cy.url().should('include', hrefValue)
    })
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