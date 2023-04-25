const BigInteger = require('big-integer');
let p = BigInteger('503');
let q = BigInteger('251');
let h = BigInteger('7');
let w = (p-1)/q;
let g = BigInteger(h.pow(w).mod(p));


