// cypress/pages/LoginPage.js

class LoginPage {
    visit() {
        cy.visit('/login');  // Navega para a página de login
    }

    fillEmail(email) {
        cy.get('input[name="email"]').type(email);  // Preenche o email
    }

    fillPassword(password) {
        cy.get('input[name="password"]').type(password);  // Preenche a senha
    }

    submit() {
        cy.get('button[type="submit"]').click();  // Clica no botão de login
    }

    verifyErrorMessage(message) {
        cy.get('.error-message').should('contain', message);  // Verifica a mensagem de erro
    }

    clickSignupButton() {
        cy.get('[data-qa="signup-button"]').click();  // Clica no botão de cadastro
    }
}

export default new LoginPage();  // Exporta uma nova instância da página
