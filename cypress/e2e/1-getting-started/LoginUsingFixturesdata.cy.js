describe('Automation Using Cypress || fixtures', ()=>{

    let data //Initialized the variable data

    before(() =>{
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
        cy.fixture('login').then((value) =>{ //Load the data from the login.json file present inside the fixtures folder
            data = value
        })
    })

//Start the Test case

it('Login into the application using fixture data', ()=>{

    cy.get('input[name="email"]').type(data.email) // Enter the email
    cy.get('input[name="password"]').type(data.password) //Enter the password
    cy.get('input[type="submit"]').click //Click on submit button
})
// End of the Test case
})