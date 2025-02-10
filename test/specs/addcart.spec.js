const productCart = require('../pageobjects/addcartproduct/addcart.page.js')

describe("Add to product in the cart and verify the product price and title", () =>{


    it("click on the search button and seach the product in the cart" , async () =>{
        await productCart.searchButton();
        await productCart.enterProductName();
    })

})