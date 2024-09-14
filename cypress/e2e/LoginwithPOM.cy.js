import Login from  
    //using POM approach     
    it('LoginTest with POM', ()=> {         
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')          
        const ln = new Login()          
        ln.setUserName('Admin')          
        ln.setPassword('admin123')                
        ln.clickSubmit()
         ln.verifyLogin()

    })
