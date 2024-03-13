/// <reference types="cypress" />

describe('gestão do local storage', () => {
    // antes de cada teste, limpe o local storage
    beforeEach(() => {
      cy.clearLocalStorage()
    })
  
    it('salva lista de favoritos', () => {
      // entre na url da página homepage
      cy.visit('http://localhost:3000')
  
      // espere a página carregar os cards completamente
      cy.wait(2000)
  
      // selecione o texto da raça do primeiro card
      cy.get('.card p').first().invoke('text').as('breedText', { type: 'static' })
  
      // selecione o primeiro card e clique em seu botão de favoritar
      cy.get('.card').first().contains('Favoritar').click()
  
      /* selecione o botão de navegação para página de favoritos
          através do atributo data-testid e clique nele */
      cy.get('[data-testid="go-to-favorites-button"]').click()
  
      /* selecione o botão de salvar favoritos no local storage
          através do atributo data-testid e clique nele */
      cy.get('button').contains('Salvar no local storage').click()
  
      // recarregue a página favoritos
      cy.reload()
  
      // confirme que o card escolhido continua sendo renderizado na página favoritos
      cy.get('@breedText').then((breedText) => {
        cy.contains(breedText).should('exist')
      })
    })
  
    it('limpa lista de favoritos', () => {
      // entre na url da página homepage
      cy.visit('http://localhost:3000')
  
      // espere a página carregar os cards completamente
      cy.wait(2000)
  
      // selecione o texto da raça do primeiro card
      cy.get('.card p').first().invoke('text').as('breedText', { type: 'static' })
  
      // selecione o primeiro card e clique em seu botão de favoritar
      cy.get('.card').first().contains('Favoritar').click()
  
      /* selecione o botão de navegação para página de favoritos
          através do atributo data-testid e clique nele */
      cy.get('[data-testid="go-to-favorites-button"]').click()
  
      /* selecione o botão de salvar favoritos no local storage
          através do atributo data-testid e clique nele */
      cy.get('button').contains('Salvar no local storage').click()
  
      // recarregue a página favoritos
      cy.reload()
  
      /* selecione o botão de limpar favoritos do local storage
          através do atributo data-testid e clique nele */
      cy.get('button').contains('Limpar local storage').click()
  
      // recarregue a página favoritos
      cy.reload()
  
      // confirme que nenhum card é renderizado na página favoritos
      cy.get('.card').should('not.exist')
    })
  })