// TestLogin.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Teste Index Roteiro Aju', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/src/login.html')
    })

    it.only('preenchendoLogin', function(){
        cy.fazerLogin()
     })
    
    it.only('Login sem senha', function(){
        cy.get('#username').type('admin')
        cy.get('.login-button').click()
        cy.get('h1').should('contain','Login').should('be.visible')
     })
    it.only('Login sem username', function(){
        cy.get('#password').type(1234)
        cy.get('.login-button').click()
        cy.get('h1').should('contain','Login').should('be.visible')
     })
    it.only('Login com dados inválidos', function(){
        cy.get('#username').type('administrador')
        cy.get('#password').type(1234)
        cy.get('.login-button').click()
        cy.get('h1').should('contain','Login').should('be.visible')
        cy.get('.mensagem-erro-login').should('be.visible') // Mensagem escura. Mudar cor.
     })

})