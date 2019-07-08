define("math", ["require", "exports", "index"], function (require, exports, index_1) {
    "use strict";
    exports.__esModule = true;
    exports.double = function (x) { return x * 2; };
    exports.mult = function (x, y) {
        if (y === void 0) { y = index_1.Test.defaultFactor; }
        return x * y;
    };
});
define("index", ["require", "exports", "math"], function (require, exports, math) {
    "use strict";
    exports.__esModule = true;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.prototype.mul = function () {
            return math.mult(2);
        };
        Test.defaultFactor = 1;
        return Test;
    }());
    exports.Test = Test;
    var t = new Test();
    console.log(t.mul());
});
