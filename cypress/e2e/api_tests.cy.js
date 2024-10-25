describe('Testes de API - Obter lista de produtos', () => {
    it('Deve retornar a lista de todos os produtos com sucesso', () => {
        cy.request('GET', 'https://automationexercise.com/api/productsList')
            .then((response) => {
                expect(response.status).to.eq(200);

                const body = JSON.parse(response.body);

                expect(body).to.have.property('responseCode', 200);

                expect(body.products).to.be.an('array');

                expect(body.products.length).to.be.greaterThan(0);
            });
    });
});