// TestIndex.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Teste Index Roteiro Aju', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })
     

    it('Testando o Título', function(){
        cy.get('h1').should('contain', 'Bem-vindo ao Roteiro Aju').should('be.visible')
    })

    it('Testando Botão Política de Privacidade ida e Volta', function(){
        cy.get('.intro-button-policy').click()
        cy.get('h1').should('contain', 'Política de Privacidade').should('be.visible')
        cy.contains('.back-button','VOLTAR').click()
        cy.get('h1').should('contain', 'Bem-vindo ao Roteiro Aju').should('be.visible')
    })

    it('Testando Botão Sobre Nós ida e Volta', function(){
        cy.get('.intro-button-about').click()
        cy.get('h1').should('contain','Sobre Nós').should('be.visible')
        cy.contains('.back-button','VOLTAR').click()
        cy.get('h1').should('contain', 'Bem-vindo ao Roteiro Aju').should('be.visible')
    })

    it('Testando Botão de Login', function(){
        cy.get('[href="login.html"]').click()
        cy.get('h1').should('contain','Login').should('be.visible')
        // Criar Botão para Voltar. Inexistente.
    })

    it('Testando Botão Cadastro', function(){
        cy.get('[href="cadastro.html"]').click()
        cy.get('h1').should('contain','Cadastro').should('be.visible')
        // Criar Botão para Voltar. Inexistente.
    })

    it('Preenchendo Tudo e Cadastrando 3 eventos', function(){
        cy.get('[href="login.html"]').click()
        cy.fazerLogin()
        cy.tresEventos()
    })
    
})   
 