/// <reference types="cypress" />
import LoginPage from "../pageobjects/login.po";
import SearchPage from "../pageobjects/search.po";

const loginob = new LoginPage();
const searchob = new SearchPage();
describe('Verify search and filter functionality', () => {
    beforeEach(function() {
        loginob.navigate();
        loginob.login();

    })
    it('Should Show 20 Search Results Per Page for the keyword Pay', () => {
        searchob.searchaKeyword();
        cy.url().should('include', 'keywords=Pay')
        searchob.searchResults.should("contain.text", "Pay");
        searchob.searchResults.should("have.length", 20);

    })


    it('Should Show Search Results According to the Applied Filter', () => {
        searchob.filterResults();
        cy.contains('Law reports').click({ force: true });
        cy.get('h3').should('contain.text', 'Viewing results by:')
        cy.contains('Law reports').should('be.visible')
    })






})
