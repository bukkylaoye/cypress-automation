describe('Table', () => {
    it('Table', () => {
        cy.get('table[name=Booktable]').contains('td', 'Learn Selenium').should('be.visible')
        
        // Check value in specific row and column
        cy.get('table[name=Booktable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')
        
        // Check the header at position 3
        cy.get('table[name=Booktable] > thead > tr > th:nth-child(3)').contains('Selenium').should('be.visible')
        
        // Check 'Amod' is in Author column and 'Master in Java' is Bookname
        cy.get('table[name=Booktable] > tbody > tr').each(($e, index) => {
            const text = $e.text()
            if (text.includes('Amod')) {
                cy.get('table[name=Booktable] > tbody > tr').eq(index).find('td:nth-child(1)').then(function(bname) {
                    const bookname = bname.text()
                    expect(bookname).to.equal('Master in Java')
                })
            }
        })
    })
})