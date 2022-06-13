module.exports = {
    validatePageTitle: () => {
        cy.get('div.md-subhead').contains('Advertisement');
    },

    enterName: (text) => {
        cy.get('input[name="name"]').clear().type(text);
    },

    enterStreet: (text) => {
        cy.get('input[name="street"]').clear().type(text);
    },

    enterRooms: (text) => {
        cy.get('input[name="rooms"]').clear().type(text);
    },

    enterPrice: (text) => {
        cy.get('input[name="price"]').clear().type(text);
    },

    selectStatus: (text) => {
        cy.get('md-checkbox>div.md-container').click({ force: true })
    },

    clickSaveButton: () => {
        cy.contains('save').click();
    }
}