
class FistAB {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    plus(point) {
        const numPlus = this.a * point.b + this.b * point.a;
        const denMulti = this.b * point.b;
        const gcdValue = this.gcd(numPlus, denMulti);
        return numPlus / gcdValue;
    }

    multi(point) {
        const denMulti = this.b * point.b;
        const gcdValue = this.gcd(this.b, point.b);
        return denMulti / gcdValue;
    }

    gcd(a, b) {
        if (b === 0) {
            return a;
        } else {
            return this.gcd(b, a % b);
        }
    }
}

const num = new FistAB(2, 6);
const den = new FistAB(1, 12 );
console.log((num.plus(den)) + "/" + (num.multi(den)));





