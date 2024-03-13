/// <reference types="cypress" />

describe('botão de geração de novos cards de dogs', () => {
    it('gera novos cards ao ser clicado', () => {
      // entre na url da página homepage
        cy.visit('http://localhost:3000')
      // espere a página carregar os cards completamente
        cy.wait(2000)
      // pegue os dez cards de dogs antes de clicar no botão
        cy.get('.card').should('have.length', 10).as('initialCards')
      // selecione o botão através do atributo data-testid e clique nele
        cy.get('[data-testid="regenerate-button"]').click()
      // espere a página carregar os novos cards completamente
        cy.wait(2000)
      // pegue os dez cards de dogs após clicar no botão
        cy.get('.card').should('have.length', 10).as('newCards')
      // compare os dez cards antigos com os novos (devem ser diferentes)
        cy.get('@initialCards').should('not.deep.equal', cy.get('@newCards'))
    })
  })