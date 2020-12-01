var Login=function(){
    
    this.loginAsBankManager = function(){
        element(by.css('[ng-click="manager()"]')).click();
        return require('./ManagerOperations.js');

    };

    this.loginAsCustomer = function(){
        element(by.css('[ng-click="customer()"]')).click();
        return require('./CustomerOperations.js');
    }
}
module.exports = new Login();