
import HomePage from '../support/home';
import '../support/commands';

context('Actions', ()=> {

    const homePage = new HomePage();

    beforeEach(()=>{
        cy.visit('https://demoqa.com/',{ failOnStatusCode: false});
        
    })

    
    it('Verify reached successfully', ()=> {
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

}) 

    it('Verify CheckBox menu item', ()=> {
    homePage.verifyCheckBox();

})
 
it('Verify RadioButton menu item', ()=> {
  homePage.verifyRadioButton();
}) 
it('Verify WebTables menu item', ()=> {
  homePage.verifyWebTables();
})
it('Verify Buttons menu item', ()=> {
  homePage.verifyButtons();
})   

it('Verify Links menu item', ()=> {
  homePage.verifyLinks();
})    


})