var salary2; //type annonaton
salary2 = 4000;
console.log(typeof salary2);
console.log(salary2);
var destiantion;
destiantion = 'SSE';
console.log(destiantion);
var status1;
status1 = true;
console.log(status1);
var empId; //datatyep will change dynamically
empId = 679;
empId = 'test';
var test; //(or datatype it will allow bool and number)
var company = 'Neosoft';
console.log(company.length);
var address;
address = 'test address';
var lenthVal = address.length;
function add() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (a, b) { return a + b; });
}
console.log(add(2, 4));
