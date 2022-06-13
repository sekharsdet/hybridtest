const homePage = require('../pages/home.page');
const addAdvertisemnetPage = require('../pages/addNewAdvertisemnet.page')
const advertisementData = require("../../fixtures/testData");

const API_URL = 'https://admin-advertisement.herokuapp.com/api/advertisements/';


describe("Add a advertisemnet", () => {
    it("Add new advertisemnet with valid data", () => {
        //create a new advertisemnet from web UI
        homePage.visit();
        homePage.getRowCount()
        homePage.goToAddNewAdvertisement()
        addAdvertisemnetPage.validatePageTitle()
        addAdvertisemnetPage.enterName(advertisementData.name)
        addAdvertisemnetPage.enterStreet(advertisementData.street)
        addAdvertisemnetPage.enterRooms(advertisementData.rooms)
        addAdvertisemnetPage.enterPrice(advertisementData.price)
        addAdvertisemnetPage.selectStatus()
        addAdvertisemnetPage.clickSaveButton()
        // verifying the count of the record
        homePage.validateAddedCount();
        // verifying the just created advertisemnet record from web ui via GET API Call
        cy.request({
            method: 'GET',
            url: API_URL,
        }).then((res) => {
            expect(res.status).to.eq(parseInt(200));
            for (let i = 0; i < res.body.length; i++) {
                if (res.body[i].name === advertisementData.updatedName) {
                    expect(res.body[0].name).to.eq(advertisementData.name);
                    expect(res.body[0].street).to.eq(advertisementData.street);
                    expect(res.body[0].rooms).to.eq(advertisementData.rooms);
                    expect(res.body[0].price).to.eq(advertisementData.price);
                    expect(res.body[0].status).to.eq(advertisementData.status);
                }
            }
        })
    });
    // I can add more tests (client validations , alert), but I want to concetrate only on major tests

});