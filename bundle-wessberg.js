class Test {
    mul() {
        return mult(2);
    }
}
Test.defaultFactor = 1;
const t = new Test();
console.log(t.mul());

const mult = (x, y = Test.defaultFactor) => x * y;

class Test$1 {
    mul() {
        return mult(2);
    }
}
Test$1.defaultFactor = 1;
const t$1 = new Test$1();
console.log(t$1.mul());

export { Test$1 as Test };
