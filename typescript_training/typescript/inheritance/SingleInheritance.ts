class NeoEmployee{
    public  employeeId=0;
    public employeeName="";
    public basicSalary=0;
    public deptCode="";
    // instance methods
    // gross salary = bs+ta+da+hra : 5%, 10%, 12%
    getGrossSalary(){
        console.log("in NeoEmployee method...");
        return this.basicSalary+(0.05*this.basicSalary)+(0.1*this.basicSalary)+(0.12*this.basicSalary)
    }
}
class NeoTrainer extends NeoEmployee{
    trainingTechnologies:string[]=[];
    payPerHr=0;
    extraPay=0;
    getTechCount(){
        return this.trainingTechnologies.length;
    }
    getMonthlyPay(extraHrs=0){
        this.extraPay=extraHrs*this.payPerHr;
        return this.extraPay;
    }
}

let employee=new NeoEmployee();
employee.basicSalary=90000;
employee.deptCode="LD";
employee.employeeName="Karan Patil";
employee.employeeId=111;
console.log("Gross salary of Employee:"+ employee.getGrossSalary());

let trainer1=new NeoTrainer();
trainer1.employeeId=123;
trainer1.employeeName="Seema Pawar";
trainer1.deptCode="JS";
trainer1.basicSalary=90000;
trainer1.trainingTechnologies=["Java","Angular","React"];
trainer1.payPerHr=1000;
console.log("Count:"+trainer1.getTechCount());
console.log("Month Extra Pay"+trainer1.getMonthlyPay(30));
console.log("Gross salary of Trainer 1:"+ trainer1.getGrossSalary());