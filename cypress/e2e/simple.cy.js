describe("testing Burger Constructor", () => {
  beforeEach(() => {
    let email = "yuterok@mail.ru";
    let password = "pass";
    cy.visit("http://localhost:3000/login");
    cy.get("[type=email]").type(`${email}{enter}`);
    cy.get("[type=password]").type(`${password}{enter}`);
  });

  it("should drag an ingredient into constructor", () => {
    cy.get('[data-cy="ingredient"]').first().as("ingredient");
    cy.get('[data-cy="burger-constructor"]').as("constructor");
    cy.get("@ingredient").trigger("dragstart");
    cy.get("@constructor").trigger("drop");
    cy.get('[data-cy="burger-constructor"]')
      .find(".constructor-element")
      .should("have.length.greaterThan", 0);
  });
  it("should create an order", () => {
    cy.get('[data-cy="burger-constructor"]').as("constructor");
    cy.get('[data-cy="ingredient"]').contains("булка").trigger("dragstart");
    cy.get('[data-cy="burger-constructor"]').trigger("drop");
    cy.get('[data-cy="ingredient"]').contains("Соус").trigger("dragstart");
    cy.get('[data-cy="burger-constructor"]').trigger("drop");
    cy.get('[data-cy="makeOrder"]').click();
    cy.get('[data-cy="modal"]', { timeout: 5000 }).should("be.visible");
    cy.get('[data-cy="order-details"]', { timeout: 20000 }).should(
      "contain.text",
      "идентификатор заказа"
    );
    cy.get('[data-cy="close-modal"]').find("svg").click();
    cy.get('[data-cy="modal"]').should("not.exist");
  });
  it("should close modal by Escape", () => {
    cy.get('[data-cy="ingredient"]').first().as("ingredient").click();
    cy.get('[data-cy="modal"]', { timeout: 1000 }).should("be.visible");
    cy.get("body").type("{esc}");
    cy.get('[data-cy="modal"]').should("not.exist");
  });
  it("should close modal by pressing button", () => {
    cy.get('[data-cy="ingredient"]').first().as("ingredient").click();
    cy.get('[data-cy="modal"]', { timeout: 1000 }).should("be.visible");
    cy.get('[data-cy="close-modal"]').find("svg").click();
    cy.get('[data-cy="modal"]').should("not.exist");
  });
  it("should close modal by clicking anywhere", () => {
    cy.get('[data-cy="ingredient"]').first().as("ingredient").click();
    cy.get('[data-cy="modal"]', { timeout: 1000 }).should("be.visible");
    cy.get("body").click(0, 0);
    cy.get('[data-cy="modal"]').should("not.exist");
  });
});
