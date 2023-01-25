/// <reference types="cypress" />

describe('Tests of index / home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/user-home/invoice-list2')
    cy.origin(
      'https://dev-pvcybmx0ftvr8fpi.us.auth0.com',
      { args: { username: 'pipekazaa@hotmail.com', password: 'Facilfacil.10' } },
      ({ username, password }) => {
        cy.get('input[name="username"]').type(username)
        cy.get('input#password').type(password, { log: false })
        cy.contains('button[value=default]', 'Continue').click()
      }
    )
  })

  it('The number of invoices fetched equals the number of invoices rendered', () => {
    cy.request('http://localhost:3000/api/auth0|63d03567391841e7e3664869').then((fetchedInvoices)=> {
      console.log('fetchedInvoices are: ', fetchedInvoices)
      const invoicesFetched = fetchedInvoices.body.length;
      
      cy.wait(4000)
      cy.get('.invoicesTable').then((invoiceTable) => {
        const numRenderedElements = invoiceTable[0].childNodes.length;
        expect(invoicesFetched).to.equal(numRenderedElements);
      });
    })
  })

  // next test is no needed anymore, as a PopUp appears
  /* it('if a invoice is clicked then navigatation to url to see invoice details CORRECT', () => {
    cy.get('.linkClick-0').then(($a) => {
      const hrefValue = $a.attr('href');
      console.log(hrefValue);
      cy.get('.linkClick-0').click()
      cy.wait(4000)
      cy.url().should('include', hrefValue)
    })
  }) */

})