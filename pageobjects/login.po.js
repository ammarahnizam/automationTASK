class LoginPage {
    get emailId() {
        return cy.get("#Username").as("EmailField");
    }

    get password() {
        return cy.get("#Password").as("Password");
    }

    get loginButton() {
        return cy.get("button[name='button']").as("LoginButton");
    }

    getUrl() {
        return 'https://www.xperthr.co.uk/';
    }

    navigate() {
        cy.visit(this.getUrl());
    }

    login() {
        cy.intercept("GET", "https://www.xperthr.co.uk/web/assets/shared/ClientSideConfig/ng-app-settings.json").as("WaitforPageLoad")
        cy.get('.loaded').shadow().find("#logInLink").click({ force: true });
        this.emailId.type("k2143795@kingston.ac.uk")
        this.password.type("Ea864B056$")
        this.loginButton.click();
        cy.wait('@WaitforPageLoad')
    }


}

export default LoginPage;