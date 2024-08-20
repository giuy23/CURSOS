import App from './App.vue'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(App)
    cy.contains('h1', 'Counter App')
    cy.get('#counter-info').contains('0')
    cy.contains('button', 'Increment').click()
    cy.get('#counter-info').contains('1')
  })
})