describe('Banking Project Test', () => {
  it('should complete the banking tasks', () => {
    // 1. Open the website
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')

    // 2. Confirm the Title of the page is XYZ Bank
    cy.title().should('eq', 'XYZ Bank')

    // 3. Click on Customer Login
    cy.get('.btn.btn-primary.btn-lg').contains('Customer Login').click()

    // 4. Choose any Name from the Your Name drop down
    cy.get('#userSelect').select('Harry Potter')

    // 5. Click on Login
    cy.get('button[type="submit"]').contains('Login').click()

    // 6. Write an assertion to confirm the Name selected in Step 4 is displayed after Welcome
    cy.get('.fontBig').should('contain.text', 'Harry Potter')

    // 7. Confirm the Currency is Dollar (Use Assertion)
    cy.get('.ng-binding').should('contain.text', 'Dollar')

    // 8. Click on Deposit
    cy.get('button[ng-class="btnClass2"]').contains('Deposit').click()

    // 9. Enter the amount in Amount to be Deposited textbox
    cy.get('input[ng-model="amount"]').type('1000')

    // 10. Click on Deposit
    cy.get('button[type="submit"]').contains('Deposit').click()

    // 11. Confirm "Deposit Successful" is displayed
    cy.get('.error').should('contain.text', 'Deposit Successful')

    // 12. Click on Transactions
    cy.get('button[ng-class="btnClass1"]').contains('Transactions').click()

    // 13. Confirm the amount entered in Step 9 is displayed under Amount column
    cy.get('tr').eq(1).find('td').eq(1).should('contain.text', '1000')

    // 14. Confirm the Transaction Type is credit
    cy.get('tr').eq(1).find('td').eq(2).should('contain.text', 'Credit')

    // 15. Click on Back button
    cy.get('button[ng-click="back()"]').click()

    // 16. Click on Withdrawl
    cy.get('button[ng-class="btnClass3"]').contains('Withdrawl').click()

    // 17. Enter the same amount you deposited
    cy.get('input[ng-model="amount"]').type('1000')

    // 18. Click on Withdraw
    cy.get('button[type="submit"]').contains('Withdraw').click()

    // 19. Confirm "Transaction Successful" is displayed
    cy.get('.error').should('contain.text', 'Transaction Successful')

    // 20. Click on Transactions
    cy.get('button[ng-class="btnClass1"]').contains('Transactions').click()
	
    // 21. Confirm there is one more row with Transaction Type is debit
    cy.get('tr').eq(2).find('td').eq(2).should('contain.text', 'Debit')
  })
})