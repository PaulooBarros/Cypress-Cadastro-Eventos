// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('fazerLogin', function(){
    cy.get('#username').should('be.visible').type('admin').should('have.value', 'admin');
    cy.get('#password').should('be.visible').type('1234').should('have.value', '1234');
    cy.get('.login-button').should('be.visible').click();

    // Aguarde a mensagem de login ser visível
    cy.get('.mensagem-login', { timeout: 20000 }).should('be.visible');

})
 

// cypress/support/commands.js
Cypress.Commands.add('tresEventos', function() {
    cy.get('#nome').type('Jogo do Confiança').should('have.value', 'Jogo do Confiança');
    cy.get('#local').type('Batistão').should('have.value', 'Batistão');
    cy.get('#valor').type(25).should('have.value', 25); 
    cy.get('#data').type('2024-10-25');
    cy.get('#atracoes').type('Confiança').should('have.value', 'Confiança');
    cy.get('#descricao').type('Valendo Vaga na Próxima Fase');
    cy.get('.submit-button').click()
    cy.get('.mensagem-cadastro').should('be.visible')

     // Segundo evento
     cy.get('#nome').type('Concerto da Filarmônica').should('have.value', 'Concerto da Filarmônica');
     cy.get('#local').type('Teatro Tobias Barreto').should('have.value', 'Teatro Tobias Barreto');
     cy.get('#valor').type('50').should('have.value', '50');
     cy.get('#data').type('2024-11-10').should('have.value', '2024-11-10');
     cy.get('#atracoes').type('Orquestra Sinfônica').should('have.value', 'Orquestra Sinfônica');
     cy.get('#descricao').type('Concerto de fim de ano').should('have.value', 'Concerto de fim de ano');
     cy.get('.submit-button').click();
     cy.get('.mensagem-cadastro').should('be.visible');

     // Terceiro evento
     cy.get('#nome').type('Feira de Artesanato').should('have.value', 'Feira de Artesanato');
     cy.get('#local').type('Praça Fausto Cardoso').should('have.value', 'Praça Fausto Cardoso');
     cy.get('#valor').type('10').should('have.value', '10');
     cy.get('#data').type('2024-12-05').should('have.value', '2024-12-05');
     cy.get('#atracoes').type('Artesãos locais').should('have.value', 'Artesãos locais');
     cy.get('#descricao').type('Exposição e venda de artesanato local').should('have.value', 'Exposição e venda de artesanato local');
     cy.get('.submit-button').click();
     cy.get('.mensagem-cadastro').should('be.visible');
});