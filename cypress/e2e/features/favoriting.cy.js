/// <reference types="cypress" />

describe('gestão de dogs favoritos', () => {
    it('adiciona um card na lista de favoritos', () => {
      // entre na url da página homepage
      cy.visit('http://localhost:3000')
  
      // espere a página carregar os cards completamente
      cy.wait(2000)
  
      // selecione o texto da raça do primeiro card
      cy.get('.card p').first().invoke('text').as('breedText', { type: 'static' })
  
      // selecione o primeiro card e clique em seu botão de favoritar
      cy.get('.card').first().contains('Favoritar').click()
  
      // confirme que o card escolhido não é mais renderizado na homepage
      cy.get('@breedText').then((breedText) => {
        cy.contains(breedText).should('not.exist')
      })
  
      /* selecione o botão de navegação para página de favoritos
          através do atributo data-testid e clique nele */
      cy.get('[data-testid="go-to-favorites-button"]').click()
  
      // confirme que o card escolhido agora é renderizado na página favoritos
      cy.get('@breedText').then((breedText) => {
        cy.contains(breedText).should('exist')
      })
    })
  
    it('remove um card da lista de favoritos', () => {
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
  
      // selecione o primeiro card e clique em seu botão de remover dos favoritos
      cy.get('.card').first().contains('Remover').click()
  
      // confirme que o card escolhido não é mais renderizado na página favoritos
      cy.get('@breedText').then((breedText) => {
        cy.contains(breedText).should('not.exist')
      })
  
      /* selecione o botão de navegação para página homepage 
          através do atributo data-testid e clique nele */
      cy.get('[data-testid="go-to-homepage-button"]').click()
  
      // confirme que o card voltou a ser renderizado na página homepage
      cy.get('@breedText').then((breedText) => {
        cy.contains(breedText).should('exist')
      })
    })
  })