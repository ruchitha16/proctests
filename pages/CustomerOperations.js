var testData = require('../test-data/data.json');

var CustomerOperations = function(){
    this.selectUser = function(fullName){
        element(by.model(testData.locators.customerLogin.selectCustomer)).sendKeys(fullName).click();
        element(by.buttonText(testData.locators.customerLogin.loginButton)).click();
        return this;
    };
    this.depositAmount= function(amount){
        element(by.css(testData.locators.customerDashboard.deposit)).click();
        element(by.model(testData.locators.deposit.amount)).sendKeys(amount);
        element(by.css(testData.locators.deposit.deposit)).click();
        var e1= element(by.css(testData.locators.customerDashboard.errorModel));
        e1.getText().then(function(text){
            console.log(text);
        });
        expect(e1.getText()).toEqual(testData.locators.deposit.depositSuccessMessage);
        return this;
    };
    this.withdrawAmountSuccess= function(amount){
        element(by.css(testData.locators.customerDashboard.withdrawl)).click();
        element(by.model(testData.locators.withdrawl.amount)).sendKeys(amount);
        element(by.css(testData.locators.withdrawl.withdrawl)).click();
        var e1= element(by.css(testData.locators.customerDashboard.errorModel));
        e1.getText().then(function(text){
            console.log(text);
        });
        expect(e1.getText()).toEqual(testData.locators.withdrawl.withDrawSuccessMessage);
        return this;
    };
    this.withdrawAmountFailure= function(amount){
        element(by.css(testData.locators.customerDashboard.withdrawl)).click();
        element(by.model(testData.locators.withdrawl.amount)).sendKeys(amount);
        element(by.css(testData.locators.withdrawl.withdrawl)).click();
        var e1= element(by.css(testData.locators.customerDashboard.errorModel));
        e1.getText().then(function(text){
            console.log(text);
        });
        expect(e1.getText()).toEqual(testData.locators.withdrawl.withDrawFailureMessage);
        return this;
    };
    this.viewTransaction= function(){
        element(by.css(testData.locators.customerDashboard.transactions)).click();
        return this;
    };


};
module.exports = new CustomerOperations();