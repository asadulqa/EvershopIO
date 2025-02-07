const visitHome = require('../pageobjects/visitshop/shop.page.js')

describe("Visti the website and click on the shop now button", () => {

    it("click on the shop now button", async () =>{
        await visitHome.clickShopbutton()

    })
});