/*Составить описание класса для объектов-векторов, задаваемых координатами концов в трехмерном пространстве.
Обеспечить операции сложения и вычитания векторов с получением нового вектора (суммы или разности), вычисления
скалярного произведения двух векторов, длины вектора, косинуса угла между векторами. Написать программу,
демонстрирующую работу с этим классом. Программа должна содержать меню, позволяющее осуществить проверку всех методов
класса.
 */


class Vector {
    constructor(x1, y1, z1, x2, y2, z2) {
        this.x1 = x1;
        this.y1 = y1;
        this.z1 = z1;
        this.x2 = x2;
        this.y2 = y2;
        this.z2 = z2;
    }

    add(vector) {
        return new Vector(
            this.x1 + vector.x1,
            this.y1 + vector.y1,
            this.z1 + vector.z1,
            this.x2 + vector.x2,
            this.y2 + vector.y2,
            this.z2 + vector.z2
        );
    }

    subtract(vector) {
        return new Vector(
            this.x1 - vector.x1,
            this.y1 - vector.y1,
            this.z1 - vector.z1,
            this.x2 - vector.x2,
            this.y2 - vector.y2,
            this.z2 - vector.z2
        );
    }

    dotProduct(vector) {
        return (
            (this.x2 - this.x1) * (vector.x2 - vector.x1) +
            (this.y2 - this.y1) * (vector.y2 - vector.y1) +
            (this.z2 - this.z1) * (vector.z2 - vector.z1)
        );
    }

    length() {
        return Math.sqrt(
            Math.pow(this.x2 - this.x1, 2) +
            Math.pow(this.y2 - this.y1, 2) +
            Math.pow(this.z2 - this.z1, 2)
        );
    }

    cosine(vector) {
        return this.dotProduct(vector) / (this.length() * vector.length());
    }
}

const vector1 = new Vector(0, 0, 0, 3, 4, 0);
const vector2 = new Vector(0, 0, 0, 4, 3, 0);

console.log("Addition: ", vector1.add(vector2));
console.log("Subtraction: ", vector1.subtract(vector2));
console.log("Dot product: ", vector1.dotProduct(vector2));
console.log("Length: ", vector1.length());
console.log("Cosine: ", vector1.cosine(vector2));
