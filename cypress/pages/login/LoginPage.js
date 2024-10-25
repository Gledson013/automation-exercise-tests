import { locatorLogin } from "./locators.Loginjs";

class LoginPage {
    visit() {
        cy.visit('/login');
    }

    fillEmail() {
        cy.get(locatorLogin.email).type('userTesteAdm@bom.com.br');
    }

    emailInvalid() {
        cy.get(locatorLogin.email).type('userTesteAdm@bo.com');
    }

    msgIncorrectEmailPassword() {
        cy.contains('Your email or password is incorrect!').should('be.visible');
    }

    fillPassword() {
        cy.get(locatorLogin.password).type("Adm123");
    }

    loginButton() {
        cy.get(locatorLogin.submitButton).click();
    }

    confirmaLoginSuccess() {
        cy.get(locatorLogin.verifyLogout).should('contain', 'Logout');
    }

    verifyErrorMessage(message) {
        cy.get('.error-message').should('contain', message);
    }

    clickSignupButton() {
        cy.get('[data-qa="signup-button"]').click();
    }
}

export default new LoginPage();
