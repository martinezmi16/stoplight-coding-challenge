context('Sidebar layout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081/sidebar.html')
  })

  it('Page exists', () => {
    cy.get('#docs').should('exist');
  })

  it('API Overview is displayed when page is loaded', () => {
    //expect("TODO: 'Insert your tests here'").to.not.exist;
    cy.get('#paths').should('exist');
  })

  //How do we know what the overview is?
  it('Overview page renders basic information and server information', () => {
    cy.get('#docs').should('exist');
  })

  //What server information do we need to verify?
  it('Overview page renders server information', () => {
    cy.get('#docs').should('exist');
  })

  it('Paths should be expandable', () => {
    cy.get('#docs').should('exist');
  })

  it('Methods within paths should render summary field', () => {
    cy.get('#docs').should('exist');
  })

  it('models are rendered in the menu', () => {
    cy.get('#docs').should('exist');
  })

  it('When model is selected it updates the URL location', () => {
    cy.get('#docs').should('exist');
  })

  // Starting with Pet because it is the most complicated,
  // We should be able to write a function that we can use for all models
  it('Pet model renderes correctly ', () => {
    cy.get('#docs').should('exist');
  })




})
