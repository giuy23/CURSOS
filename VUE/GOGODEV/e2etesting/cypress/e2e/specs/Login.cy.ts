describe('Login.cy.ts', () => {
  it('user can not access to protected routed when is not logged in', () => {
    cy.visit('/')
    cy.url().should("eq", "http://localhost:5173/login");
  })
  it('user with wrong credentials can no pass', () => {
    cy.visit('/login')
    cy.get('#email').type("demo@demo.gmail.com")
    cy.get('#password').type('145236')
    cy.get('button').click()
    cy.contains('p', 'Wrong email or password')
    cy.visit('/')
    cy.url().should("eq", "http://localhost:5173/login");
  })
  it('user can successfully login', () => {
    cy.visit('/login')
    cy.get('#email').type("admin@gmail.com")
    cy.get('#password').type('123456789')
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:5173/')
  })
})