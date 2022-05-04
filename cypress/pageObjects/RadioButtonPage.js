import BasePage from "./BasePage";

class RadioButtonPage extends BasePage {
  static get url() {
    return "/radio-button";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }

  static get yesRadioButton(){
    return cy.get("#yesRadio");
  }

  static get impressiveRadioButton(){
      return cy.get("#impressiveRadio");
  }

  static get resultsSection(){
      return cy.get(".text-success");
  }
  static get noRadioButton(){
    return cy.get("#noRadio");
  }

}

export default RadioButtonPage;