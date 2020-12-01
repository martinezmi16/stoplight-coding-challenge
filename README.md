# Stoplight Coding Challenge - Integration Tests for Docs Component

Create an integration or e2e test for the included docs component that verifies its functionality.

## Instructions

1. Create a Github repository called "Stoplight Coding Challenge" and invite me: [https://github.com/lottamus](https://github.com/lottamus)
2. Clone this repository and push the code to your new repository.
3. Run `yarn` to install all the dependencies.
4. Run `yarn test` to start the simple server and Cypress test runner.
5. Open up `cypress/integration/api-component/sidebar.spec.ts` and begin adding tests.

## Requirements

**Write tests that verify**

- [ ] The API's overview page renders basic information and server information
- [ ] API paths should be displayed at the menu's top level and should be grouped by the OpenAPI's `tags` property
- [ ] Paths should be expandable and methods within those paths should render `summary` field
- [ ] Verify that models are rendered in the menu
- [ ] When model is selected it updates the URL location
- [ ] That the `Pet` model renderes correctly (nesting, `required`, expanding & collapsing)

**Non functional requirements**

- [ ] Use TypeScript instead of plain JavaScript.
- [ ] When testing the UI make sure you read the `petstore_bundled.json` contents as your source of truth

**Extra (not required)**

- [ ] Suggest and implement one additional test and its scope. Tell us why you decided to write such test (e.g. was it a regression test? a full workflow? an isolated feature test?).
- [ ] Tell us what you think about the UX, do you have a suggestion for improvement?
- [ ] There is an alternative layout for Elements that is stacked instead of using a sidebar. (You can see it at http://localhost:8081/stacked.html). All of the same things should be tested, but the page layout is different. How much testing logic should be shared between `sidebar.spec.ts` and `stacked-bonus.spec.ts` to strike a good balance between readability and maintainability?
- [ ] Try to break the app - we don't anticipate it will crash but if you find a bug, it's extra points.

## Project Structure
* `cypress/integration/api-component`: where Cypress tests are (edit)
* `public`: the website under test. (do not edit)
* `public/petstore_bundled.json`: the OpenAPI spec file used to build the menu. (do not edit)
* `server.js`: a static web server for `public`. (do not edit)

## Useful Links

* My email - [chris@stoplight.io](mailto:chris@stoplight.io)

* Introduction to Cypress - [https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html)

* Available Commands in Cypress (`.get`, `.click`, etc) - [https://docs.cypress.io/api/commands/get.html](https://docs.cypress.io/api/commands/get.html)

* Available Assertions in Cypress - [https://docs.cypress.io/guides/references/assertions.html](https://docs.cypress.io/guides/references/assertions.html)

