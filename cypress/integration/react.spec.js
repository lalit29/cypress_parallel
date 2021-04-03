describe('React App e2e test', function () {

    it('Sign up test', function(){

        //test

        cy.visit('https://react-redux.realworld.io')
        cy.viewport('macbook-15');
        cy.get('a').contains('Sign up').click();
        cy.get('input[placeholder="Username"]').type(userID_Alpha());
        cy.get('input[placeholder="Email"]').type(userID_Alpha()+'@gmail.com');
        cy.get('input[placeholder="Password"]').type(userID_Alpha()+'83231');
        cy.get('button').contains('Sign in').click();

    })
    it('Assertion', function(){

    
        cy.get('a').contains('Home').should('have.text','Home');
       

    })


    function userID_Alpha(){
        var text ="";
        var possibe ="ABCDEFGHIJKLMNOPQRSTUWZXWZabcdefghijklmnopqrstuvwxyz"
        for(var i=0;i<7;i++)
            text += possibe.charAt(Math.floor(Math.random() * possibe.length))
        
            return text;
    }

});