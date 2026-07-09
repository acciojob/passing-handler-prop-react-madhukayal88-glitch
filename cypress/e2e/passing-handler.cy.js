describe('Passing Handler Prop', () => {
  it('should change selected color', () => {
    cy.visit('http://localhost:8081')

    cy.contains('red').click()

    cy.get('.fix-box')
      .first()
      .should('have.css', 'background-color')
  })
})