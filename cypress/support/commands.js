Cypress.on('uncaught:exception', (err, runnable) => {  // returning false here prevents Cypress from failing the test
    console.log("error occured")
    return false
  })