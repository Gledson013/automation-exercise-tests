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

import SignupPage from '../pages/signup/SignupPage';

// Suite de testes: Cadastro de Novo Usuário (História de Usuário 1)
describe('História de Usuário 1: Cadastro de Novo Usuário', () => {

    // Executa antes de cada teste
    beforeEach(() => {
        LoginPage.visit();  // Visita a página de cadastro
    });

    // Caso de teste 1: Exibir formulário de cadastro com os campos obrigatórios
    it('Deve exibir o formulário de cadastro com os campos: nome, e-mail e senha', () => {
        // Critério de aceite: O sistema deve exibir um formulário de cadastro com os campos nome, e-mail e senha.
        SignupPage.verifyFormFields(['Nome', 'E-mail', 'Senha']);  // Verifica os campos obrigatórios
    });

    // Caso de teste 2: Cadastrar usuário com e-mail válido
    it('Deve permitir o cadastro de um novo usuário com um e-mail válido', () => {
        // Critério de aceite: Deve ser possível cadastrar apenas usuários com um e-mail válido.
        SignupPage.fillName('Novo Usuário');
        SignupPage.fillEmail('usuario@exemplo.com');
        SignupPage.fillPassword('senha123');
        SignupPage.submit();

        // Verifica se o usuário foi redirecionado para a página de confirmação
        SignupPage.verifyRedirectionToConfirmation();
    });

    // Caso de teste 3: Bloquear cadastro com e-mail inválido
    it('Deve bloquear o cadastro se o e-mail for inválido', () => {
        SignupPage.fillName('Novo Usuário');
        SignupPage.fillEmail('emailinvalido');  // E-mail inválido
        SignupPage.fillPassword('senha123');
        SignupPage.submit();

        // Verifica se o sistema exibe uma mensagem de erro para o e-mail inválido
        SignupPage.verifyErrorMessage('Insira um e-mail válido');
    });
});
