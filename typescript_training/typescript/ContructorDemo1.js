var BankAccount = /** @class */ (function () {
    function BankAccount() {
        console.log('call in construcot');
        this.accountNumber = 100000;
        this.custId = 11;
        this.accountBal = 70000;
    }
    BankAccount.prototype.withDrawMoney = function (amount) {
        if (amount >= this.accountBal)
            this.accountBal = this.accountBal - amount;
        else
            throw new Error("insufficient Bal");
        return this.accountBal;
    };
    return BankAccount;
}());
//object MI
var account1;
account1 = new BankAccount(); //call will go to constructor, if no constructor go to default constructor
//obejct M2
var account2 = new BankAccount();
console.log('first constructor is called becz with new keyword object is created', account1); //blanObject
console.log(account2);
console.log(account1.accountBal);
account1.accountBal = 7000;
account2.accountBal = 8000;
console.log(account1.accountBal);
console.log(account2.accountBal);
var account3 = account1;
console.log('constructor will not call becz its variable assigned', account3);
