const P = 17;
const G = 11;

function double(a, b) {
    let A = G ** (a) % P;
    let B = G ** (b) % P;
    let S1 = A ** (b) % P;
    let S2 = B ** (a) % P;
    if (S1 === S2) {
        console.log(`S=${S1}`);
    }
    return [A, B];
}

console.log(double(11, 12));
/*

const P = 37;
const G = 23;

function trio(a, b, c) {
    let A = G ** (a) % P;
    let B = G ** (b) % P;
    let C = G ** (c) % P;
    let S1 = A ** (b * c) % P;
    let S2 = B ** (a * c) % P;
    let S3 = C ** (a * b) % P;
    let key = G ** (a * b * c) % P;
    if (S1 === S2 && S1 === S3 && S2 === S3) {
        console.log('Key:');
    }
    return key;
}

console.log(trio(3, 5, 7));
*/
