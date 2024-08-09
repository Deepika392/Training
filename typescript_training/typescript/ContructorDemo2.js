var BankAccount = /** @class */ (function () {
    function BankAccount(accNumber, cusId, accBal, accType) {
        if (accNumber === void 0) { accNumber = 0; }
        if (cusId === void 0) { cusId = 0; }
        if (accBal === void 0) { accBal = 0; }
        if (accType === void 0) { accType = 'saving'; }
        console.log('call in construcot');
        this.accountNumber = accNumber;
        this.custId = cusId;
        this.accountBal = accBal;
        this.accountType = accType;
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
//call para constructor
var acc1 = new BankAccount(1111, 1);
console.log(acc1);
var acc2 = new BankAccount(22, 2, 33, 'salaryAccount');
console.log(acc2);
var acc3 = new BankAccount();
console.log(acc3);
