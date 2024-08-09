var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.totalexp = function () {
        return 1;
    };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.totalexp = function () {
        return 2;
    };
    return B;
}());
var obj = new A();
console.log(obj.totalexp());
var obj1 = new B();
console.log(obj1.totalexp());
