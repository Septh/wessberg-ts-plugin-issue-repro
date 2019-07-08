define("math", ["require", "exports", "index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.double = (x) => x * 2;
    exports.mult = (x, y = index_1.Test.defaultFactor) => x * y;
});
define("index", ["require", "exports", "math"], function (require, exports, math) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Test {
        mul() {
            return math.mult(2);
        }
    }
    Test.defaultFactor = 1;
    exports.Test = Test;
    const t = new Test();
    console.log(t.mul());
});
