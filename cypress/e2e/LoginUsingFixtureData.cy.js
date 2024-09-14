   // Using POM with Fixture approach
it('Login Test with Fixture File', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    cy.fixture('LoginPage').then((data) => {
        const ln = new Login()
        ln.setUserName(data.username)
        ln.setPassword(data.password)
        ln.clickSubmit()
        ln.verifyLogin()
    })
})