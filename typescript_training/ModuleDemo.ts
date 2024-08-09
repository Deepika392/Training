import { BankAccount,bankName,changeBankName as testalias } from "./typescript/Modules/bank";
import * as clg from './typescript/Modules/college';
import studntDefault from './typescript/Modules/college';
let account = new BankAccount();

console.log(account);
let account1 = new BankAccount('currentaccount');
console.log('account1',account1);

console.log('bankName',bankName);


console.log('bankname from function', testalias('test'));

//clg class object
let clg1 = new clg.collge(); //.method becz we create alais
console.log('clg',clg1);

// student object
let stud = new studntDefault(); //it will dirctly access to method
console.log('stud',stud);





