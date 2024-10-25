// import LoginPage from '../pages/login/LoginPage';

// describe('Testes de Login', () => {

//     beforeEach(() => {
//         LoginPage.visit();
//     });

//     it.only('Deve fazer login com sucesso usando usuário cadastrado', () => {
//         LoginPage.clickSignupButton();
//     });



//     it('Deve falhar com credenciais inválidas', () => {
//         // Preenche os campos de email e senha
//         LoginPage.fillEmail('user@example.com');
//         LoginPage.fillPassword('wrongpassword');
//         LoginPage.submit();  // Clica no botão de logi
//         // Verifica se a mensagem de erro está correta
//         LoginPage.verifyErrorMessage('Credenciais inválidas');
//     });
// });

import LoginPage from '../pages/login/LoginPage';

describe('História de Usuário 2: Login no Sistema', () => {

    // Executa antes de cada teste
    beforeEach(() => {
        LoginPage.visit();  // Visita a página de login
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

