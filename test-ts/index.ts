
import * as math from './math'

export class Test {
    public static defaultFactor = 1
    public mul() {
        return math.mult(2)
    }
}

const t = new Test()
console.log(t.mul())
