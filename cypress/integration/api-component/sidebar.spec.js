context('Sidebar layout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081/sidebar.html')
  })

  it('Page exists', () => {
    cy.get('#docs').should('exist');
  })

  it('API Overview is displayed when page is loaded', () => {
    expect("TODO: 'Insert your tests here'").to.not.exist;
  })
})
