const homePage = require('../pages/home.page');
const addAdvertisemnetPage = require('../pages/addNewAdvertisemnet.page')
const advertisementData = require("../../fixtures/testData");

const API_URL = 'https://admin-advertisement.herokuapp.com/api/advertisements/';


describe("Edit the advertisemnet", () => {
    it("Edit the existing record and verify", () => {

        // create a new advertisemnet record through POST API
        cy.request({
            method: 'POST',
            url: API_URL,
            body: {
                "name": advertisementData.name2,
                "street": advertisementData.street2,
                "rooms": advertisementData.rooms2,
                "price": advertisementData.price2,
                "status": advertisementData.status
            },
        }).then((res) => {
            expect(res.status).to.eq(parseInt(200));
            expect(res.body.name).to.eq(advertisementData.name2);
            expect(res.body.street).to.eq(advertisementData.street2);
            expect(res.body.rooms).to.eq(advertisementData.rooms2);
            expect(res.body.price).to.eq(advertisementData.price2);
            expect(res.body.status).to.eq(advertisementData.status);
        })

        // visit the v=website 
        homePage.visit();
        homePage.getRowCount()
        //verifying and selecting the advertisemnet record which added by using API
        homePage.selectRecord(advertisementData.name2)
        addAdvertisemnetPage.validatePageTitle()
        // update the record
        addAdvertisemnetPage.enterName(advertisementData.updatedName)
        addAdvertisemnetPage.clickSaveButton()

        // verify the updated record using GET API Call
        cy.request({
            method: 'GET',
            url: API_URL,
        }).then((res) => {
            expect(res.status).to.eq(parseInt(200));
            for (let i = 0; i < res.body.length; i++) {
                if (res.body[i].name === advertisementData.updatedName) {
                    expect(res.body[i].name).to.eq(advertisementData.updatedName);
                    expect(res.body[i].street).to.eq(advertisementData.street2);
                    expect(res.body[i].rooms).to.eq(advertisementData.rooms2);
                    expect(res.body[i].price).to.eq(advertisementData.price2);
                    expect(res.body[i].status).to.eq(advertisementData.status);
                }
            }

        })
    });

    // I can add more tests (updating diff input values) , but I want to concetrate only on major tests

});