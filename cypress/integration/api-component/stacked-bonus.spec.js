context.skip('Bonus: Stacked layout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081/stacked.html')
  })

  it('Page exists', () => {
    cy.get('#docs').should('exist');
  })

  it('API Overview is displayed when page is loaded', () => {
    expect("TODO: 'Insert your tests here'").to.not.exist;
  })
})
