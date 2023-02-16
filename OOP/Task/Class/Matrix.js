class Matrix {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.data = [];

        for (let i = 0; i < rows; i++) {
            this.data[i] = [];

            for (let j = 0; j < columns; j++) {
                this.data[i][j] = 0;
            }
        }
    }
}

const matrix = new Matrix(3,3);
matrix.data[0][0] = 1;
const value = matrix.data[0][0];
matrix.data[0][0] = 1;
console.log(value);
