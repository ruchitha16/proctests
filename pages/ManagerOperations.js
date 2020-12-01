
var testData = require('../test-data/data.json');


var ManagerOperations = function(){

    this.gotoAddCustomer = function(){

        element(by.css('[ng-click="addCust()"]')).click();
        return this;

    };

    this.gotoOpenAccount = function(){

        element(by.css('[ng-click="openAccount()"]')).click();
        return this;
    };

    this.gotoSearchCustomer = function(){

        element(by.buttonText("Customers")).click();
        return this;
    };

    this.addCustomerInformation = function(firstname,lastName,postcode){

        element(by.model(testData.locators.addcustomerdetailspage.firstName)).sendKeys(firstname);
        element(by.model(testData.locators.addcustomerdetailspage.lastName)).sendKeys(lastName);
        element(by.model(testData.locators.addcustomerdetailspage.pinCode)).sendKeys(postcode);
        browser.sleep(2000);
        element(by.css(testData.locators.addcustomerdetailspage.addcustomer)).click();
        browser.sleep(4000);

        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function(text){

            console.log(text);
        })

        alertDialog.accept();
        browser.sleep(2000);
        return this;

    };
    this.addCustomerInformationDuplicate = function(firstname,lastName,postcode){

        element(by.model(testData.locators.addcustomerdetailspage.firstName)).sendKeys(firstname);
        element(by.model(testData.locators.addcustomerdetailspage.lastName)).sendKeys(lastName);
        element(by.model(testData.locators.addcustomerdetailspage.pinCode)).sendKeys(postcode);
        browser.sleep(2000);
        element(by.css(testData.locators.addcustomerdetailspage.addcustomer)).click();
        browser.sleep(4000);

        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function(text){
            console.log(text);
        })
        expect(alertDialog.getText()).toEqual("Please check the details. Customer may be duplicate.");
        alertDialog.accept();
        browser.sleep(2000);
        return this;

    };


    this.openAccount = function(customer,currency){

       // mySelect.selectByText(customer);
        element(by.model('custId')).sendKeys(customer).click();
        //currencyType.selectByText(currency);
        element(by.model('currency')).sendKeys(currency).click();
        element(by.buttonText("Process")).click();


        browser.sleep(2000);

        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function(text){

            console.log(text);
        })

        alertDialog.accept();
        browser.sleep(2000);


    };

    this.validateCustomerRecords = function(name){

        element(by.model("searchCustomer")).sendKeys(name);
        browser.sleep(5000);
        var firstName = element(by.repeater("cust in Customers").row(0).column("cust.fName"));

        firstName.getText().then(function(text){


            console.log(text);
        });

        expect(firstName.getText()).toEqual(name);

        browser.sleep(2000);

    };




};
module.exports = new ManagerOperations();