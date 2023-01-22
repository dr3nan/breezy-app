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

})