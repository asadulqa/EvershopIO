const addCart = require('./addcart')


class addcartAction {
    async searchButton(){
        await addCart.clickSearchButton.click();
    }
    async enterProductName(){
        await addCart.enterproductname.setValue("Nike");
        await browser.pause(3000);
    }


}

module.exports = new addcartAction();