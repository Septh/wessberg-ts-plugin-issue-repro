var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.mul = function () {
        return mult(2);
    };
    Test.defaultFactor = 1;
    return Test;
}());
var t = new Test();
console.log(t.mul());

var mult = function (x, y) {
    if (y === void 0) { y = Test.defaultFactor; }
    return x * y;
};

var Test$1 = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.mul = function () {
        return mult(2);
    };
    Test.defaultFactor = 1;
    return Test;
}());
var t$1 = new Test$1();
console.log(t$1.mul());

export { Test$1 as Test };
