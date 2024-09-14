describe('XYZ Bank E2E Test Suite', () => {
    before(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    })

    it('Confirm the Title of the page is XYZ Bank', () => {
        cy.title().should('eq', 'XYZ Bank')
    })

    it('Customer Login and Transactions', () => {
        // Click on Customer Login
        cy.contains('Customer Login').click()

        // Choose any Name from the Your Name drop down
        cy.get('#userSelect').select('Harry Potter')

        // Click on Login
        cy.get('button[type="submit"]').contains('Login').click()

        // Confirm the Name selected is displayed after Welcome
        cy.get('.fontBig').should('contain', 'Harry Potter')

        // Confirm the Currency is Dollar
        cy.get('.currency').should('contain', 'Dollar')

        // Click on Deposit
        cy.get('button[ng-class="btnClass2"]').contains('Deposit').click()

        // Enter the amount in Amount to be Deposited textbox
        const depositAmount = 1000
        cy.get('input[ng-model="amount"]').type(depositAmount)

        // Click on Deposit
        cy.get('button[type="submit"]').contains('Deposit').click()

        // Confirm "Deposit Successful" is displayed
        cy.get('.error').should('contain', 'Deposit Successful')

        // Click on Transactions
        cy.get('button[ng-class="btnClass1"]').contains('Transactions').click()

        // Confirm the amount entered is displayed under Amount column
        cy.get('table tbody tr').first().find('td').eq(1).should('contain', depositAmount)

        // Confirm the Transaction Type is credit
        cy.get('table tbody tr').first().find('td').eq(2).should('contain', 'Credit')

        // Click on Back button
        cy.get('button[ng-click="back()"]').click()

        // Click on Withdrawl
        cy.get('button[ng-class="btnClass3"]').contains('Withdrawl').click()

        // Enter the same amount you deposited
        cy.get('input[ng-model="amount"]').type(depositAmount)

        // Click on Withdraw
        cy.get('button[type="submit"]').contains('Withdraw').click()

        // Confirm "Transaction Successful" is displayed
        cy.get('.error').should('contain', 'Transaction Successful')

        // Click on Transactions
        cy.get('button[ng-class="btnClass1"]').contains('Transactions').click()

        // Confirm there is one more row with Transaction Type is debit
        cy.get('table tbody tr').eq(1).find('td').eq(2).should('contain', 'Debit')
    })
})