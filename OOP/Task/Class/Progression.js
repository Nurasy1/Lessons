class Progression {
    constructor(a1, n, q, an) {
        this.a1 = a1;
        this.n = n;
        this.q = q;

    }

    arithmetic() {
        const qwerty = ((2 * this.a1 + this.q * (this.n - 1)) * this.n) / 2;
        return qwerty;
    }

    geometric() {
        const ytrewq = (this.a1 * (Math.pow(this.q, this.n) - 1)) / (this.q - 1);
        return ytrewq;
    }
}

const arithmeticPlus = new Progression(2, 2, 2);
console.log(arithmeticPlus.arithmetic());
console.log(arithmeticPlus.geometric());