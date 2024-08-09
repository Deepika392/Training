"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bank_1 = require("./typescript/Modules/bank");
var clg = require("./typescript/Modules/college");
var college_1 = require("./typescript/Modules/college");
var account = new bank_1.BankAccount();
console.log(account);
var account1 = new bank_1.BankAccount('currentaccount');
console.log('account1', account1);
console.log('bankName', bank_1.bankName);
console.log('bankname from function', (0, bank_1.changeBankName)('test'));
//clg class object
var clg1 = new clg.collge(); //.method becz we create alais
console.log('clg', clg1);
// student object
var stud = new college_1.default(); //it will dirctly access to method
console.log('stud', stud);
