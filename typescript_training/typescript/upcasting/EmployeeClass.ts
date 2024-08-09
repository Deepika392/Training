class Employee{
    constructor(){

    }
     grossSalary(){
        return 2+3;
    }
}

class Trainer extends Employee{
    // grossSalary(): number {
    //     return 4+5+6+9*67;
    // }

    grossSalary(): number {
        return super.grossSalary()+9*9;
    }


    extraPay(){
        return 'extra pay method';
    }
}

let emp = new Employee();
emp= new Trainer();

console.log('emp',emp.grossSalary());


