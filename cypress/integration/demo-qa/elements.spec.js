import ButtonsPage from "../../pageObjects/ButtonsPage";
import CheckBoxPage from "../../pageObjects/CheckBoxPage";
import RadioButtonPage from "../../pageObjects/RadioButtonPage";
import SelectablePage from "../../pageObjects/SelectablePage";
import TextBoxPage from "../../pageObjects/textBoxPage";
import WebTablesPage from "../../pageObjects/WebTablesPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    it("Filling in Text Boxes", () => {
      // Add scenario stuff here
      //input info
      TextBoxPage.fullNameInputField.type("mans vards");
      TextBoxPage.emailInputField.type("usrname@domain.com");
      TextBoxPage.currentAddressInputField.type(
        "Random address 55"
      );
      TextBoxPage.permanentAddressInputField.type(
        "Another address 45"
      );
      //click submit
      TextBoxPage.submitButton.click();
      // validate info
      TextBoxPage.paragraphName
        .should("exist")
        .should("be.visible")
        .should("contain", "mans vards");

      TextBoxPage.paragraphEmail.should(
        "contain",
        "usrname@domain.com"
      );

      TextBoxPage.paragraphCurrentAddress.should(
        "contain",
        "Random address 55"
      );
      TextBoxPage.paragraphPermanentAddress.should(
        "contain",
        "Another address 45"
      );
    });

    it("Filling in Text Boxes", () => {
      cy.fixture('textBoxData').then((data) => {
        //cy.log(JSON.stringify(data));
        TextBoxPage.fullNameInputField.type(data.fullName);
        TextBoxPage.emailInputField.type(data.email);
        TextBoxPage.currentAddressInputField.type(data.currentAddress);
        TextBoxPage.permanentAddressInputField.type(data.permanentAddress);
        TextBoxPage.submitButton.click();
        TextBoxPage.paragraphName.should("contain", data.fullName);
        TextBoxPage.paragraphEmail.should("contain", data.email);
        TextBoxPage.paragraphCurrentAddress.should(
          "contain",
          data.currentAddress
        );
        TextBoxPage.paragraphPermanentAddress.should(
          "contain",
          data.permanentAddress
        );
      });
    });
  });

  context("Check Box scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });

    it("Click checkboxes - Notes and General", () => {
      //Click button to expand check boxes
      CheckBoxPage.expandButton.click();
      // Click Notes and General checkboxes
      CheckBoxPage.checkBoxTitles.contains('Notes').click();
      CheckBoxPage.checkBoxTitles.contains('General').click();
      // Validate
      CheckBoxPage.checkedResults
        .should("contain", "notes")
        .should("contain", "general");
    });

    it("Click checkboxes - Office", () => {
       //Click button to expand check boxes
       CheckBoxPage.expandButton.click();
       //Select all below Office
       CheckBoxPage.checkBoxTitles.contains('Office').click();
       //Validate office, public, private, classified, general
       CheckBoxPage.checkedResults
       .should("contain", "office")
       .should("contain", "public")
       .should("contain", "private")
       .should("contain", "classified")
       .should("contain", "general");
    });
  });

  context("Radio Button scenarios", () => {
    beforeEach(() => {
      RadioButtonPage.visit();
    });

    it("Click radio button", () => { //vajadzētu katru savā scenārijā
      //Click Yes
      RadioButtonPage.yesRadioButton.click();
      //Validate - yes is clicked
      RadioButtonPage.resultsSection.should("contain", "Yes");
      //Click Impressive
      RadioButtonPage.impressiveRadioButton.click();
      //Validate - impressive is clicked
      RadioButtonPage.resultsSection.should("contain", "Impressive");
      //disabled button
      RadioButtonPage.noRadioButton
        .should('exist')
        .should('be.disabled');
    });
  });

  context("Web Table scenarios", () => {
    beforeEach(() => {
      WebTablesPage.visit();
    });

    it("Create user in web table", () => {
      //Click Add button
      WebTablesPage.addButton.click();
      //Input necessary info about user
      WebTablesPage.firstNameInputField.type("Antra");
      WebTablesPage.lastNameInputField.type("Zālīte");
      WebTablesPage.emailInputField.type("name@domain.com");
      WebTablesPage.ageInputField.type("88");
      WebTablesPage.salaryInputField.type("50000");
      WebTablesPage.departmentInputField.scrollIntoView().type("theBest", {force: true});
      //Click Submit
      WebTablesPage.submtiButton.scrollIntoView().click({force: true});
      //Validate user in the list by email
      WebTablesPage.findRow("name@domain.com").should(
        "contain",
        "Zālīte"
      );
      WebTablesPage.findRow("name@domain.com").should(
        "contain",
        "Antra"
      );
    });

    it("Delete all users in list", () => {
      //Validate that these users exist
      WebTablesPage.rows.should("contain" ,"cierra@example.com");
      WebTablesPage.rows.should("contain" ,"alden@example.com");
      WebTablesPage.rows.should("contain" ,"kierra@example.com");
      //Delete user with email: cierra@example.com
      WebTablesPage.deleteUser("cierra@example.com").click();
      //Delete user with email: alden@example.com
      WebTablesPage.deleteUser("alden@example.com").click();
      //Delete user with email: kierra@example.com
      WebTablesPage.deleteUser("kierra@example.com").click();
      //Validate that users were deleted
      WebTablesPage.rows.should("not.contain" ,"cierra@example.com");
      WebTablesPage.rows.should("not.contain" ,"alden@example.com");
      WebTablesPage.rows.should("not.contain" ,"kierra@example.com");


    })
  });

  context("Special Button scenarios", () => {
    beforeEach(() => {
      ButtonsPage.visit();
    });

    it("Click all the buttons", () => {
      //Click double click
      ButtonsPage.doubleClickButton.dblclick();
      //Validate 
      ButtonsPage.dblClickMessage.should("be.visible");
      //Right click
      ButtonsPage.rightClickButton.rightclick();
      // Validate
      ButtonsPage.rightClickMessage.should("be.visible");
      //Random id
      ButtonsPage.dynamicClickButton.click();
      //Validate
      ButtonsPage.dynamicClickMessage.should("be.visible");


    });
  });

  context("Selectable scenarios", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it("Click fields", () => {
      //Click fields “Cras justo odio” and “Morbi leo risus”.
      SelectablePage.findField("Cras justo odio").click();
      SelectablePage.findField("Morbi leo risus").click();
      //validate changed state
      SelectablePage.findField("Cras justo odio").should("have.class", "active");
      SelectablePage.findField("Morbi leo risus").should("have.class", "active");
      //validate that others didn't change
      SelectablePage.findField("Dapibus ac facilisis in").should("not.have.class", "active");
      SelectablePage.findField("Porta ac consectetur ac").should("not.have.class", "active");
    });

    it.only("Click grid fields", () => {
      //Open "Grid"
      SelectablePage.gridTab.click();
      // Click “Two”, “Four”, “Six” and “Eight”
      SelectablePage.findField("Two").click();
      SelectablePage.findField("Four").click();
      SelectablePage.findField("Six").click();
      SelectablePage.findField("Eight").click();

      //validate changes
      SelectablePage.findField("Two").should("have.class", "active");
      SelectablePage.findField("Four").should("have.class", "active");
      SelectablePage.findField("Six").should("have.class", "active");
      SelectablePage.findField("Eight").should("have.class", "active");
      //validate other fields
      SelectablePage.findField("One").should("not.have.class", "active");
      SelectablePage.findField("Three").should("not.have.class", "active");
      SelectablePage.findField("Five").should("not.have.class", "active");
      SelectablePage.findField("Seven").should("not.have.class", "active");
      SelectablePage.findField("Nine").should("not.have.class", "active");


    });
  });

});
