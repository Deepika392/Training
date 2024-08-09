"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeBankName = exports.bankName = exports.BankAccount = void 0;
var BankAccount = /** @class */ (function () {
    function BankAccount(accountType, accBal, custId, accNum) {
        if (accountType === void 0) { accountType = "current"; }
        if (accBal === void 0) { accBal = 0; }
        if (custId === void 0) { custId = 0; }
        if (accNum === void 0) { accNum = 0; }
        this.accountNumber = accNum;
        this.accountBalance = accBal;
        this.accountType = accountType;
        this.customerId = custId;
    }
    BankAccount.prototype.depositMoney = function (amount) {
        this.accountBalance = this.accountBalance + amount;
        return this.accountBalance;
    };
    BankAccount.prototype.withdrawMoney = function (amount) {
        if (amount >= this.accountBalance)
            this.accountBalance = this.accountBalance - amount;
        else
            throw new Error("Insufficient Balance");
        return this.accountBalance;
    };
    Object.defineProperty(BankAccount.prototype, "custId", {
        get: function () {
            return this.customerId;
        },
        set: function (customerId) {
            this.customerId = customerId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "accType", {
        get: function () {
            return this.accountType;
        },
        set: function (accountType) {
            this.accountType = accountType;
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
exports.BankAccount = BankAccount;
exports.bankName = 'SBI Bank';
function changeBankName(bank) {
    return bank;
}
exports.changeBankName = changeBankName;
