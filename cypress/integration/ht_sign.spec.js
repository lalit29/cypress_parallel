describe('Hometown Sign up', function () {


    it('verify Sign up',function (){

        cy.visit('https://www.hometown.in/login/?redirect=/');
        cy.viewport('macbook-15');
        cy.get('a').contains('Register').click();
        cy.get('input[name="full name"]').type(userID_Alpha())
        cy.get('input[name="email"]').type(userID_Alpha()+'@gmail.com')
        cy.get('input[name="phone"]').type(user_Mob())
        cy.get('input[name="psaaword"]').type('123456')
        cy.get('input[id="readTnc"]').click()
        cy.get('button').contains('SIGN UP').click();

        cy.get('h2').contains('Profile Details')

       })

       function userID_Alpha(){
        var text ="";
        var possibe ="ABCDEFGHIJKLMNOPQRSTUWZXWZabcdefghijklmnopqrstuvwxyz"
        for(var i=0;i<7;i++)
            text += possibe.charAt(Math.floor(Math.random() * possibe.length))
        
            return text;
    }

    function user_Mob(){
        var text ="";
        var possibe ="9876"
        for(var i=0;i<11;i++)
            text += possibe.charAt(Math.floor(Math.random() * possibe.length))
        
            return text;
    }
})