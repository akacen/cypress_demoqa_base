import BasePage from "./BasePage";

class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get fields(){
      return cy.get(".list-group-item"); 
  }

  static findField(value){
      return this.fields.contains(value);
  }

  static get gridTab(){
      return cy.get("#demo-tab-grid");
  }

}

export default SelectablePage;