/// <reference types = "Cypress"/>


describe('API employees test', ()=>{

    Cypress.config('baseUrl','http://dummy.restapiexample.com/api/v1')

it('Get All employees', ()=>{

    cy.request('GET','/employees')
    .its('status')
    .should('equal',200);

});

it('GET employee,test personal data', ()=>{

    cy.request('GET','employee/1')
    .its('body')
    .its('data')
    .should('include',{employee_name: "Tiger Nixon"})
    .and('include',{employee_salary: 320800})
    .and('include',{employee_age: 61});

});
it('POST employee,test personal data', ()=>{

    const employee = {"name":"Dmitry","salary":"75000","age":"23"};
    cy.request('POST','/create',employee)
    .its('body')
    .its('data')
    .should('include',{name: "Dmitry"})
    .and('include',{salary: 75000})
    .and('include',{age: 23});

});

})