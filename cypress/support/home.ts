import { should } from "chai";

const data = require('../fixtures/users')

class HomePage{
    verifyPageLoadedSuccessfully(){
         cy.title().should('eq', 'DEMOQA');
         cy.url().should('include', 'https://demoqa.com/');
         cy.viewport('macbook-11');
     }
     verifyTotalNumberofItems(){
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
        cy.get('.rct-collapse').click();
        cy.get('ol > li:nth-child(2) span.rct-title').click();
}
    verifyRadioButton(){
        cy.get('.card-body h5').contains('Elements').click();
        cy.get('#item-2').click();
        cy.get(':nth-child(3) > :nth-child(3)').click();
    }
    verifyWebTables(){
        cy.get('.card-body h5').contains('Elements').click();
        cy.contains('span', 'Web Tables').click();
        cy.get('button#addNewRecordButton').click();
        cy.get('button#submit').should('be.visible');
        cy.get('#registration-form-modal').should('have.text','Registration Form');
        cy.get('#firstName').type(data.first_name);
        cy.get('#lastName').type(data.last_name);
        cy.get('#userEmail').type(data.email_address);
        cy.get('#age').type(data.age);
        cy.get('#salary').type(data.salary);
        cy.get('#department').type(data.department);
        cy.get('button#submit').click();
        cy.get('div.-even div').eq(8).should('have.text',data.first_name);
        cy.get('div.-even div').eq(9).should('have.text',data.last_name);
        cy.get('div.-even div').eq(10).should('have.text',data.age);
        cy.get('div.-even div').eq(11).should('have.text',data.email_address);
        cy.get('div.-even div').eq(12).should('have.text',data.salary);
        cy.get('div.-even div').eq(13).should('have.text',data.department);
    }
    verifyButtons(){
        cy.get('.card-body h5').contains('Elements').click();
        cy.contains('span', 'Buttons').click();
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('have.text','You have done a double click');
        cy.get('#rightClickBtn').rightclick();
        cy.get('#rightClickMessage').should('have.text','You have done a right click');
        cy.contains('button', 'Click Me').eq(2).click();
        cy.get('#dynamicClickMessage').should('have.text','You have done a dynamic click')
    }
    verifyLinks(){
        cy.get('.card-body h5').contains('Elements').click();
        cy.contains('span', 'Links').click();
        cy.get('a#simpleLink').click();
        cy.get('a#dynamicLink').click();
        cy.get('a#created').click();
    }
}
export default HomePage