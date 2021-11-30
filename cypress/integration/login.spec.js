/// <reference types="cypress" />
import LoginPage from "../pageobjects/login.po";

const loginob = new LoginPage();

describe('Verify login functionality', () => {

    it('Should successfully login into the app', () => {
        loginob.navigate();
        loginob.login();
        cy.url().should('include', 'https://www.xperthr.co.uk/')
        cy.contains("My dashboard").should("be.visible")


    })




})
