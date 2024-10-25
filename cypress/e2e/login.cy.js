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

    it.only('Deve permitir o login com e-mail e senha válidos', () => {
        // Critério de aceite: O sistema deve permitir o login com e-mail e senha válidos.
        LoginPage.fillEmail('usuario@valido.com');
        LoginPage.fillPassword('senhaValida123');
        LoginPage.submit();

        // Verifica se o login foi bem-sucedido e o usuário foi redirecionado corretamente
        LoginPage.verifyLoginSuccess();
    });

    it('Deve bloquear tentativas de login com credenciais inválidas e exibir uma mensagem de erro', () => {
        // Critério de aceite: O sistema deve bloquear tentativas com credenciais inválidas.
        LoginPage.fillEmail('usuario@invalido.com');
        LoginPage.fillPassword('senhaInvalida123');
        LoginPage.submit();

        // Verifica se a mensagem de erro é exibida corretamente
        LoginPage.verifyErrorMessage('Credenciais inválidas');
    });

});

