// TestandoPaginaPolitica.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Teste Política e Privacidade Roteiro Aju', () => {
    beforeEach(() => {
        cy.visit('./src/privacy.html')
    })

    it('Testando Título da Página', function(){
        cy.get('h1').should('contain','Política de Privacidade').should('be.visible')
    })

    it('Testando Botão Voltar',function(){
        cy.contains('.back-button','VOLTAR').click()
        cy.get('h1').should('contain','Bem-vindo ao Roteiro Aju').should('be.visible')
        
    })
})