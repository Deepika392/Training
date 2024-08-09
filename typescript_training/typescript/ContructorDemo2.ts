class BankAccount{
    accountNumber : number;// initial value willbe undefined
    custId: number;
    accountBal : number;
    accountType: string;
    

    constructor(accNumber=0,cusId=0,accBal=0,accType='saving'){
        console.log('call in construcot');
        
        this.accountNumber=accNumber;
        this.custId = cusId;
        this.accountBal = accBal;
        this.accountType = accType;
    }

    withDrawMoney(amount: number):number{
        if(amount >= this.accountBal)
            this.accountBal = this.accountBal-amount;
        else
            throw new Error("insufficient Bal")
        return this.accountBal;
    }
}




//call para constructor

let acc1 = new BankAccount(1111,1);
console.log(acc1);

let acc2 = new  BankAccount(22,2,33,'salaryAccount')
console.log(acc2);

let acc3 = new BankAccount();
console.log(acc3);





