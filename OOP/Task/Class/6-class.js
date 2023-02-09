class MyComplex {
    constructor(real, imag) {
        this.real = real;
        this.imag = imag;
    }

    getReal() {
        return this.real;
    }

    setReal(real) {
        this.real = real;
    }

    getImag() {
        return this.imag;
    }

    setImag(imag) {
        this.imag = imag;
    }

    setValue(real, imag) {
        this.real = real;
        this.imag = imag;
    }

    toString() {
        const sign = this.imag < 0 ? "-" : "+";
        return this.real + sign + Math.abs(this.imag) + "i";
    }

    isReal() {
        return this.imag === 0;
    }

    isImaginary() {
        return this.real === 0;
    }

    equals(real, imag) {
        return this.real === real && this.imag === imag;
    }

    equals(another) {
        return this.real === another.real && this.imag === another.imag;
    }

    magnitude() {
        return Math.sqrt(this.real * this.real + this.imag * this.imag);
    }

    argumentInRadians() {
        return Math.atan2(this.imag, this.real);
    }

    argumentInDegrees() {
        return Math.atan2(this.imag, this.real) * 180 / Math.PI;
    }

    conjugate() {
        return new MyComplex(this.real, -this.imag);
    }

    add(another) {
        return new MyComplex(this.real + another.real, this.imag + another.imag);
    }

    subtract(another) {
        return new MyComplex(this.real - another.real, this.imag - another.imag);
    }

    multiplyWith(another) {
        return new MyComplex(
            this.real * another.real - this.imag * another.imag,
            this.real * another.imag + this.imag * another.real
        );
    }

    divideBy(another) {
        const denom = another.real * another.real + another.imag * another.imag;
        return new MyComplex(
            (this.real * another.real + this.imag * another.imag) / denom,
            (this.imag * another.real - this.real * another.imag) / denom
        );
    }
}

const c1 = new MyComplex(3, 4);
const c2 = new MyComplex(5, 6);

console.log(c1.toString());
console.log(c2.toString());

console.log(c1.add(c2).toString());
console.log(c1.subtract(c2).toString());
console.log(c1.multiplyWith(c2).toString());
console.log(c1.divideBy(c2).toString());