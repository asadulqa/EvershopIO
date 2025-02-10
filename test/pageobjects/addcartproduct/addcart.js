class addcardObject{
    get clickSearchButton(){
        return $ ('//a[@class="search-icon"]')
    }
    get enterproductname(){
        return $ ('//input[@placeholder="Search"]')
    }


}

module.exports = new addcardObject()