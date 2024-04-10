describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
   cy.get('#L2AGLb > .QS5gu').click()
   cy.get('#APjFqb').type('amazon.com')
   cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
  })
})