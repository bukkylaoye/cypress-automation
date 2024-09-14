describe('Login Suite', ()=>{

    it('RS 1st TestCase',()=>{

        cy.visit('http://rahulshettyacademy.com/seleniumPractise/#/')

        //Search for 'ca in the search box'
        cy.get('.search-keyword').type('ca')

        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').as('prd')
        cy.get('@prd').find('.product').should('have.length',4)

           //Parent child chaining
    cy.get('@prd').find('.product').eq(1).contains('add to carT', {matchCase: false}).click()
   cy.log('Add to Cart button was clicked successfully')
        
    cy.get('@prd').find('.product').each(($el,index,$list) => {
     const textveg=$el.find('.product-name').text() // textveg contains Cauliflower - 1kg
     cy.log(textveg)      
            
     if(textveg.includes('Carrot'))
      {
       cy.wrap($el).find('button').click()
    }
    })

    cy.get('.brand.greenLogo').should('have.text','GREENKART')

     cy.get('.brand').then(function(logo)
     {

      cy.log(logo.text())

     })

     })

})
    