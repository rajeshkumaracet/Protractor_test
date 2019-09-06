let { btnClick, selectUser, transaction, deposit, amount, clickDeposit, withdraw, addCustomer, customerSelect, currencySelect, searchCustomer } = require("../pages/bank_page");

describe("Bank page Automation", () => {

     it("Login Check", () => {
          browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
          btnClick("Customer Login");
          expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/customer');
     })

     it("should Selecting User", () => {
          selectUser();
          btnClick("Login");
          expect(browser.getCurrentUrl()).toEqual("http://www.way2automation.com/angularjs-protractor/banking/#/account");
          expect(element(by.css(".fontBig")).getText()).toBe("Harry Potter")

     });


     it("should in transaction link", () => {
          transaction();
          expect(browser.getCurrentUrl()).toEqual("http://www.way2automation.com/angularjs-protractor/banking/#/listTx");
          btnClick("Back");

     });


     it("should in Deposit link", () => {
          deposit();
          browser.sleep(2000)
          amount(5000);
          clickDeposit();
          expect(element(by.className("error ng-binding")).getText()).toEqual("Deposit Successful");
     });

     it('should it withdraw', () => {
          withdraw();
          amount(3000);
          btnClick("Withdraw")
          expect(element(by.className('error ng-binding')).getText()).toEqual('Transaction successful');

     });

     it('should it logout', () => {
          btnClick("Logout")
          expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/customer');
          btnClick("Home")

     });

     //Manager Login Pages

     it('should in manager portal', () => {
          btnClick("Bank Manager Login")
          expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/manager');

     });

     it('should at Add customer', () => {
          btnClick("Add Customer")
          expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust');
     });

     it("should add Customer", () => {
          addCustomer();
          browser.sleep(5000)
          element(by.css(".btn-default")).click()
          let alert = browser.switchTo().alert();
          expect(alert.getText()).toContain("Customer added successfully");
          alert.accept();
     })

     it('should at open account', () => {
          btnClick("Open Account")
          expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/manager/openAccount');
     });

     it("should manager add account", () => {
          customerSelect();
          currencySelect();
          btnClick("Process")
          let alert1 = browser.switchTo().alert();
          expect(alert1.getText()).toContain("Account created successfully with account Number");
          alert.accept();

     });


     it("should in CustomerPage", () => {
          btnClick("Customers");
          expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/manager/list');

     });


     // it("Should customer in customerPage", () => {
     //      let counting = element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
     //      expect(counting.count()).toEqual(6);
     // })


     // it('should search the customer', () => {
     //      searchCustomer();
     // });

     // it('should check', () => {
     //      var rows = element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
     //      browser.sleep('3000');
     //      rows.each(function (row) {
     //           var cells = row.$$('td');
     //           cells.get(0).getText().then(function (txt) {
     //                if (txt === 'Rajesh') {
     //                     cells.get(4).$('button').click();
     //                }
     //           })
     //      })
     //      browser.sleep(5000)

     // });



})







