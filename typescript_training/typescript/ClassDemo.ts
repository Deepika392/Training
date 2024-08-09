class BankAccount{
    accountNumber : number;// initial value willbe undefined
    custId: number;
    accountBal : number


    withDrawMoney(amount: number):number{
        if(amount >= this.accountBal)
            this.accountBal = this.accountBal-amount;
        else
            throw new Error("insufficient Bal")
        return this.accountBal;
    }
}

//object MI
let account1 :  BankAccount;
account1 = new BankAccount(); //call will go to constructor, if no constructor go to default constructor

//obejct M2

let account2 = new BankAccount();

console.log(account1);  //blanObject
console.log(account2);


console.log(account1.accountBal);

account1.accountBal = 7000;
account2.accountBal = 8000;


console.log(account1.accountBal);
console.log(account2.accountBal);

