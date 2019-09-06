// const bankTestData = require("../json/bankTestData.json");

const btnClick = (text) => {
     element(by.buttonText(text)).click();
}


const selectUser = () => {
     element(by.id('userSelect')).element(by.css("option[value='2']")).click();
}

const transaction = () => {
     element(by.css('[ng-click="transactions()"]')).click();
}

const deposit = () => {
     element(by.css("[ng-class='btnClass2']")).click();
}

const amount = (val) => {
     element(by.model('amount')).sendKeys(val)
}

const clickDeposit = () => {
     element(by.css("[type='submit']")).click();
}

const withdraw = () => {
     element(by.css('[ng-click="withdrawl()"]')).click();
}


//Manager

const addCustomer = () => {
     element(by.model("fName")).sendKeys("Rajesh");
     element(by.model("lName")).sendKeys("Kumar");
     element(by.model("postCd")).sendKeys(605003);
}


const customerSelect = () => {
     element(by.id('userSelect')).element(by.css("option[value='6']")).click();
}

const currencySelect = () => {
     element(by.model('currency')).element(by.css("option[value='Dollar']")).click();
}



const searchCustomer = () => {
     element(by.model('searchCustomer')).sendKeys("Rajesh kumar");
}









module.exports = { btnClick, selectUser, transaction, deposit, amount, withdraw, clickDeposit, addCustomer, customerSelect, currencySelect, searchCustomer }