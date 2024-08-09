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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        return 'animal class call ';
    };
    return Animal;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tiger.prototype.eat = function () {
        return 'tiget class';
    };
    return Tiger;
}(Animal));
var sheep = /** @class */ (function (_super) {
    __extends(sheep, _super);
    function sheep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    sheep.prototype.eat = function () {
        return 'call sheep class';
    };
    return sheep;
}(Animal));
var animal = new Animal();
var tiger = new Tiger();
var sh = new sheep();
function calleat(obj) {
    var res = obj.eat();
    return res;
}
console.log(calleat(animal));
console.log(calleat(tiger));
console.log(calleat(sh));
