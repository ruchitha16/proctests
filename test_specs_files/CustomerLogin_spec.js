var base = require('../pages/BasePage');
var testData = require('../test-data/data.json');
describe("BankManager Login Test",function(){


    var home_page = require('../pages/Login');
    var managerOperation=require('../pages/ManagerOperations')
    var customerOperation= require('../pages/CustomerOperations')
   it("Login as Bank Manager",function(){
       base.navigateToURL(testData.testsiteurl);
       home_page.loginAsBankManager();

   }) ;
   it("Add Customer",function(){
    managerOperation.gotoAddCustomer().addCustomerInformation(testData.locators.addcustomerdetailspage.testdata.firstnameName,testData.locators.addcustomerdetailspage.testdata.lastName,testData.locators.addcustomerdetailspage.testdata.pinCode);

    }) ;
    it("Open Account",function(){
        managerOperation.gotoOpenAccount().openAccount(testData.locators.openAccount.customerName,testData.locators.openAccount.currencyData);
    });
    it("Login User",function(){
        base.navigateToURL(testData.testsiteurl);
       home_page.loginAsCustomer();
       customerOperation.selectUser(testData.locators.customerLogin.customerName);
    });
    it("Deposit Amount",function(){
        customerOperation.depositAmount(testData.locators.customerDashboard.depositAmount);
        browser.sleep(2000);
        
    });
    it("Withdraw Amount Positive",function(){
        customerOperation.withdrawAmountSuccess(testData.locators.customerDashboard.withdrawAmountPositive);
        browser.sleep(2000);
    
    });
    it("Withdraw Amount Negative",function(){
        customerOperation.withdrawAmountFailure(testData.locators.customerDashboard.withdrawAmountNegative);
        browser.sleep(2000);
    
    });
    it("View Transaction",function(){
        customerOperation.viewTransaction();
        browser.sleep(2000);
    });
});