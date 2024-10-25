import CadastroPage from '../pages/cadastro_usuario/cadastroUserPage';
/// reference types="cypress" />

describe('História de Usuário 1: Cadastro de Novo Usuário', () => {

    beforeEach(() => {
        CadastroPage.visit();
    });

    it('Deve exibir o formulário de cadastro com os campos: nome, e-mail e senha', () => {
        CadastroPage.submit();
    });

    it('Deve permitir o cadastro de um novo usuário com um e-mail válido', () => {
        CadastroPage.fillName();
        CadastroPage.fillEmail();
        CadastroPage.submit();
        CadastroPage.verifyRedirectionToConfirmationSignup();
        CadastroPage.enterAccountInformation();
        CadastroPage.addressInformation();
        CadastroPage.verifyToConfirmationCreate();
    });

    it('Deve bloquear o cadastro se o e-mail for inválido', () => {
        CadastroPage.fillName();
        CadastroPage.submit();
        CadastroPage.fillEmailError();
        CadastroPage.verifyErrorMsgEmail();
    });
});