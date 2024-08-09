let salary2 : number;//type annonaton
salary2 = 4000;
console.log(typeof salary2);
console.log(salary2);

let destiantion : string;
destiantion='SSE';
console.log(destiantion);

let status1 : boolean;
status1 = true;
console.log(status1);

let empId : any; //datatyep will change dynamically
empId = 679;
empId = 'test'

let test: boolean|number //(or datatype it will allow bool and number)

let company = 'Neosoft';
console.log(company.length);

let address;
address = 'test address';
let lenthVal = (<string>address).length;

function add(...nums:number[]):number{
    return nums.reduce((a,b)=>a+b);
    
}

console.log(add(2,4));









