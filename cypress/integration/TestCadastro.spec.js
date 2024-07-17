// TestCadastro.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Teste Cadastro Eventos', () => {
    beforeEach(() => {
        cy.visit('./src/feed.html')
    })
    it('Testando Título da Página', function(){
        cy.get('.event-form > h1').should('contain','Cadastro de Eventos').should('be.visible')
    })

    it('Testando Existencia da Tabela',function(){
        cy.get('.eventos-table-wrapper > h1').should('contain','Eventos Cadastrados').should('be.visible')
        
    })

    it.only('Preenchendo 3 eventos', function(){
        cy.tresEventos()
    })
})