before(function () {     
    cy.log('-----Before the very 1st Test Case---') 
}) 
beforeEach(function () {     
    cy.log('-----Before each test case---') }) 
afterEach(function () {     
    cy.log('-----After each test case---') 
}) 
    after(function () {     
    cy.log('-----After last Test Case---') 
}) 
describe('Test suite 1',()=>{
    it('Test Suite 1 - TC1', ()=>{
        cy.log('This is my 1st Suite 1 TC')
    })
        it('Test Suite 1 - TC2', ()=>{
            cy.log('This is my 1st Suite 2 TC')
        })
    })
describe('Test Suite 2', ()=>{
    it('Test Suite 2 - TC2', ()=>{
    })
    it('Test Suite 2 - TC2', ()=>{
        cy.log('This is my 2nd Suite 2 TC')
    })
})