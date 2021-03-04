context('Sidebar layout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081/sidebar.html')
    cy.fixture('petstore_bundled.json')
        .then((openAPISpec) => {
          // "this" is still the test context object
          this.openAPISpec = openAPISpec
        })
  })

  it('Page exists', () => {
    cy.get('#docs').should('exist');
  })

  // How do wh
  it('API Overview is displayed when page is loaded', () => {
    //expect("TODO: 'Insert your tests here'").to.not.exist;
    cy.get('#paths').should('exist');
  })

  it('API paths should be displayed at the menus top level and should be grouped by the OpenAPIs tags property', () => {
    cy.get('#paths').should('exist');
  })

  //How do we know what the overview is?
  //What server information do we need to verify?
  it('Overview page renders basic information and server information', () => {

    const spec = this.openAPISpec
    expect(Object.keys(spec).length).to.equal(9)

    cy.get('.TableOfContentsItem--group').should('have.length', 3)


    //cy.contains("read your pets")
  })


  it('Paths should be expandable and methods within paths should render summary field', () => {
    cy.get('#docs').should('exist');
  })

  it('Models are rendered in the menu', () => {
    cy.get('#docs').should('exist');
  })

  it('When model is selected it updates the URL location', () => {
    const currentUrl = cy.url();
  })

  // Starting with Pet because it is the most complicated,
  // We should be able to write a function that we can use for all models
  it('Pet model renderes correctly ', () => {
    cy.get('#docs').should('exist');
  })


})
