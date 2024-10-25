import { locatorCadastroUsuario } from "./locators";
const faker = require('faker-br');
/// reference types="cypress" />

class cadastroPage {

  visit() {
    cy.visit('/login');
  }

  fillName() {
    this.nameUser = faker.name.findName();
    console.log('Nome gerado:', this.nameUser);
    cy.get(locatorCadastroUsuario.name).type(this.nameUser);
  }

  fillEmail() {
    const email = faker.internet.email();
    cy.get(locatorCadastroUsuario.email).type(email);
  }

  fillEmailError() {
    cy.get(locatorCadastroUsuario.email).type('emailinvalido');
  }

  // verifyErrorMsgEmail() {
  //   cy.get(locatorCadastroUsuario.email)
  //     .then($input => {
  //       const validationMessage = $input[0].validationMessage.trim();
  //       expect(validationMessage).to.include('Inclua um "@" no endereço de e-mail.');
  //     });
  // }

  verifyErrorMsgEmail() {
    cy.get(locatorCadastroUsuario.email).then(($input) => {
      const validationMessage = $input[0].validationMessage;

      // Verifica se a mensagem é em português ou inglês
      if (validationMessage.includes('Inclua um "@" no endereço de e-mail.')) {
        expect(validationMessage).to.include('Inclua um "@" no endereço de e-mail.');
      } else if (validationMessage.includes('Please')) {
        expect(validationMessage).to.include('Please');
      } else {
        throw new Error('Mensagem de validação inesperada: ' + validationMessage);
      }
    });
  }


  submit() {
    cy.get(locatorCadastroUsuario.signupButton).click();
  }

  verifyRedirectionToConfirmationSignup() {
    cy.url().should('include', '/signup');
  }

  enterAccountInformation() {
    cy.get(locatorCadastroUsuario.title).click();
    cy.get(locatorCadastroUsuario.password).type('Adm123');
    cy.get(locatorCadastroUsuario.dayBirth).select('27');
    cy.get(locatorCadastroUsuario.monthBirth).select('11');
    cy.get(locatorCadastroUsuario.yearBirth).select('2015');
    cy.get(locatorCadastroUsuario.newsletterSign).click();
  }

  addressInformation() {
    cy.get(locatorCadastroUsuario.firtName).type(this.nameUser);
    cy.get(locatorCadastroUsuario.lastName).type(this.nameUser);
    cy.get(locatorCadastroUsuario.address).type('Rua Teste');
    cy.get(locatorCadastroUsuario.country).select('Canada');
    cy.get(locatorCadastroUsuario.state).type('Teste');
    cy.get(locatorCadastroUsuario.city).type('Teste');
    cy.get(locatorCadastroUsuario.zipCode).type('12345');
    cy.get(locatorCadastroUsuario.mobileNumber).type('123456789');
    cy.get(locatorCadastroUsuario.createAccount, { timeout: 10000 }).scrollIntoView().click();
  }

  verifyToConfirmationCreate() {
    cy.url().should('include', '/account_create');
    cy.get('b').should('contain', 'Account Created!');
  }

}

export default new cadastroPage();