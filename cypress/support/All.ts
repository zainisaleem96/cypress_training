import HomePage from '../support/home';

context('Actions', ()=> {

    const homePage = new HomePage();

    beforeEach(()=>{
        console.log("this is before")
    })

 it('all test cases', () => {
    cy.clearCookies();
    cy.clearAllSessionStorage();
    cy.clearLocalStorage();
    cy.visit("https://www.saucedemo.com")
    homePage.verifyPageLoadedSuccessfully();
    homePage.verifyTotalNumberofItems();
    homePage.verifyEachMenu();
    homePage.verifyElements();
    homePage.verifyRadioButton();
    homePage.verifyCheckBox();
 })
})