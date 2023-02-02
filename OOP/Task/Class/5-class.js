class MyPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distanceTo(point) {
        const xDiff = this.x - point.x;
        const yDiff = this.y - point.y;
        return Math.sqrt(xDiff ** 2 + yDiff ** 2);
    }

}

const pointA = new MyPoint(1, 1);
const pointB = new MyPoint(4, 5);
const pointC = new MyPoint(4,1);
console.log(pointA.distanceTo(pointB));
console.log(pointB.distanceTo(pointC));
console.log(pointC.distanceTo(pointA));
class MyTriangle {
    constructor(pointA,pointB,pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }
    getPerimeter() {
        return (pointA.distanceTo(pointB)) + (pointB.distanceTo(pointC)) + (pointC.distanceTo(pointA));
    }
}

const Triangle=new MyTriangle(pointA,pointB,pointC);
console.log(Triangle.getPerimeter());

