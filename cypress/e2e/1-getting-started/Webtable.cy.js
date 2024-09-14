describe('Web Table', ()=>{
    it('Web Table', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        // Check the value present anywhere in the table

        cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')

        // Check value in specific row & column

        cy.get('[name=BookTable] > tbody >tr:nth-child(2) >td:nth-child(3)').contains('Selenium').should('be.visible')

        // Check the header at position 3

        cy.get('table[name=Booktable] > tbody > tr:nth-child(1) > th:nth-child(3)').contains('Subject').should('be.visible')

        //Verify the book name 'Master in Java' whose author name is Amod

        cy.get('table[name=BookTable] > tbody >tr td:nth-child(2)').each(($e,index,$list)=>{


        const text = $e.text()
        if(text.includes('Amod'))
        {
            cy.get('table[name=BookTable]>tbody >tr td:nth-child(1)').e(index).then(function(bname)
            {
            const bookname=bname.text()
            expect(bookname).to.equal("Master In Java")
        })
    }})
    })
})
