const P = 17;
const G = 11;

function password(a, b) {
    let A = G ** (a) % P;
    let B = G ** (b) % P;
    if (A === 0 && B === 0) {
        return true;
    }

    let S1 = A ** (b) % P;
    let S2 = B ** (a) % P;
    if (S1 === S2) {
        console.log(`S=${S1}`);
    }
    return [A, B];
}

console.log(password(11, 12));