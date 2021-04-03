describe('Hometown Login', function () {

    it('Verify login',function (){
     cy.visit('https://www.hometown.in/login/?redirect=/');
     cy.get('input[class="sc-hzDkRC kBHiNu"]').first().type('lalit@hometown.in');
     cy.get('input[class="sc-hzDkRC kBHiNu"]').last().type('1234567');
     cy.get('button').contains('SIGN IN').click();
     cy.wait(2000)
     cy.get('div[class="sc-kpOJdX bHlFQp"]').contains('Rajajaja');
    // cy.wait(2000)
     //cy.contains('Rajajaja').first().click()
    //  cy.get('button').contains('Logout !').trigger('mouseover')

    // })

    })

   
});