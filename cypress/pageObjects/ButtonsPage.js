import BasePage from "./BasePage";

class ButtonsPage extends BasePage {
  static get url() {
    return "/buttons";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }

  static get doubleClickButton() {
    return cy.get("#doubleClickBtn");
  }

  static get rightClickButton() {
    return cy.get("#rightClickBtn");
  }

  static get dblClickMessage(){
    return cy.get("#doubleClickMessage");
  }

  static get rightClickMessage(){
    return cy.get("#rightClickMessage");
  }

  static get dynamicClickMessage(){
      return cy.get("#dynamicClickMessage");
  }
  static get dynamicClickButton() {
    return cy.get(".btn-primary").contains(/^Click Me/);
  }
}

export default ButtonsPage;