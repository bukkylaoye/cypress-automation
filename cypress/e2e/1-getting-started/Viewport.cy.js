describe('viewport test', ()=>{
    it('viewport test1', ()=>{

        cy.viewport(990,760)
        cy.visit('https://www.amazon.com')
    })

    it('Viewport Test2',()=> {

        cy.viewport('iphone-3') //docs.cypress.io/api/commands/viewport
        cy.visit('https://wwww.amazon.com')
    })

    it('Viewport Test3', ()=>{

        cy.viewport('iphone-3','landscape') //docs.cypress.io/api/commands/viewport
        cy.visit('https://www.amazon.com')
    })
})