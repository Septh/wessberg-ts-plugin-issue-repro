const mult = (x, y = Test.defaultFactor) => x * y;

class Test {
    mul() {
        return mult(2)
    }
}
Test.defaultFactor = 1;

const t = new Test();
console.log(t.mul());

export { Test };
