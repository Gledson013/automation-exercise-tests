# Automation Exercise Tests

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Gledson013/automation-exercise-tests.git
   cd automation-exercise-tests

2. Instale as dependências:
   ```bash
   npm install

3. Execute o Cypress:
   - Para abrir a interface gráfica do Cypress:
     ```bash
     npm run test

   - Para rodar os testes diretamente no terminal:
     ```bash
     npm run run-tests

Para executar os testes de API automatizados com Cypress, utilize o seguinte comando:

```bash
npx cypress run --spec "cypress/e2e/api_tests.cy.js"


## Requisitos
- Node.js v16 ou superior

## Notas sobre Vulnerabilidades em Dependências

Este projeto utiliza ferramentas como **Cypress**, **Lighthouse** e **OWASP ZAP** para realizar testes E2E e API. Durante a instalação das dependências, o comando `npm audit` reportou algumas vulnerabilidades em pacotes, como `chrome-launcher`, `lodash.set`, e `minimist`.

### Contexto das Vulnerabilidades:

- Algumas dessas vulnerabilidades são identificadas em pacotes desatualizados ou depreciados, mas que são dependências essenciais para as ferramentas utilizadas neste projeto.
- As vulnerabilidades não afetam diretamente o ambiente de teste, considerando que o foco deste projeto é **testes automatizados** em ambiente de desenvolvimento, e não produção.

### Ações Tomadas:

- O comando `npm audit fix --force` foi utilizado para corrigir vulnerabilidades, sempre que possível, sem quebrar as dependências críticas.
- No entanto, algumas vulnerabilidades permanecem sem correções disponíveis. Essas vulnerabilidades foram documentadas para acompanhamento e revisão futura.

### Impacto:

- As vulnerabilidades não comprometem os **testes E2E, de API, de segurança e de performance** realizados no projeto, uma vez que o ambiente de execução dos testes não está em produção e os pacotes são utilizados estritamente para fins de validação técnica.
- No contexto do processo seletivo, essas vulnerabilidades podem ser ignoradas, já que o foco é demonstrar a **validade funcional dos testes**.

### Próximos Passos:

- Caso o projeto evolua para um ambiente de produção, recomenda-se substituir as dependências vulneráveis por alternativas mais seguras ou pacotes atualizados.
