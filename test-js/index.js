
import * as math from './math'

export class Test {
    mul() {
        return math.mult(2)
    }
}
Test.defaultFactor = 1

const t = new Test()
console.log(t.mul())
