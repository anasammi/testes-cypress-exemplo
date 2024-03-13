/// <reference types="cypress" />

describe('renderiza página home', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('renderiza título do site no cabeçalho', () => {
        cy.get('header h1').contains('Dog CEO - gerador de dogs aleatórios')
    })
  
    it('renderiza botão de troca de navegação no cabeçalho', () => {
        cy.get('header button').contains('Ver favoritos')
    })
  
    it('renderiza botão de atualização das imagens de dogs', () => {
        cy.get('button').contains('Gerar novamente')
    })
  
    it('renderiza campo de pesquisa por raça de dog', () => {
        cy.get('input[placeholder="Digite uma raça"]')
    })
  
    it('renderiza lista com 10 cards de dogs', () => {
        cy.get('.card').should('have.length', 10)
    })
  
    it('renderiza cada card contendo um texto com a raça do dog', () => {
        cy.get('.card p').should('have.length', 10)
    })
  
    it('renderiza cada card contendo uma imagem do dog', () => {
        cy.get('.card img').should('have.length', 10)
    })
  
    it('renderiza cada card contendo um botão de favoritar', () => {
        cy.get('.card button').contains('Favoritar')
    })
  })