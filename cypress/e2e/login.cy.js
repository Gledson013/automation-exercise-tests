import LoginPage from '../pages/LoginPage';

describe('Testes de Login', () => {

    beforeEach(() => {
        LoginPage.visit();
    });

    it.only('Deve fazer login com sucesso usando usuário cadastrado', () => {
        LoginPage.clickSignupButton();
    });



    it('Deve falhar com credenciais inválidas', () => {
        // Preenche os campos de email e senha
        LoginPage.fillEmail('user@example.com');
        LoginPage.fillPassword('wrongpassword');
        LoginPage.submit();  // Clica no botão de logi
        // Verifica se a mensagem de erro está correta
        LoginPage.verifyErrorMessage('Credenciais inválidas');
    });
});
