class SearchPage {

    get searchBox() {
        return cy.get('[name="search"]').as("SearchBox");
    }


    get searchResults() {
        return cy.get('.item-list-title').as("Search Results");
    }

    get showMoreLink() {
        return cy.get('span:contains(Show More):eq(0)').as("Show More Link");
    }

    get toolOption() {
        return cy.get('a[href="/search/?keywords=pay&searchMethod=default%20search&minimumScoreThreshold=0&originalKeywordsForMinimumScoreThreshold=pay&toolId=1&hasJurisdictionFilter=False&SaveFilterSelected=False"]')
            .as("Tool Option");
    }


    searchaKeyword() {
        cy.get("xhr-header-component")
            .shadow()
            .find("xhr-search-field")
            .shadow()
            .find("xhr-search")
            .shadow()
            .find('input').type('Pay {enter}', { force: true })

    }



    filterResults() {
        this.searchaKeyword()
        this.showMoreLink.click({ force: true })
    }

    selectToolOption() {
        this.toolOption.click();
    }

}

export default SearchPage;