var base = require('../pages/BasePage');
var testData = require('../test-data/data.json');
describe("BankManager Login Test",function(){


    var home_page = require('../pages/Login');
    var customer=require('../pages/ManagerOperations')
   it("Login as Bank Manager",function(){
       base.navigateToURL(testData.testsiteurl);
       home_page.loginAsBankManager();
       var title = base.getPageTitle();
       var testTiltle=testData.title;
       expect(title).toBe(testTiltle);
       browser.sleep(3000);

   }) ;
   it("Add Customer",function(){
    customer.gotoAddCustomer().addCustomerInformation(testData.locators.addcustomerdetailspage.testdata.firstnameName,testData.locators.addcustomerdetailspage.testdata.lastName,testData.locators.addcustomerdetailspage.testdata.pinCode);
    browser.sleep(3000);

    }) ;
    
    it("Search Customer",function(){
        browser.sleep(3000);
        customer.gotoSearchCustomer().validateCustomerRecords(testData.locators.customersComponent.searchCustomerData);
    }) ;

    it("Open Account",function(){
        customer.gotoOpenAccount().openAccount(testData.locators.openAccount.customerName,testData.locators.openAccount.currencyData);
    });
    it("Add Customer Duplicate",function(){
        customer.gotoAddCustomer().addCustomerInformationDuplicate(testData.locators.addcustomerdetailspage.testdata.firstnameName,testData.locators.addcustomerdetailspage.testdata.lastName,testData.locators.addcustomerdetailspage.testdata.pinCode);  
        }) ;

});
