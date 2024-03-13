/// <reference types="cypress" />

describe("botão de navegação do header", () => {
  it("redireciona da página homepage para favoritos", () => {
    // entre na url da página homepage
    cy.visit("http://localhost:3000");
    // selecione o botão através do atributo data-testid e clique nele
    cy.get('[data-testId="go-to-favorites-button"]').click()
    // verifique se a url atual foi alterada para a página favoritos
    cy.url().should('eq', 'http://localhost:3000/favorites')
  });

  it("redireciona da página de favoritos para homepage", () => {
    // entre na url da página favoritos
    cy.visit("http://localhost:3000/favorites");
    // selecione o botão através do atributo data-testid e clique nele
    cy.get('[data-testId="go-to-homepage-button"]').click()
    // verifique se a url atual foi alterada para a página homepage
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it("redireciona da página 404 para homepage", () => {
    // entre em uma url que não exista
    cy.visit("http://localhost:3000/not-found");
    // selecione o botão através do atributo data-testid e clique nele
    cy.get('[data-testId="go-homepage-button"]').click()
    // verifique se a url atual foi alterada para a página homepage
    cy.url().should('eq', 'http://localhost:3000/')
  });
});
