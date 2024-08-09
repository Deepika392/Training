var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.grossSalary = function () {
        return 2 + 3;
    };
    return Employee;
}());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // grossSalary(): number {
    //     return 4+5+6+9*67;
    // }
    Trainer.prototype.grossSalary = function () {
        return _super.prototype.grossSalary.call(this) + 9 * 9;
    };
    Trainer.prototype.extraPay = function () {
        return 'extra pay method';
    };
    return Trainer;
}(Employee));
var emp = new Employee();
emp = new Trainer();
console.log('emp', emp.grossSalary());
