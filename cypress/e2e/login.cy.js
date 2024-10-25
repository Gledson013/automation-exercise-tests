import LoginPage from '../pages/login/LoginPage';

describe('História de Usuário 2: Login no Sistema', () => {

    beforeEach(() => {
        LoginPage.visit();
    });

    it('Deve permitir o login com e-mail e senha válidos', () => {
        LoginPage.fillEmail();
        LoginPage.fillPassword();
        LoginPage.loginButton();
        LoginPage.confirmaLoginSuccess();
    });

    it('Deve bloquear tentativas de login com credenciais inválidas e exibir uma mensagem de erro', () => {
        LoginPage.emailInvalid();
        LoginPage.fillPassword();
        LoginPage.loginButton();
        LoginPage.msgIncorrectEmailPassword();
    });

});

