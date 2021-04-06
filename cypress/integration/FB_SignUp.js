/// <reference types = "cypress"/>

describe ('Facebook signin & signout tests', () =>{

    beforeEach(() => {

        cy.visit('https://facebook.com');
        cy.get('[data-testid=open-registration-form-button]',{timeout:10000}).click();
        cy.screenshot();
    });

    it ('FB signup bithday test', () =>{

        cy.get('#month').select('8');
        cy.get('#month').invoke('val').should('equal','8'); 

        cy.get('#day').select('5');
        cy.get('#day').invoke('val').should('equal','5'); 

        cy.get('#year').select('2000');
        cy.get('#year').invoke('val').should('equal','2000'); 

    });

    it ('FB signup gender select', () =>{

        cy.get('label')
        .contains('Custom')
        .siblings('input')
        .check()
        .should('be.checked');

    });
    
})