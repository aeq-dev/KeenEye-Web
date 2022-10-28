describe('Authentication test', () => {
    it('tests a success manual authentication with the login form', () => {        
        cy.visit(`localhost:3000/login`);            
        cy.get('#email').type("bkfdev@gmail.com");
        cy.get('#password').type("password");
        
        cy.get('button[type="submit"]').click();
        cy.location('pathname').should('equal', '/dashboard');
        
    });
});
