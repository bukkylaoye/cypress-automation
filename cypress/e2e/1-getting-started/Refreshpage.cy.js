describe('Reload Page in Cypress', ()=>{     
    it('Reload Page', ()=>{                   
        cy.visit("http://www.amazon.ae")         
        cy.contains('Best Sellers').should('be.visible')         
        //cy.reload()         
        //cy.contains('Best Sellers').should('be.visible')         
        // Cache reload - Bydefault timeout - 60000ms         
        //cy.reload(true)         
        //cy.contains('Best Sellers').should('be.visible')         
        //Custom timeout         
        cy.reload({timeout:10000})        
        cy.contains('Best Sellers').should('be.visible')     
    }) 
})