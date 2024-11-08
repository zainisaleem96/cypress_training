
import HomePage from '../support/home';

context('Actions', ()=> {

    const homePage = new HomePage();

    beforeEach(()=>{
        cy.visit('https://demoqa.com/',{ failOnStatusCode: false});
        cy.get
    })

  /*  it('Verify reached successfully', ()=> {
        homePage.verifyPageLoadedSuccessfully();
 })
    it('Verify total number of menus', ()=> {
        homePage.verifyTotalNumberofItems();
})
    it('Verify each menu item', ()=> {
    homePage.verifyEachMenu();
})  
it('Verify Elements menu item', ()=> {
  homePage.verifyElements();

})  */
it('Verify CheckBox menu item', ()=> {
  homePage.verifyCheckBox();

})
it('Verify CheckBox menu item', ()=> {
  homePage.verifyRadioButton();

})
})