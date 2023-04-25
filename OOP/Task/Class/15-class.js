class Rational{
    constructor(a,b) {
        this.a = a;
        this.b = b;
    }

    add(other){
      const up = (this.a*other.b) + (other.a*this.b);
      const down = this.b * other.b;
      return(
          up/down
      );
    }

    sub(other){
        return(
            ((this.a*other.b)-(other.a*this.b))/(this.b*other.b)
        );
    }

    mul(other){
        return(
            (this.a*other.a)/(this.b*other.b)
        );
    }

    div(other){
        return(
            (this.a*other.b)/(this.b*other.a)
        );
    }

    /*equal(other){
        if ((this.a/this.b)>(other.a/other.b))
    }*/

}

const A = new Rational(2,3);
const B = new Rational(3,4);
console.log(A.add(B));
/*
console.log(A.sub(B));
console.log(A.mul(B));
console.log(A.div(B));*/
