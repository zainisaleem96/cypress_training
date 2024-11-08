import { should } from "chai";

const data = require('../fixtures/users')

class HomePage{

    verifyPageLoadedSuccessfully(){
         cy.title().should('eq', 'DEMOQA');
         cy.url().should('include', 'https://demoqa.com/');
         cy.viewport('macbook-11');
     }
 
     verifyTotalNumberofItems(){
        // cy.visit('seleniumPractise/#/',{ failOnStatusCode: false});
         cy.get('.card-body:visible').should('have.length',6)
     }

     verifyEachMenu(){
        cy.get('.category-cards').find('.card-body').each(($el, index, $list) => {

            var MenuText = $el.find('h5').text()
            console.log(MenuText);
            })

    }
    verifyElements(){
        cy.get('.card-body h5').contains('Elements').click();
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
        cy.get('#userName').type(data.fullname);
        cy.get('#userEmail').type(data.email);
        cy.get('#currentAddress').type(data.current_address);
        cy.get('#permanentAddress').type(data.permanent_address);
        cy.get('#submit').click();
    }
    verifyCheckBox(){
        cy.get('.card-body h5').contains('Elements').click();
        cy.get('#item-1').click();
        //cy.get('.rct-title').should('have.text','Home').click();
        cy.get('.rct-collapse').click();
        cy.get('ol > li:nth-child(2) span.rct-title').click();
       // cy.get('.rct-title').should('have.text', 'Documents').click();
}
    verifyRadioButton(){
        cy.get('.card-body h5').contains('Elements').click();
        cy.get('#item-2').click();
        cy.get(':nth-child(3) > :nth-child(3)').click();
    }
}
export default HomePage
