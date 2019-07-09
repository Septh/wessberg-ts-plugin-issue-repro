
import * as math from './math'

export interface ITest {
    // defaultFactor: number
    mul: () => number
}

export class Test implements ITest {
    public static defaultFactor = 1
    public mul() {
        return math.mult(2)
    }
}

const t = new Test()
console.log(t.mul())
