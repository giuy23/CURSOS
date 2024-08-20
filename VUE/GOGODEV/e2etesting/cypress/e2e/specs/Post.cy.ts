describe("Login Test", () => {
  it("Logged user can access to page posts and view de post list", () => {
    cy.visit('/login')
    cy.get('#email').type("admin@gmail.com")
    cy.get('#password').type('123456789')
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:5173/')
   
    cy.contains('h1', 'Post list')
    cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
  });
  it("user can access to detail post view", () => {
    cy.visit('/login')
    cy.get('#email').type("admin@gmail.com")
    cy.get('#password').type('123456789')
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:5173/')

    cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
    cy.url().should('eq', 'http://localhost:5173/deatil/1')
    cy.contains('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')

  });
  it("Logged user can go back from detail view", () => {
    cy.visit('/login')
    cy.get('#email').type("admin@gmail.com")
    cy.get('#password').type('123456789')
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:5173/')
    cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
    cy.url().should('eq', 'http://localhost:5173/deatil/1')
    cy.contains('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')

    cy.get('.link').click()
    cy.url().should('eq', 'http://localhost:5173/')
    cy.contains('h1', 'Post list')
  });
});
