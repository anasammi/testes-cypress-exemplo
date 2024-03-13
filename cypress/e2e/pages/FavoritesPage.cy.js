/// <reference types="cypress" />

describe('renderiza página de favoritos', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/favorites')
    })
  
    it('acessa a url correta da página de favoritos', () => {
        cy.url().should('eq', 'http://localhost:3000/favorites')
    })
  
    it('renderiza título do site no cabeçalho', () => {
        cy.get('header h1').contains('Dog CEO - gerador de dogs aleatórios')
    })
  
    it('renderiza botão de troca de navegação no cabeçalho', () => {
        cy.get('header button').contains('Ir para Homepage')
    })
  
    it('renderiza botão de salvar no local storage', () => {
        cy.get('button').contains('Salvar no local storage')
    })
  
    it('renderiza botão de limpar local storage', () => {
        cy.get('button').contains('Limpar local storage')
    })
  
    it('renderiza lista vazia de cards de dogs', () => {
        cy.get('.card').should('have.length', 0)
    })
  })