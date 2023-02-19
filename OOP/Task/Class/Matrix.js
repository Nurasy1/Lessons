
class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = [];

        for (let i = 0; i < this.rows; i++) {
            this.data[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = 0;
            }
        }
    }

    setValues(values) {
        let index = 0;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = values[index];
                index++;
            }
        }
    }

    add(matrix) {


        const result = new Matrix(this.rows, this.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.data[i][j] = this.data[i][j] + matrix.data[i][j];
            }
        }
        return result;
    }
    minus(matrix) {
        const result = new Matrix(this.rows, this.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.data[i][j] = this.data[i][j] - matrix.data[i][j];
            }
        }
        return result;
    }

    multiply(matrix) {
        const result = new Matrix(this.rows, matrix.cols);
        for (let i = 0; i < result.rows; i++) {
            for (let j = 0; j < result.cols; j++) {
                let sum = 0;
                for (let k = 0; k < this.cols; k++) {
                    sum += this.data[i][k] * matrix.data[k][j];
                }
                result.data[i][j] = sum;
            }
        }
        return result;
    }

    print() {
        console.table(this.data);
    }
}

const matrixA = new Matrix(3, 3);
matrixA.setValues([1, 2, 3, 4, 5, 6,7,8,9]);
console.log('Matrix A:');
matrixA.print();

const matrixB = new Matrix(3, 3);
matrixB.setValues([7, 8, 9, 10, 11, 12,13,14,15]);
console.log('Matrix B:');
matrixB.print();

const matrixC = matrixA.add(matrixB);
console.log('Matrix A + B:');
matrixC.print();

const matrixD = matrixB.minus(matrixA);
console.log('Matrix A-B');
matrixD.print();

const matrixE = matrixA.multiply(matrixB);
console.log('Matrix A * B:');
matrixE.print();