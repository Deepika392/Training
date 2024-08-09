export class BankAccount{
    private accountNumber : number; // public
    private customerId : number;
   private accountType : string;
   private accountBalance:number;

  
   constructor(accountType="current",accBal=0, custId=0, accNum=0){
       this.accountNumber=accNum;
       this.accountBalance=accBal;
       this.accountType=accountType;
       this.customerId=custId;
   }

   depositMoney(amount:number):number{
    this.accountBalance=this.accountBalance+amount;
    return this.accountBalance;
   }

   withdrawMoney(amount:number):number{
    if(amount>=this.accountBalance)
        this.accountBalance=this.accountBalance-amount;
    else
        throw new Error("Insufficient Balance");
    return this.accountBalance;
   }



   get custId(){
       return this.customerId;
   }
   set custId(customerId:number){
       this.customerId=customerId;
   }
   get accType(){
       return this.accountType
   }
   set accType(accountType:string){
       this.accountType=accountType;
   }
   
   
   
}

export let bankName = 'SBI Bank';

export function changeBankName(bank:string){
    return bank;

}