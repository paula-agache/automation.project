describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('https://iwanttohelp.bim.assistcloud.services') // change URL to match your dev URL
    })
  })
  Cypress.Commands.add('autentificare', (username, password) => {
    cy.session(
      username,
      () => {
        cy.visit('/login')
        cy.get('input[name=username]').type(username)
        cy.get('input[name=password]').type(`${password}{enter}`, { log: false })
        cy.url().should('include', '/dashboard')
        cy.get('h1').should('contain', username)
      },
      {
        validate: () => {
          cy.getCookie('your-session-cookie').should('exist')
        },
      }
    )
  })