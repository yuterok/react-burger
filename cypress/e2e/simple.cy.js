const selectors = {
  ingredient: '[data-cy="ingredient"]',
  constructor: '[data-cy="burger-constructor"]',
  modal: '[data-cy="modal"]',
};

describe("testing Burger Constructor", () => {
  beforeEach(() => {
    let email = "yuterok@mail.ru";
    let password = "pass";
    cy.visit("/login");
    cy.get("[type=email]").type(`${email}{enter}`);
    cy.get("[type=password]").type(`${password}{enter}`);
  });

  it("should drag an ingredient into constructor", () => {
    cy.get(selectors.ingredient).first().as("ingredient");
    cy.get("@ingredient").trigger("dragstart");
    cy.get(selectors.constructor).trigger("drop");
    cy.get(selectors.constructor)
      .find(".constructor-element")
      .should("have.length.greaterThan", 0);
  });
  it("should create an order", () => {
    cy.get(selectors.ingredient).as("ingredient");
    cy.get(selectors.ingredient).contains("булка").trigger("dragstart");
    cy.get(selectors.constructor).trigger("drop");
    cy.get(selectors.ingredient).contains("Соус").trigger("dragstart");
    cy.get(selectors.constructor).trigger("drop");
    cy.get('[data-cy="makeOrder"]').click();
    cy.get(selectors.modal, { timeout: 5000 }).should("be.visible");
    cy.get('[data-cy="order-details"]', { timeout: 20000 }).should(
      "contain.text",
      "идентификатор заказа"
    );
    cy.get('[data-cy="close-modal"]').find("svg").click();
    cy.get(selectors.modal).should("not.exist");
  });
  it("should close modal by Escape", () => {
    cy.get(selectors.ingredient).first().click();
    cy.get(selectors.modal, { timeout: 1000 }).should("be.visible");
    cy.get("body").type("{esc}");
    cy.get(selectors.modal).should("not.exist");
  });
  it("should close modal by pressing button", () => {
    cy.get(selectors.ingredient).first().click();
    cy.get(selectors.modal, { timeout: 1000 }).should("be.visible");
    cy.get('[data-cy="close-modal"]').find("svg").click();
    cy.get(selectors.modal).should("not.exist");
  });
  it("should close modal by clicking anywhere", () => {
    cy.get(selectors.ingredient).first().click();
    cy.get(selectors.modal, { timeout: 1000 }).should("be.visible");
    cy.get("body").click(0, 0);
    cy.get(selectors.modal).should("not.exist");
  });
});
