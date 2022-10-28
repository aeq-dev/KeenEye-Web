describe('Registration test', () => {
    it('tests a success manual registration with the register form', () => {
        cy.visit(`localhost:3000/register`);
      
        cy.get('#name').type("bkfdev");
        cy.get('#email').type("bkfdev@gmail.com");
        cy.get('#password').type("password");
        cy.get('#passwordConfirmation').type("password");
        cy.get('button[type="submit"]').click();
        cy.location('pathname').should('equal', '/dashboard');

    });
});
