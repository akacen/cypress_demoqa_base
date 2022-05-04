import BasePage from "./BasePage";

class WebTablesPage extends BasePage {
  static get url() {
    return "/webtables";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }

  static get addButton(){
      return cy.get("#addNewRecordButton");
  }

  static get firstNameInputField(){
    return cy.get("#firstName");
  }

  static get lastNameInputField(){
    return cy.get("#lastName");
  }

  static get emailInputField(){
    return cy.get("#userEmail");
  }

  static get ageInputField(){
    return cy.get("#age");
  }

  static get salaryInputField(){
    return cy.get("#salary");
  }

  static get departmentInputField(){
    return cy.get("#department");
  }

  static get submtiButton(){
    return cy.get("#submit");
  }

  static get rows(){
    return cy.get(".rt-tr-group");
  }

  static findRow(value){
    return this.rows.contains(value).parent();
  }

  static deleteUser(value){
      return this.findRow(value).find("[title='Delete']");
  }

}

export default WebTablesPage;