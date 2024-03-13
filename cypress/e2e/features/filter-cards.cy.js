/// <reference types="cypress" />

describe("campo de filtro de raça de dogs", () => {
  it("filtra corretamente ao ser digitado", () => {
    // entre na url da página homepage
    cy.visit("http://localhost:3000");
    // espere a página carregar os cards completamente
    cy.wait(2000);
    // selecione o texto da raça do primeiro card (é ele que usaremos para filtrar)
    cy.get(".card p").first().invoke("text").as("breedToFilter");
    // 1.1 selecione a raça escolhida para conseguir digitar seu texto no input
    cy.get("@breedToFilter").then((breedToFilter) => {
      // 1.2 selecione o input via data-testid e digita o texto selecionado
      cy.get('[data-testid="filter-breed-input"').type(breedToFilter);
    });

    // verifice se a lista de card de dogs foi filtrada corretamente
    cy.get(".card").should("have.length.gte", 1); //greater than or equal
    cy.get(".card").should("have.length.lte", 10); //larger than or equal
    cy.get("@breedToFilter").then((breedToFilter) => {
      cy.contains(breedToFilter);
    });
  });
});
