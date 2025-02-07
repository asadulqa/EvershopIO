class shopObject {
    get clickButton(){
        return $ ("//a[text()='SHOP NOW']")
    }
    
}



module.exports = new shopObject();