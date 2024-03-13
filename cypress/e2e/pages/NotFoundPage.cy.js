/// <reference types="cypress" />

describe('renderiza página de não encontrado', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/not-found')
    })
  
    it('renderiza título com mensagem de erro', () => {
        cy.get('h1').contains('Ops! Essa página não existe!')
    })
  
    it('renderiza botão de navegação para homepage', () => {
        cy.get('button').contains('Ir para Homepage')
    })
  })