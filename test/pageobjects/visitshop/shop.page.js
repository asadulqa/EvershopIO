const shopAction = require('./shop')

class vistiShopAction {
    async clickShopbutton(){
        await shopAction.clickButton.click();
    }
}



module.exports = new vistiShopAction();