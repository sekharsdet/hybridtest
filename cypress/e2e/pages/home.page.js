module.exports = {

    visit: () => {
        cy.visit("/")
    },

    goToAddNewAdvertisement: () => {
        cy.get("a.al-add__button").click();
    },


    getRowCount: () => {
        cy.get('tbody').then((body) => {
            let count = body.find('tr').length;
            cy.wrap(count).as(`count`);
        })

    },

    validateAddedCount: () => {
        cy.get('@count').then(count => {
            cy.get('tbody').find('tr').should(`have.length`, count + 1)
        })
    },

    selectRecord: (record) => {
        cy.contains(record).click()
    }
}